import { Download } from "lucide-react";

export function CtaButton() {
  return (
      <div className="container mx-auto px-4 py-16">
        <button className="w-full max-w-2xl mx-auto block bg-gradient-to-r from-[#033C5A] to-[#024D75] text-white py-8 px-12 rounded-2xl shadow-2xl transition-all relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#AA9868] to-[#D4C5A0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 flex items-center justify-center gap-4">
            <Download className="w-8 h-8" />
            <span className="text-2xl">Get Innovation Materials</span>
          </div>
          <div className="absolute inset-0 bg-white opacity-0"></div>
        </button>
      </div>
    );
  }