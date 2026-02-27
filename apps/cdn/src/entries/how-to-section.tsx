import { createRoot } from "react-dom/client";
import { HowToUseSection } from "@repo/ui";
import "../globals.css";

interface HowToUseSectionProps {
  steps: {
    title: string;
    description: string;
  }[];
}

export function mount(selector: string, props: HowToUseSectionProps) {
  const el = document.querySelector(selector);
  if (!el) throw new Error(`Element not found: ${selector}`);
  createRoot(el).render(<HowToUseSection {...props} />);
}

// Auto-register on window for script tag usage
if (typeof window !== "undefined") {
  (window as any).GMHWidgets = (window as any).GMHWidgets || {};
  (window as any).GMHWidgets.HowToUseSection = { mount };
}

export { HowToUseSection };
