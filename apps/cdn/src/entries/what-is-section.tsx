import { createRoot } from "react-dom/client";
import { WhatIsItSection } from "@repo/ui";
import "../globals.css";

interface WhatIsItSectionProps {
  headline: string;
  body: string;
  capabilities: { label: string; detail: string }[];
  highlight: string;
}

export function mount(selector: string, props: WhatIsItSectionProps) {
  const el = document.querySelector(selector);
  if (!el) throw new Error(`Element not found: ${selector}`);
  createRoot(el).render(<WhatIsItSection {...props} />);
}

// Auto-register on window for script tag usage
if (typeof window !== "undefined") {
  (window as any).GMHWidgets = (window as any).GMHWidgets || {};
  (window as any).GMHWidgets.WhatIsItSection = { mount };
}

export { WhatIsItSection };
