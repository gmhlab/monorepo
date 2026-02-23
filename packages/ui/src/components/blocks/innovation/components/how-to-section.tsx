import { ArrowRight } from "lucide-react";
import { Card } from "../../../ui";
import type { HowToUseData } from "../types";

export function HowToUseSection({ steps }: HowToUseData) {
  return (
    <div className="py-20 max-w-3xl px-4">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl font-serif text-white/90 text-center mb-16">How do you use it?</h2>

        <div>
          <Card className="p-8 bg-white/5 backdrop-blur-sm shadow-2xl relative border-white/20">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index}>
                  <div
                    className={`flex items-start gap-6 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-[#AA9868]">
                          {index + 1}.
                        </span>
                        <div className="bg-white w-48 h-48 rounded-lg flex items-center justify-center overflow-hidden">
                          {step.graphic ?? (step.icon && <step.icon className="w-16 h-16 text-white" />)}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`flex-1 ${index % 2 === 0 ? "text-left" : "text-right"}`}
                    >
                      <h4 className="text-white mb-2">{step.title}</h4>
                      <p className="text-white/80">{step.description}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex ${index % 2 === 0 ? "justify-end" : "justify-start"} my-4`}
                    >
                      <ArrowRight
                        className="w-8 h-8 text-[#AA9868]"
                        style={{
                          transform:
                            index % 2 === 0
                              ? "rotate(90deg)"
                              : "rotate(90deg) scaleX(-1)",
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
