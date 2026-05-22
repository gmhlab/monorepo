"use client";

import { ArrowRight } from "lucide-react";
import { Grid, Flex, Section } from "../../../layouts";
import { Button, ButtonGroup } from "../../../primitives/Button/Button";
import { Card } from "../../../composites";
import { TextTitlePage, TextContentHeading } from "../../../primitives/Text/Text";
import { Accordion, AccordionItem } from "../../../primitives/Accordion/Accordion";
import type { WhatIsItData } from "../innovation-template";

export function WhatIsItSection({ headline, body, capabilities }: WhatIsItData) {
  return (
    <Section padding="1600">
      <Flex direction="column" alignSecondary="center" gap="1200" container>
        <TextTitlePage className="text-center">What is it?</TextTitlePage>
        <Grid columns="auto-fit" min="28rem" gap="xl" className="p-8 bg-white/5 backdrop-blur-sm shadow-2xl border border-white/20 rounded-xl">

          <Card variant="stroke" padding="600">
            <TextContentHeading heading={headline} subheading={body} className="text-card-foreground break-words" />
            <Accordion>
              {capabilities.map((cap, i) => (
                <AccordionItem key={i} title={cap.label} >
                  {cap.detail}
                </AccordionItem>
              ))}
            </Accordion>
            <ButtonGroup>
              <Button className="font-bold h-16 w-full sm:w-56 rounded-lg text-lg shadow-sm hover:shadow-lg" >Request Training<ArrowRight /></Button>
              <Button className="font-bold h-16 w-full sm:w-56 rounded-lg text-lg shadow-sm hover:shadow-lg" >Use Platform</Button>
            </ButtonGroup>
          </Card>

          <Flex alignPrimary="center" alignSecondary="center" className="bg-white/5 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#AA9868]/20 to-white/10"></div>
            <div className="relative z-10 text-center">
              <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                <div className="w-24 h-24 bg-gradient-to-br from-[#AA9868] to-white rounded-full"></div>
              </div>
              <p className="text-white/80">Visual representation</p>
            </div>
          </Flex>

        </Grid>
      </Flex>
    </Section>
  );
}
