"use client";

import { ArrowRight } from "lucide-react";
import {
  Card,
  Button,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../../ui";
import type { WhatIsItData } from "../types";

export function WhatIsItSection({ headline, body, capabilities, highlight }: WhatIsItData) {
  return (
    <div className="py-20" >
    <div className="w-full container max-w-7xl mx-auto px-4">
      <h2 className="text-5xl md:text-6xl font-serif text-white text-center mb-16">What is it?</h2>
      <Card className="p-8 bg-white/10 backdrop-blur-sm shadow-2xl border-white/20">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white mb-4">
              {headline}
            </h3>
            <p className="text-white/90 mb-6">
              {body}
            </p>
            <Accordion type="single" collapsible className="space-y-3 mb-6">
              {capabilities.map((cap, i) => (
                <AccordionItem key={i} value={`capability-${i}`} className="bg-white/10 rounded border-none">
                  <AccordionTrigger className="px-3 py-3 text-sm text-white hover:no-underline [&>svg]:text-white">
                    {cap.label}
                  </AccordionTrigger>
                  <AccordionContent className="px-3 text-white/80">
                    {cap.detail}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="flex items-center gap-3">
              <Button size="lg">Request Training<ArrowRight /></Button>
              <Button variant="secondary" size="lg">Use Platform</Button>
            </div>
            <div className="mt-6 bg-[#AA9868] text-white p-4 rounded inline-block display-none">
              <p className="text-sm">{highlight}</p>
            </div>
          </div>
          <div className="bg-white/5 rounded-lg p-8 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#AA9868]/20 to-white/10"></div>
            <div className="relative z-10 text-center">
              <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                <div className="w-24 h-24 bg-gradient-to-br from-[#AA9868] to-white rounded-full"></div>
              </div>
              <p className="text-white/80">Visual representation</p>
            </div>
          </div>
        </div>
      </Card>
      </div>
    </div>
  );
}
