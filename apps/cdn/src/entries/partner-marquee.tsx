import { createRoot } from "react-dom/client";
import { PartnerMarquee } from "@repo/ui";
import "../globals.css";

export function mount(selector: string) {
  const el = document.querySelector(selector);
  if (!el) throw new Error(`Element not found: ${selector}`);
  createRoot(el).render(<PartnerMarquee />);
}

// Auto-register on window for script tag usage
if (typeof window !== "undefined") {
  (window as any).GMHWidgets = (window as any).GMHWidgets || {};
  (window as any).GMHWidgets.PartnerMarquee = { mount };
}

export { PartnerMarquee };
