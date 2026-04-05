import { Card } from "../../../ui";
import { Container, Grid, Stack } from "../../../layouts";
import { BookOpen } from "lucide-react";
import type { GetItData } from "../types";

export function GetItSection({ heading, body, resources, highlight }: GetItData) {
  return (
    <Container as="section" width="lg" section="lg">
      <h2 className="text-5xl md:text-6xl font-serif text-white text-center mb-16">How do I get it?</h2>

      <div>
        <Card className="p-8 bg-white shadow-2xl">
          <Grid columns="auto-fit" min="25rem" gap="xl" className="items-center">
            <div>
              <h3 className="font-bold text-3xl text-[#033C5A] mb-4">{heading}</h3>
              <p className="font-medium text-muted-foreground mb-6 leading-relaxed">
                {body}
              </p>

              <Stack gap="sm" className="mb-6">
                {resources.map((resource, i) => (
                  <a
                    key={i}
                    href={resource.href ?? "#"}
                    className="flex items-center border-1 border-border/25 gap-3 bg-gray-50 p-3 rounded-lg cursor-pointer shadow-sm">
                    <resource.icon className="w-5 h-5 text-[#033C5A]" />
                    <span className="text-md font-medium text-[#033C5A]">
                      {resource.label}
                    </span>
                  </a>
                ))}
              </Stack>

              <div className="bg-[#AA9868] text-white p-4 rounded-lg">
                <p className="text-sm">
                  {highlight}
                </p>
              </div>
            </div>

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
          </Grid>
        </Card>
      </div>
    </Container>
  );
}
