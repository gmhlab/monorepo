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
import { Container, Grid, Cluster } from "../../../layouts";
import type { WhatIsItData } from "../types";

export function WhatIsItSection({ headline, body, capabilities }: WhatIsItData) {
  return (
    <Container as="section" width="xl" section="lg">
      <h2 className="text-5xl md:text-6xl font-serif text-white text-center mb-16">What is it?</h2>
      <Card className="p-8 bg-white/10 backdrop-blur-sm shadow-2xl border-white/20">
        <Grid columns="auto-fit" min="25rem" gap="xl">
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 break-words">
              {headline}
            </h3>
            <p className="text-white/90 mb-6 break-words">
              {body}
            </p>
            <Accordion type="single" collapsible className="w-full space-y-3 mb-6">
              {capabilities.map((cap, i) => (
                <AccordionItem key={i} value={`capability-${i}`} className="bg-white/10 rounded border-none">
                  <AccordionTrigger className="px-3 py-3 text-sm text-white font-bold hover:no-underline [&>svg]:text-white">
                    {cap.label}
                  </AccordionTrigger>
                  <AccordionContent className="px-3 text-white/80 break-words">
                    {cap.detail}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Cluster gap="md">
              <Button className="font-bold h-16 w-full sm:w-56 rounded-lg text-lg shadow-sm hover:shadow-lg" size="lg">Request Training<ArrowRight /></Button>
              <Button className="font-bold h-16 w-full sm:w-56 rounded-lg text-lg shadow-sm hover:shadow-lg" variant="secondary" size="lg">Use Platform</Button>
            </Cluster>
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
        </Grid>
      </Card>
    </Container>
  );
}
