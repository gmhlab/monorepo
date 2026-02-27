#!/usr/bin/env bash
# Syncs apps/cdn/dist/ into docs/, preserving docs/README.md

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$REPO_ROOT/apps/cdn/dist"
DEST="$REPO_ROOT/docs"

if [ ! -d "$SRC" ]; then
  echo "Error: $SRC does not exist. Run the CDN build first." >&2
  exit 1
fi

# rsync everything from dist/ into docs/, deleting old files
# but exclude README.md so it stays untouched
rsync -av --delete --exclude='README.md' "$SRC/" "$DEST/"

echo "Done. Synced $SRC -> $DEST (README.md preserved)."
