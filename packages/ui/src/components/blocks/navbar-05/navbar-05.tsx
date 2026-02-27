"use client"

import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { ModeToggle } from "../../mode-toggle";

// Brand colors matching GW
const brandColors = {
  navy: "#0a2240",
  navyLight: "#1a3a5c",
  gold: "#c9a227",
  goldLight: "#d4b84a",
  cream: "#f5f1e8",
  warmWhite: "#faf9f7",
};

// Navigation Component
export function Navbar5() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: "Home", href: "/gmh" },
    { label: "About", href: "" },
    { label: "Team", href: "" },
    { label: "News", href: "" },
    { label: "Projects", href: "" },
    { label: "Innovations", href: "/gmh/innovations" },
    { label: "Publications", href: "" },
    { label: "Contact", href: "" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 dark:bg-black/50 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/">
            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${brandColors.navy} 0%, ${brandColors.navyLight} 100%)` }}>
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-foreground">Center for</p>
                <p className="text-sm font-medium text-primary">Global Mental Health</p>
              </div>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <div className="flex gap-6">
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-gray-900 rounded-lg transition-colors hover:bg-gray-50"
                >
                  {item.label}
                </a>
              ))}
            
            </div>
            <ModeToggle />

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          </div>      
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg transition-colors hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}