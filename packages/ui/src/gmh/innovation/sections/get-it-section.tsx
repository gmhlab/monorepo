import { Card } from "../../../composites/Cards/Cards";
import { TextTitlePage, TextContentHeading } from "../../../primitives/Text/Text";
import { Section, Flex, LegacyGrid as Grid } from "../../../layouts";
import { BookOpen } from "lucide-react";
import type { GetItData } from "../innovation-template";

export function GetItSection({ heading, body, resources, highlight }: GetItData) {
  return (
    <Section padding="1600">
      <Flex direction="column" alignSecondary="center" gap="1200" container>
        <TextTitlePage className="text-center">What is it?</TextTitlePage>
          <Card variant="stroke" padding="600">
          <Grid columns="auto-fit" min="25rem" gap="xl" className="items-center">
            <Flex direction="column" gap="600" alignSecondary="stretch">
              <TextContentHeading heading={heading} subheading={body} className="text-card-foreground break-words" />
              <Flex direction="column" gap="200" alignSecondary="stretch">
                {resources.map((resource, i) => (
                  <a
                    key={i}
                    href={resource.href ?? "#"}
                    className="flex items-center border-1 border-border/25 gap-3 bg-gray-50 p-3 rounded-lg cursor-pointer shadow-sm">
                    <Flex direction="row" alignSecondary="center" gap="300">
                    <resource.icon className="w-5 h-5 text-[#033C5A]" />
                    <span className="text-md font-medium text-[#033C5A]">
                      {resource.label}
                    </span>
                    </Flex>
                  </a>
                ))}
            </Flex>
            </Flex>
            <Flex direction="column" gap="600" alignSecondary="stretch">          
              <div
                className="bg-gray-100 rounded-lg p-8 flex items-center justify-center relative overflow-hidden"
                style={{ minHeight: "350px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#033C5A]/10 to-[#AA9868]/10"></div>
                <div className="z-10 flex flex-col items-center">
                  <div className="relative">
                    <div className="w-32 h-32 bg-white rounded-lg shadow-xl mb-4 transform rotate-6 absolute top-0 left-0"></div>
                    <div className="w-32 h-32 bg-white rounded-lg shadow-xl mb-4 transform -rotate-6 absolute top-4 left-4"></div>
                    <div className="w-32 h-32 bg-gradient-to-br from-[#033C5A] to-[#AA9868] rounded-lg shadow-2xl relative flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-600 mt-40 text-center">
                    Access all materials
                  </p>
                </div>

              </div>
              <div className="bg-[#AA9868] text-white p-4 rounded-lg">
                <p className="text-sm">
                  {highlight}
                </p>
              </div>
            </Flex>   
          </Grid>
        </Card>
      </Flex>
    </Section>
  );
}
