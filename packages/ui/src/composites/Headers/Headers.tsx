"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../../primitives/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../../primitives/sheet";
import { cn } from "../../lib/utils";

export type NavItem = {
  label: string;
  href: string;
};

const DEFAULT_NAV: NavItem[] = [
  { label: "Home", href: "https://gwglobalmentalhealth.com/" },
  { label: "About", href: "https://gwglobalmentalhealth.com/about" },
  { label: "Team", href: "https://gwglobalmentalhealth.com/team" },
  { label: "News", href: "https://gwglobalmentalhealth.com/news" },
  { label: "Projects", href: "https://gwglobalmentalhealth.com/projects" },
  { label: "Innovations", href: "https://gwglobalmentalhealth.com/innovations" },
  { label: "Publications", href: "https://gwglobalmentalhealth.com/publications" },
  { label: "Contact", href: "https://gwglobalmentalhealth.com/contact" },
];

export type HeaderProps = {
  navItems?: NavItem[];
  currentPath?: string;
  className?: string;
  logoSrc?: string;
};

export function Header({
  navItems = DEFAULT_NAV,
  currentPath,
  className,
  logoSrc = "/crest.png",
}: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <header className={cn("w-full", className)}>
        <div className="bg-background text-foreground py-6 md:py-6">
          <a
            href="https://gwglobalmentalhealth.com"
            className="block w-fit mx-auto"
            aria-label="Center for Global Mental Health Equity — The George Washington University"
          >
            <img
              src={logoSrc}
              alt=""
              className="block h-16 sm:h-24 w-auto"
            />
          </a>
        </div>

        <div className="bg-white border-b border-border shadow-md">
          <div className="mx-auto max-w-[1400px] w-full">
            <div className="lg:hidden">
              <div className="grid place-items-center h-12">
                <SheetTrigger
                  aria-label="Open menu"
                  className="bg-background text-foreground flex items-center justify-center w-10 h-10 rounded-xl hover:bg-background/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                >
                  <Menu className="size-10" />
                </SheetTrigger>
              </div>
            </div>

            <nav
              aria-label="Primary"
              className="hidden lg:flex items-center justify-between gap-2 px-8 h-[37px]"
            >
              {navItems.map((item) => {
                const active = currentPath === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "px-2 py-2 rounded-lg text-base font-normal text-card-foreground whitespace-nowrap transition-colors",
                      "hover:bg-muted focus-visible:outline-none focus-visible:bg-muted",
                      active && "bg-muted",
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      <SheetContent
        side="right"
        showCloseButton={false}
        className="bg-background text-foreground border-l border-secondary/40 w-[min(22rem,92vw)] !p-0 !block overflow-y-auto"
      >
        <SheetTitle className="sr-only">Center for Global Mental Health</SheetTitle>

        <SheetClose asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close menu"
            className="absolute right-3 top-3 z-10 text-foreground hover:bg-foreground/10"
          >
            <X className="size-5" />
          </Button>
        </SheetClose>

        <div className="px-5 py-6 border-b border-secondary/40 text-center">
          <img
            src={logoSrc}
            alt=""
            className="inline-block max-w-full h-auto max-h-16"
          />
        </div>

        <ul
          aria-label="Primary mobile"
          role="list"
          className="block px-3 py-4 m-0 list-none"
        >
          {navItems.map((item) => {
            const active = currentPath === item.href;
            return (
              <li key={item.href} className="block mb-1 last:mb-0">
                <SheetClose asChild>
                  <a
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block w-full text-left px-4 py-3 rounded-md text-base font-normal text-foreground transition-colors",
                      "hover:bg-foreground/5 focus-visible:outline-none focus-visible:bg-foreground/10",
                      active && "bg-foreground/10 font-medium",
                    )}
                  >
                    {item.label}
                  </a>
                </SheetClose>
              </li>
            );
          })}
        </ul>
      </SheetContent>
    </Sheet>
  );
}

