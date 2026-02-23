#!/usr/bin/env node

/**
 * build-registry.mjs
 *
 * Generates shadcn-compatible registry JSON files for every primitive and block
 * in the @repo/ui package. The script:
 *
 *   1. Scans src/components/ui/*.tsx for primitives
 *   2. Scans src/components/blocks/ for block groups
 *   3. Reads each source file and rewrites internal relative imports to @/ aliases
 *   4. Detects npm dependencies and registryDependencies from rewritten content
 *   5. Writes individual registry item files to public/r/<name>.json
 *   6. Writes the full manifest to registry.json and public/r/registry.json
 *   7. Preserves the gmhlab-theme item from the existing registry.json
 *
 * No external dependencies — Node.js built-ins only.
 */

import { readdir, readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { join, basename, extname, dirname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PKG_ROOT = resolve(__dirname, "..");
const SRC = join(PKG_ROOT, "src");
const COMPONENTS = join(SRC, "components");
const UI_DIR = join(COMPONENTS, "ui");
const BLOCKS_DIR = join(COMPONENTS, "blocks");
const PUBLIC_R = join(PKG_ROOT, "public", "r");
const REGISTRY_PATH = join(PKG_ROOT, "registry.json");

// ---------------------------------------------------------------------------
// Known npm packages — any import specifier starting with one of these (or
// matching exactly) is classified as an npm dependency. We also treat any
// bare specifier that is not relative, not react/react-dom, and not an
// internal @/ alias as an npm dep.
// ---------------------------------------------------------------------------

const REACT_FAMILY = new Set(["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"]);

/**
 * Returns true when an import specifier is a third-party npm dependency.
 */
function isNpmDep(specifier) {
  if (specifier.startsWith(".") || specifier.startsWith("@/")) return false;
  if (REACT_FAMILY.has(specifier)) return false;
  if (specifier.startsWith("react/")) return false;
  if (specifier.startsWith("react-dom/")) return false;
  return true;
}

/**
 * Normalise an npm specifier to a package name (handles scoped packages).
 * e.g. "@tabler/icons-react" -> "@tabler/icons-react"
 *      "lucide-react"        -> "lucide-react"
 *      "sonner"              -> "sonner"
 *      "radix-ui"            -> "radix-ui"
 */
function npmPackageName(specifier) {
  if (specifier.startsWith("@")) {
    // Scoped: take first two segments
    const parts = specifier.split("/");
    return parts.slice(0, 2).join("/");
  }
  // Unscoped: take first segment
  return specifier.split("/")[0];
}

// ---------------------------------------------------------------------------
// Set of all known primitive names (populated at scan time).
// ---------------------------------------------------------------------------

let PRIMITIVE_NAMES = new Set();

// ---------------------------------------------------------------------------
// Import rewriting
// ---------------------------------------------------------------------------

/**
 * Regex that matches all import/export … from "specifier" and
 * import "specifier" statements, capturing the specifier.
 *
 * We handle:
 *   import { X } from "specifier"
 *   import X from "specifier"
 *   import * as X from "specifier"
 *   import type { X } from "specifier"
 *   export { X } from "specifier"
 *   export * from "specifier"
 *   export type { X } from "specifier"
 *   import "specifier" (side-effect)
 *
 * Both single and double quotes are supported.
 */
const IMPORT_RE = /(?:import|export)\s+(?:type\s+)?(?:(?:\{[^}]*\}|[^"';\n]+)\s+from\s+)?["']([^"']+)["']/g;

/**
 * Given the absolute path of a source file, and the path of the components/
 * directory, compute the rewritten content and collect dependency info.
 *
 * Returns { content, npmDeps, registryDeps }.
 */
function rewriteFile(sourceContent, sourceAbsPath, componentsDir) {
  const npmDeps = new Set();
  const registryDeps = new Set();

  // Compute the directory of the source file relative to src/components/
  const relToComponents = relative(componentsDir, sourceAbsPath);
  const isInUiDir = relToComponents.startsWith("ui/") || relToComponents.startsWith("ui\\");

  const rewritten = sourceContent.replace(IMPORT_RE, (match, specifier) => {
    // 1. Already an @/ alias — leave as-is but collect deps
    if (specifier.startsWith("@/")) {
      collectFromAlias(specifier, registryDeps);
      return match;
    }

    // 2. @repo/ui — rewrite to individual @/components/ui/<name> imports.
    //    This is a package self-reference used in some block files. We need
    //    to figure out which primitives are actually imported. Since we can't
    //    easily resolve barrel exports, we rewrite "@repo/ui" to "@repo/ui"
    //    BUT we mark all named imports as registry deps by parsing the import
    //    names and matching against known primitives.
    if (specifier === "@repo/ui") {
      // Extract imported names to determine registry deps
      const namedImportMatch = match.match(/\{\s*([^}]+)\s*\}/);
      if (namedImportMatch) {
        const names = namedImportMatch[1].split(",").map((n) => n.trim().split(/\s+as\s+/)[0].trim());
        for (const name of names) {
          const primName = findPrimitiveForExport(name);
          if (primName) {
            registryDeps.add(primName);
          }
        }
      }
      // Rewrite @repo/ui -> individual primitive imports would be ideal,
      // but the barrel import pattern makes this non-trivial. Instead, we
      // leave the specifier but rewrite to a flat alias.
      // Actually, for registry output, we should NOT leave @repo/ui — we
      // should rewrite it. The best approximation: keep the import statement
      // as-is but change the specifier to @/components/ui/<best-guess>.
      //
      // However, since a single import line pulls from the barrel, and we
      // can't split it, we simply map @repo/ui -> @/components/ui (the
      // barrel). Consumers of the registry would need the barrel to exist.
      // A more precise approach: map each named import to its primitive file.
      //
      // For simplicity and correctness with shadcn conventions, we rewrite
      // the entire barrel import to use individual @/components/ui/<name>
      // imports. But that would change the line count and structure. Instead,
      // we keep the line structure and just change the specifier.
      return match.replace(`"${specifier}"`, `"@/components/ui"`).replace(`'${specifier}'`, `'@/components/ui'`);
    }

    // 3. npm dependency — leave as-is, collect
    if (isNpmDep(specifier)) {
      npmDeps.add(npmPackageName(specifier));
      return match;
    }

    // 4. Relative import — resolve and rewrite
    if (specifier.startsWith(".")) {
      const resolvedAbs = resolve(dirname(sourceAbsPath), specifier);
      const resolvedRel = relative(componentsDir, resolvedAbs);
      const normalised = resolvedRel.replace(/\\/g, "/");

      // Pattern A: ../../lib/utils or ../../../../lib/utils -> @/lib/utils
      if (normalised.startsWith("../lib/") || normalised === "../lib/utils" || normalised.startsWith("../../lib/")) {
        // Resolve from the components dir to find the actual relative path from src/
        const fromSrc = relative(join(componentsDir, ".."), resolvedAbs).replace(/\\/g, "/");
        return match
          .replace(`"${specifier}"`, `"@/${fromSrc}"`)
          .replace(`'${specifier}'`, `'@/${fromSrc}'`);
      }

      // Pattern B: ../../hooks/use-mobile or ../../../../hooks/use-mobile -> @/hooks/use-mobile
      if (normalised.startsWith("../hooks/") || normalised.startsWith("../../hooks/")) {
        const fromSrc = relative(join(componentsDir, ".."), resolvedAbs).replace(/\\/g, "/");
        return match
          .replace(`"${specifier}"`, `"@/${fromSrc}"`)
          .replace(`'${specifier}'`, `'@/${fromSrc}'`);
      }

      // Pattern C: Sibling primitive in ui/ dir -> @/components/ui/<name>
      if (isInUiDir && normalised.startsWith("ui/") === false) {
        // This shouldn't happen for ui/ files referencing siblings — let's
        // check if it resolves to the ui dir
      }
      if (isInUiDir) {
        // Sibling import like ./button -> @/components/ui/button
        const targetName = basename(specifier, extname(specifier));
        // Only rewrite if the target is in ui/ (sibling) and not a subdir
        if (specifier.startsWith("./") && !specifier.includes("/", 2)) {
          registryDeps.add(targetName);
          return match
            .replace(`"${specifier}"`, `"@/components/ui/${targetName}"`)
            .replace(`'${specifier}'`, `'@/components/ui/${targetName}'`);
        }
      }

      // Pattern D: Block file importing from ../../ui/<name> or ../../../ui/<name>
      if (normalised.startsWith("ui/")) {
        const primitiveName = normalised.replace("ui/", "").replace(/\.\w+$/, "");
        registryDeps.add(primitiveName);
        return match
          .replace(`"${specifier}"`, `"@/components/ui/${primitiveName}"`)
          .replace(`'${specifier}'`, `'@/components/ui/${primitiveName}'`);
      }

      // Pattern E: Imports to components/ level files (theme-toggle, theme-toggle-01,
      // image-with-fallback, theme-provider, etc.)
      // These resolve to paths like "theme-toggle", "theme-toggle-01", "image-with-fallback"
      // (directly under components/ but not in ui/)
      if (!normalised.includes("/") || normalised.match(/^[a-z0-9-]+$/)) {
        // It's a file directly in components/ dir
        const compName = basename(normalised, extname(normalised));
        return match
          .replace(`"${specifier}"`, `"@/components/${compName}"`)
          .replace(`'${specifier}'`, `'@/components/${compName}'`);
      }

      // Pattern F: Internal block imports (./components/foo, ./types, ./data.json,
      // sibling imports within block components/ like ./gallery, ../types)
      // These are kept as-is since they are internal to the block.
      return match;
    }

    // 5. Anything else — leave as-is
    return match;
  });

  return { content: rewritten, npmDeps, registryDeps };
}

/**
 * Given an @/ alias specifier, add to registryDeps if it points to a ui primitive.
 */
function collectFromAlias(specifier, registryDeps) {
  // @/components/ui/<name> -> add <name>
  const uiMatch = specifier.match(/^@\/components\/ui\/(.+)$/);
  if (uiMatch) {
    registryDeps.add(uiMatch[1]);
  }
}

/**
 * Given a PascalCase export name (e.g. "Button", "CardContent"), attempt to
 * find which primitive file it comes from. This is a best-effort mapping
 * used for @repo/ui barrel imports.
 */
function findPrimitiveForExport(exportName) {
  // Convert PascalCase to kebab-case and try to match
  const kebab = exportName
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();

  // Direct match
  if (PRIMITIVE_NAMES.has(kebab)) return kebab;

  // Try prefix matching: e.g. "CardContent" -> "card-content" -> try "card"
  // Common patterns: ButtonGroup -> button-group, AccordionContent -> accordion
  for (const name of PRIMITIVE_NAMES) {
    if (kebab.startsWith(name + "-") || kebab === name) {
      return name;
    }
  }

  // Try the first word only: "SelectContent" -> "select"
  const firstWord = kebab.split("-")[0];
  if (PRIMITIVE_NAMES.has(firstWord)) return firstWord;

  // Some special-case mappings
  const specialMappings = {
    toaster: "sonner",
    tooltipprovider: "tooltip",
    tooltiptrigger: "tooltip",
    tooltipcontent: "tooltip",
  };
  const lower = exportName.toLowerCase();
  if (specialMappings[lower]) return specialMappings[lower];

  return null;
}

// ---------------------------------------------------------------------------
// File scanning
// ---------------------------------------------------------------------------

/**
 * List .tsx files in a directory (non-recursive).
 */
async function listTsxFiles(dir) {
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    return entries
      .filter((e) => e.isFile() && e.name.endsWith(".tsx"))
      .map((e) => e.name);
  } catch {
    return [];
  }
}

/**
 * Check if a path is a directory.
 */
async function isDirectory(p) {
  try {
    const s = await stat(p);
    return s.isDirectory();
  } catch {
    return false;
  }
}

/**
 * Recursively collect all files in a directory, returning paths relative to
 * the given base directory.
 *
 * Returns array of { absPath, relPath } where relPath is relative to `base`.
 */
async function collectFiles(dir, base) {
  const results = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return results;
  }

  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      const sub = await collectFiles(full, base);
      results.push(...sub);
    } else if (entry.isFile()) {
      // Include .tsx, .ts, .json files (skip index.ts barrel files)
      const ext = extname(entry.name);
      if ([".tsx", ".ts", ".json"].includes(ext)) {
        // Skip barrel index files
        if (entry.name === "index.ts" || entry.name === "index.tsx") continue;
        results.push({ absPath: full, relPath: relative(base, full).replace(/\\/g, "/") });
      }
    }
  }

  return results;
}

// ---------------------------------------------------------------------------
// Registry item file type classification
// ---------------------------------------------------------------------------

function registryFileType(filePath) {
  const ext = extname(filePath);
  if (ext === ".tsx") return "registry:component";
  // .ts and .json files are generic registry files
  return "registry:file";
}

// ---------------------------------------------------------------------------
// Primitive processing
// ---------------------------------------------------------------------------

async function buildPrimitiveItem(fileName) {
  const name = basename(fileName, ".tsx");
  const absPath = join(UI_DIR, fileName);
  const sourceContent = await readFile(absPath, "utf-8");

  const { content, npmDeps, registryDeps } = rewriteFile(sourceContent, absPath, COMPONENTS);

  return {
    name,
    type: "registry:ui",
    dependencies: [...npmDeps].sort(),
    registryDependencies: [...registryDeps].sort(),
    files: [
      {
        path: `registry/new-york/ui/${name}.tsx`,
        content,
        type: "registry:ui",
      },
    ],
  };
}

// ---------------------------------------------------------------------------
// Block processing
// ---------------------------------------------------------------------------

/**
 * Top-level directories under blocks/ that correspond to individual block
 * registry items.
 */
async function getBlockDirs() {
  const entries = await readdir(BLOCKS_DIR, { withFileTypes: true });
  return entries
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();
}

async function buildBlockItem(blockName) {
  const blockDir = join(BLOCKS_DIR, blockName);
  const allFiles = await collectFiles(blockDir, blockDir);

  const npmDeps = new Set();
  const registryDeps = new Set();
  const files = [];

  for (const { absPath, relPath } of allFiles) {
    const ext = extname(absPath);
    const sourceContent = await readFile(absPath, "utf-8");

    if (ext === ".tsx" || ext === ".ts") {
      const result = rewriteFile(sourceContent, absPath, COMPONENTS);
      for (const d of result.npmDeps) npmDeps.add(d);
      for (const d of result.registryDeps) registryDeps.add(d);

      files.push({
        path: `registry/new-york/${blockName}/${relPath}`,
        content: result.content,
        type: registryFileType(relPath),
      });
    } else if (ext === ".json") {
      // JSON files (like data.json) are included as-is
      files.push({
        path: `registry/new-york/${blockName}/${relPath}`,
        content: sourceContent,
        type: "registry:file",
      });
    }
  }

  // Sort files by path for deterministic output
  files.sort((a, b) => a.path.localeCompare(b.path));

  return {
    name: blockName,
    type: "registry:block",
    dependencies: [...npmDeps].sort(),
    registryDependencies: [...registryDeps].sort(),
    files,
  };
}

// ---------------------------------------------------------------------------
// Manifest helpers
// ---------------------------------------------------------------------------

/**
 * Strip file content from an item for the manifest (files array still present
 * but without content).
 */
function manifestItem(item) {
  return {
    name: item.name,
    type: item.type,
    ...(item.title ? { title: item.title } : {}),
    ...(item.description ? { description: item.description } : {}),
    ...(item.cssVars ? { cssVars: item.cssVars } : {}),
    dependencies: item.dependencies,
    registryDependencies: item.registryDependencies,
    files: (item.files || []).map((f) => ({
      path: f.path,
      type: f.type,
    })),
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("build-registry: starting...\n");

  // Ensure output directory exists
  await mkdir(PUBLIC_R, { recursive: true });

  // -----------------------------------------------------------------------
  // 1. Scan primitives
  // -----------------------------------------------------------------------

  const primitiveFiles = (await listTsxFiles(UI_DIR)).sort();
  PRIMITIVE_NAMES = new Set(primitiveFiles.map((f) => basename(f, ".tsx")));

  console.log(`  Primitives found: ${primitiveFiles.length}`);

  // -----------------------------------------------------------------------
  // 2. Scan blocks
  // -----------------------------------------------------------------------

  const blockNames = await getBlockDirs();
  console.log(`  Blocks found:     ${blockNames.length} (${blockNames.join(", ")})`);

  // -----------------------------------------------------------------------
  // 3. Build primitive items
  // -----------------------------------------------------------------------

  const primitiveItems = [];
  for (const fileName of primitiveFiles) {
    const item = await buildPrimitiveItem(fileName);
    primitiveItems.push(item);
  }
  console.log(`  Primitive items built: ${primitiveItems.length}`);

  // -----------------------------------------------------------------------
  // 4. Build block items
  // -----------------------------------------------------------------------

  const blockItems = [];
  for (const blockName of blockNames) {
    const item = await buildBlockItem(blockName);
    blockItems.push(item);
  }
  console.log(`  Block items built:     ${blockItems.length}`);

  // -----------------------------------------------------------------------
  // 5. Preserve gmhlab-theme from existing registry.json
  // -----------------------------------------------------------------------

  let preservedItems = [];
  try {
    const existingRaw = await readFile(REGISTRY_PATH, "utf-8");
    const existing = JSON.parse(existingRaw);
    if (existing.items && Array.isArray(existing.items)) {
      preservedItems = existing.items.filter(
        (item) =>
          // Keep items that are NOT primitives or blocks we just generated
          // (i.e. styles, themes, or other special items)
          item.type === "registry:style" ||
          (!primitiveFiles.some((f) => basename(f, ".tsx") === item.name) &&
            !blockNames.includes(item.name))
      );
    }
  } catch {
    console.log("  (No existing registry.json to read, starting fresh)");
  }

  if (preservedItems.length > 0) {
    console.log(
      `  Preserved items:       ${preservedItems.length} (${preservedItems.map((i) => i.name).join(", ")})`
    );
  }

  // -----------------------------------------------------------------------
  // 6. Write individual public/r/<name>.json files
  // -----------------------------------------------------------------------

  let filesWritten = 0;

  for (const item of primitiveItems) {
    const outPath = join(PUBLIC_R, `${item.name}.json`);
    const json = {
      $schema: "https://ui.shadcn.com/schema/registry-item.json",
      ...item,
    };
    await writeFile(outPath, JSON.stringify(json, null, 2) + "\n", "utf-8");
    filesWritten++;
  }

  for (const item of blockItems) {
    const outPath = join(PUBLIC_R, `${item.name}.json`);
    const json = {
      $schema: "https://ui.shadcn.com/schema/registry-item.json",
      ...item,
    };
    await writeFile(outPath, JSON.stringify(json, null, 2) + "\n", "utf-8");
    filesWritten++;
  }

  // Write preserved items too (e.g. gmhlab-theme)
  for (const item of preservedItems) {
    const outPath = join(PUBLIC_R, `${item.name}.json`);
    const json = {
      $schema: "https://ui.shadcn.com/schema/registry-item.json",
      ...item,
    };
    await writeFile(outPath, JSON.stringify(json, null, 2) + "\n", "utf-8");
    filesWritten++;
  }

  console.log(`\n  Files written to public/r/: ${filesWritten}`);

  // -----------------------------------------------------------------------
  // 7. Build and write the manifest (registry.json)
  // -----------------------------------------------------------------------

  const allItems = [
    ...primitiveItems.map(manifestItem),
    ...blockItems.map(manifestItem),
    ...preservedItems,
  ];

  const manifest = {
    $schema: "https://github.com/gmh/monorepo",
    name: "gmhlab",
    homepage: "https://gwglobalmentalhealth.com",
    items: allItems,
  };

  // Write root registry.json
  await writeFile(REGISTRY_PATH, JSON.stringify(manifest, null, 2) + "\n", "utf-8");
  console.log("  Written: registry.json");

  // Write public/r/registry.json (public manifest — same content)
  const publicManifestPath = join(PUBLIC_R, "registry.json");
  await writeFile(publicManifestPath, JSON.stringify(manifest, null, 2) + "\n", "utf-8");
  console.log("  Written: public/r/registry.json");

  // -----------------------------------------------------------------------
  // Summary
  // -----------------------------------------------------------------------

  const totalItems = primitiveItems.length + blockItems.length + preservedItems.length;
  console.log(
    `\nbuild-registry: done. ${totalItems} items total ` +
      `(${primitiveItems.length} primitives, ${blockItems.length} blocks, ` +
      `${preservedItems.length} preserved).`
  );
}

main().catch((err) => {
  console.error("build-registry: fatal error:", err);
  process.exit(1);
});
