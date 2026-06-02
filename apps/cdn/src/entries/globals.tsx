import { Navbar2, Footer2 } from "@repo/ui";
import { mount } from "../bootstrap";

const navigationData = [
  { title: "App", href: "/dashboard" },
  { title: "Content", href: "/site" },
  { title: "Social", href: "/links" },
  { title: "Login", href: "/login" },
];

function Specimen({
  name,
  description,
  children,
}: {
  name: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6">
        <h2 className="text-sm font-mono font-semibold uppercase tracking-wider text-muted-foreground">
          {name}
        </h2>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="mt-6 overflow-hidden">{children}</div>
    </section>
  );
}

function GlobalsDemo() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            Global chrome
          </h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            The site-wide navbars and footers from{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
              @repo/ui · blocks/globals
            </code>
            .
          </p>
        </div>
      </header>

      <Specimen
        name="Navbar2"
        description="Primary app/site navigation with logo, mode toggle, search, and a mobile dropdown menu."
      >
        <Navbar2 navigationData={navigationData} />
      </Specimen>

      <Specimen
        name="Footer2"
        description="Marketing footer with link columns, tagline, logo mark, and a legal bottom bar. Renders with its default content."
      >
        <Footer2 />
      </Specimen>
    </div>
  );
}

mount(<GlobalsDemo />);
