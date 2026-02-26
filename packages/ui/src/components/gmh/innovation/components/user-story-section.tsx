"use client";

import { Card } from "../../../ui";
import { User, Quote } from "lucide-react";
import type { UserStoryData } from "../types";

export function UserStorySection({ storyIntro, paragraphs, quote, name, role, org }: UserStoryData) {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto ">
        <h2 className="text-5xl md:text-6xl font-serif text-white text-center mb-16">Who has used it?</h2>

        <div>
          <Card className="p-8 bg-white/10 backdrop-blur-sm shadow-2xl overflow-hidden relative border-white/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#AA9868]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#033C5A]/10 rounded-full blur-3xl"></div>

            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Quote className="w-8 h-8 text-[#AA9868]" />
                  <h3 className="text-white">
                    {storyIntro}
                  </h3>
                </div>

                {paragraphs.map((p, i) => (
                  <p key={i} className="text-white/90 mb-4 leading-relaxed">
                    {p}
                  </p>
                ))}

                <div className="bg-[#AA9868] text-white p-4 rounded-lg inline-block">
                  <p className="text-sm italic">
                    &ldquo;{quote}&rdquo;
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center">
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
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
