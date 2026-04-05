import { ArrowDown } from "lucide-react";
import { Card } from "../../../ui";
import { Container, Stack } from "../../../layouts";
import type { HowToUseData } from "../types";

export function HowToUseSection({ steps }: HowToUseData) {
  return (
    <Container as="section" width="sm" section="md" px="sm">
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white/90 text-center mb-8 md:mb-16">How do you use it?</h2>

      <div>
        <Card className="p-6 sm:p-10 md:p-16 bg-white/5 backdrop-blur-sm shadow-2xl relative border-white/20">
          <Stack gap="2xl">
            {steps.map((step, index) => (
                <div key={index}>
                  <div
                    className={`flex flex-col md:flex-row items-center gap-4 md:gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-2 md:gap-4">
                        <span className="text-2xl md:text-4xl font-bold text-[#AA9868]">
                          {index + 1}.
                        </span>
                        <div className="bg-white w-48 h-48 rounded-xl border-6 border-slate-400 flex items-center justify-center overflow-hidden shadow-xl">
                          {step.graphic ?? (step.icon && <step.icon className="w-12 h-12 md:w-16 md:h-16 text-white" />)}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`flex-1 text-center ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                    >
                      <h4 className="text-white text-2xl md:text-4xl uppercase font-bold mb-1">{step.title}</h4>
                      <p className="text-white/80 text-base md:text-xl">{step.description}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex justify-center ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"} my-3 md:my-4`}
                    >
                      <ArrowDown className="w-6 h-6 md:w-8 md:h-8 text-[#AA9868]" />
                    </div>
                  )}
                </div>
            ))}
          </Stack>
        </Card>
      </div>
    </Container>
  );
}
