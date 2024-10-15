"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useRef } from "react";

const quiz = [
  {
    question:
      "This is a smaple question for the quiz functionality? Lorem ipsum dolor sit. Lorem, ipsum.",
    options: ["Option One", "Option Two", "Option Three", "Option Four"],
    correctAnswer: "Option One",
  },
  {
    question:
      "This is a smaple question for the quiz functionality? Lorem ipsum dolor sit. Lorem, ipsum.",
    options: ["Option One", "Option Two", "Option Three", "Option Four"],
    correctAnswer: "Option One",
  },
  {
    question:
      "This is a smaple question for the quiz functionality? Lorem ipsum dolor sit. Lorem, ipsum.",
    options: ["Option One", "Option Two", "Option Three", "Option Four"],
    correctAnswer: "Option One",
  },
  {
    question:
      "This is a smaple question for the quiz functionality? Lorem ipsum dolor sit. Lorem, ipsum.",
    options: ["Option One", "Option Two", "Option Three", "Option Four"],
    correctAnswer: "Option One",
  },
  {
    question:
      "This is a smaple question for the quiz functionality? Lorem ipsum dolor sit. Lorem, ipsum.",
    options: ["Option One", "Option Two", "Option Three", "Option Four"],
    correctAnswer: "Option One",
  },
  {
    question:
      "This is a smaple question for the quiz functionality? Lorem ipsum dolor sit. Lorem, ipsum.",
    options: ["Option One", "Option Two", "Option Three", "Option Four"],
    correctAnswer: "Option One",
  },
] as const;

export function Quiz() {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <section className="rounded-xl bg-secondary p-2 shadow">
      <div className="p-4">
        <div ref={ref} className="flex gap-x-6 overflow-hidden">
          {quiz.map(({ question, options }, index) => (
            <div key={index} className="min-w-full">
              <p className="leadig-relaxed pb-6 text-xl font-medium">
                {question}
              </p>
              <RadioGroup defaultValue="option-one">
                {options.map((option, index) => (
                  <div
                    key={index}
                    className="relative flex h-14 items-center rounded-lg border bg-background px-4"
                  >
                    <Label className="text-base" htmlFor={option}>
                      <span className="pe-2 font-bold">
                        {String.fromCharCode(index + 65)}.
                      </span>
                      {option}
                    </Label>
                    <RadioGroupItem
                      className="absolute inset-0 h-full w-full rounded-lg border-primary bg-primary/15 [&>span]:hidden"
                      value={option}
                      id={option}
                    />
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 px-2 pb-2 pt-5">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => {
            const element = ref?.current;
            const clientWidth = -(
              element?.querySelector("div")?.clientWidth + 24
            );

            element?.scrollBy({
              left: clientWidth,
              behavior: "smooth",
            });
          }}
        >
          <IconChevronLeft className="size-4" />
          <span>Previous</span>
        </Button>
        <Button
          size="sm"
          onClick={() => {
            const element = ref?.current;
            const clientWidth = element?.querySelector("div")?.clientWidth + 24;

            element?.scrollBy({
              left: clientWidth,
              behavior: "smooth",
            });
          }}
        >
          <span>Next</span>
          <IconChevronRight className="size-4" />
        </Button>
      </div>
    </section>
  );
}
