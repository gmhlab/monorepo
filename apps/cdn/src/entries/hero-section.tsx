import { createRoot } from "react-dom/client";
import { HeroSection } from "@repo/ui";
import "../globals.css";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export function mount(selector: string, props: HeroSectionProps) {
  const el = document.querySelector(selector);
  if (!el) throw new Error(`Element not found: ${selector}`);
  createRoot(el).render(<HeroSection {...props} />);
}

// Auto-register on window for script tag usage
if (typeof window !== "undefined") {
  (window as any).GMHWidgets = (window as any).GMHWidgets || {};
  (window as any).GMHWidgets.HeroSection = { mount };
}

export { HeroSection };
