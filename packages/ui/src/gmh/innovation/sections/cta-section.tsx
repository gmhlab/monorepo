import { Download } from "lucide-react";
import { Section, Flex } from "../../../layouts";

interface CtaButtonProps {
  label?: string;
  href?: string;
}

export function CtaSection({ label = "Get Innovation Materials", href = "#" }: CtaButtonProps) {
  return (
    <Section padding="1600">
      <a href={href} className="w-full max-w-md mx-auto flex bg-gradient-to-r from-[#AA9868] to-[#D4C5A0] py-8 px-12 rounded-2xl shadow-2xl transition-all relative overflow-hidden group border-4 border-border">     
        <div className="absolute inset-0 bg-gradient-to-r from-[#6680B2] to-[#21355D]  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Flex gap="400" alignSecondary="center" className="relative z-10">
          <Download className="w-12 h-12" />
          <span className="text-3xl">{label}</span>
        </Flex>
      </a>
    </Section>
  );
}
