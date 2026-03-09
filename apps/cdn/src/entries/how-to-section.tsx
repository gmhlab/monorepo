import { createRoot } from "react-dom/client";
import { HowToUseSection } from "@repo/ui";
import "../globals.css";

interface HowToUseSectionProps {
  steps: {
    title: string;
    description: string;
    graphicUrl?: string;
    graphicWidth?: number;
    graphicHeight?: number;
  }[];
}

export function mount(selector: string, props: HowToUseSectionProps) {
  const el = document.querySelector(selector);
  if (!el) throw new Error(`Element not found: ${selector}`);

  // Convert graphicUrl strings to React elements
  const stepsWithGraphics = props.steps.map((step) => ({
    ...step,
    graphic: step.graphicUrl ? (
      <img
        src={step.graphicUrl}
        alt={step.title}
        width={step.graphicWidth}
        height={step.graphicHeight}
        className="object-cover"
      />
    ) : undefined,
  }));

  createRoot(el).render(<HowToUseSection steps={stepsWithGraphics} />);
}

// Auto-register on window for script tag usage
if (typeof window !== "undefined") {
  (window as any).GMHWidgets = (window as any).GMHWidgets || {};
  (window as any).GMHWidgets.HowToUseSection = { mount };
}

export { HowToUseSection };
