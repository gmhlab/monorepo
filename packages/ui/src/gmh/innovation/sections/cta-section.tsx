import { Download } from "lucide-react";
import { Container } from "../../../layouts";

interface CtaButtonProps {
  label?: string;
  href?: string;
}

export function CtaSection({ label = "Get Innovation Materials", href = "#" }: CtaButtonProps) {
  return (
    <Container as="section" section="md">
      <a
        href={href}
        className="w-full max-w-2xl mx-auto flex bg-gradient-to-r from-[#033C5A] to-[#024D75] text-white py-8 px-12 rounded-2xl shadow-2xl transition-all relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#AA9868] to-[#D4C5A0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10 flex items-center justify-center gap-4 w-full">
          <Download className="w-8 h-8" />
          <span className="text-2xl">{label}</span>
        </div>
      </a>
    </Container>
  );
}
