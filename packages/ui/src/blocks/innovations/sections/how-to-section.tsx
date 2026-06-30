import { Fragment } from "react";
import { ArrowDown } from "lucide-react";
import { Flex, Section } from "../../../layout";
import type { HowToUseData } from "../innovation-page";
import { TextTitlePage } from "../../../primitives/Text/Text";

export function HowToUseSection({ steps }: HowToUseData) {
  return (
    <Section padding="1600">
      <Flex direction="column" alignSecondary="center" gap="1600" container>
      <TextTitlePage className="text-center">How do I use it?</TextTitlePage>

        <Flex direction="column" gap="1600" alignSecondary="center" className="md:items-start! p-10 md:p-16 bg-white/5 backdrop-blur-sm shadow-2xl border border-white/20 rounded-xl w-full max-w-3xl">
          {steps.map((step, index) => (
            <Fragment key={index}>
              <Flex direction="column" alignSecondary="center" gap="600" className="md:flex-row!">

                <span className="text-5xl font-bold text-[#AA9868]">{index + 1}.</span>

                <Flex alignPrimary="center" alignSecondary="center" className="bg-white w-40 h-40 md:w-48 md:h-48 p-2 rounded-xl border-6 border-slate-400 overflow-hidden shadow-xl">
                  {step.graphic ?? (step.icon && <step.icon className="w-126 h-16 md:w-16 md:h-16 text-white" />)}
                </Flex>

                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-white text-4xl uppercase font-bold mb-1">{step.title}</h4>
                  <p className="text-white/80 text-base md:text-xl">{step.description}</p>
                </div>

              </Flex>

              {index < steps.length - 1 && (
                <Flex alignPrimary="stretch" className="w-full">
                  <ArrowDown className="w-20 h-20 text-[#AA9868]" />
                </Flex>
              )}
            </Fragment>
          ))}
        </Flex>
      </Flex>
    </Section>
  );
}
