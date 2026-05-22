"use client";

import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Flex } from "../../../layouts";

interface NavigationFooterProps {
  items: { href: string; label: string }[];
  current: number;
}

export function NavigationFooter({ items, current }: NavigationFooterProps) {
  const prev = items[current - 2];
  const next = items[current];

  return (
    <div className="bg-[#5A6C7D]/25 w-full py-6 mt-20">
      <Flex alignPrimary="space-between" className="max-w-5xl mx-auto px-4">
        <motion.a
          href={prev?.href ?? "#"}
          whileHover={prev ? { scale: 1.05, x: -5 } : undefined}
          whileTap={prev ? { scale: 0.95 } : undefined}
          aria-disabled={!prev}
          className={`flex items-center gap-2 text-white hover:text-[#AA9868] transition-colors ${!prev ? "opacity-30 pointer-events-none" : ""}`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>PREV</span>
        </motion.a>

        <div className="flex items-center gap-4">
          <span className="text-white text-sm">ALL INNOVATIONS</span>
          <div className="flex gap-2">
            {items.map((item, i) => {
              const isCurrent = i + 1 === current;
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  aria-label={item.label}
                  aria-current={isCurrent ? "page" : undefined}
                  whileHover={{ scale: 1.3 }}
                  className={`w-2 h-2 rounded-full ${isCurrent ? "bg-[#AA9868]" : "bg-white/50"} cursor-pointer`}
                />
              );
            })}
          </div>
        </div>

        <motion.a
          href={next?.href ?? "#"}
          whileHover={next ? { scale: 1.05, x: 5 } : undefined}
          whileTap={next ? { scale: 0.95 } : undefined}
          aria-disabled={!next}
          className={`flex items-center gap-2 text-white hover:text-[#AA9868] transition-colors ${!next ? "opacity-30 pointer-events-none" : ""}`}
        >
          <span>NEXT</span>
          <ChevronRight className="w-5 h-5" />
        </motion.a>
      </Flex>
    </div>
  );
}
