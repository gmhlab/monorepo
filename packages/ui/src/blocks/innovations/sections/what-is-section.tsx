"use client";

import { ArrowRight } from "lucide-react";
import { Grid, Flex, Section } from "../../../layout";
import { Button, ButtonGroup } from "../../../primitives/Button/Button";
import { Card } from "../../../composites";
import { TextTitlePage, TextContentHeading } from "../../../primitives/Text/Text";
import { Accordion, AccordionItem } from "../../../primitives/Accordion/Accordion";
import type { WhatIsItData } from "../innovation-page";
import { EquipVisual } from "./equip-visual";

export function WhatIsItSection({ headline, body, capabilities }: WhatIsItData) {
  return (
    <Section padding="1600">
      <Flex direction="column" alignSecondary="center" gap="1600" container>
        <TextTitlePage className="text-center">What is it?</TextTitlePage>

        <Grid columns="repeat(auto-fit, minmax(min(100%, 26rem), 1fr))" gap="800" alignItems="start" className="w-full">

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

          <EquipVisual />

        </Grid>

      </Flex>
    </Section>
  );
}
