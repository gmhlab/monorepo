"use client";

import { Card } from "../../../primitives";
import { Section, LegacyGrid as Grid, Flex } from "../../../layouts";
import { User, Quote } from "lucide-react";
import type { UserStoryData } from "../innovation-template";

export function UserStorySection({ storyIntro, paragraphs, quote, name, role, org }: UserStoryData) {
  return (
    <Section padding="1600">
      <Flex direction="column" alignSecondary="center" gap="1600" container>
      <h2 className="text-5xl md:text-6xl font-serif text-white text-center">Who has used it?</h2>

      <div>
        <Card className="p-8 bg-white/10 backdrop-blur-sm shadow-2xl overflow-hidden relative border-white/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#AA9868]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#033C5A]/10 rounded-full blur-3xl"></div>

          <Grid columns="auto-fit" min="25rem" gap="xl" className="relative z-10">
            <div>
              <Flex gap="600" className="mb-6">
                <Quote className="w-22 h-22 text-[#AA9868]" />
                <h3 className="text-white text-3xl font-bold">
                  {storyIntro}
                </h3>
              </Flex>

              {paragraphs.map((p, i) => (
                <p key={i} className="text-white/90 mb-4 leading-relaxed">
                  {p}
                </p>
              ))}

              <div className="bg-[#AA9868] text-white p-4 rounded-lg inline-block">
                <p className="text-xl font-serif italic">
                  &ldquo;{quote}&rdquo;
                </p>
              </div>
            </div>

            <Flex direction="column" alignPrimary="center" className="justify-center">
              <div className="bg-gradient-to-br from-[#033C5A] to-[#AA9868] w-48 h-48 rounded-full flex items-center justify-center shadow-2xl mb-6">
                <User className="w-24 h-24 text-white" />
              </div>

              <div className="text-center">
                <h4 className="text-white mb-2">{name}</h4>
                <p className="text-white/80">{role}</p>
                <p className="text-sm text-[#AA9868] mt-2">
                  {org}
                </p>
              </div>
            </Flex>
          </Grid>
        </Card>
      </div>
      </Flex>
    </Section>
  );
}
