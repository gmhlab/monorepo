"use client";

import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationFooterProps {
  prevHref?: string;
  nextHref?: string;
  current?: number;
  total?: number;
}

export function NavigationFooter({
  prevHref,
  nextHref,
  current = 1,
  total = 1,
}: NavigationFooterProps) {
  const dots = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="bg-[#5A6C7D]/25 w-full py-6 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.a
            href={prevHref ?? "/gmh/#"}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 text-white hover:text-[#AA9868] transition-colors ${!prevHref ? "opacity-30 pointer-events-none" : ""}`}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>PREV</span>
          </motion.a>

          <div className="flex items-center gap-4">
            <span className="text-white text-sm">ALL INNOVATIONS</span>
            <div className="flex gap-2">
              {dots.map((dot) => (
                <motion.div
                  key={dot}
                  whileHover={{ scale: 1.3 }}
                  className={`w-2 h-2 rounded-full ${dot === current ? "bg-[#AA9868]" : "bg-white/50"} cursor-pointer`}
                />
              ))}
            </div>
          </div>

          <motion.a
            href={nextHref ?? "/gmh/#"}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 text-white hover:text-[#AA9868] transition-colors ${!nextHref ? "opacity-30 pointer-events-none" : ""}`}
          >
            <span>NEXT</span>
            <ChevronRight className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
