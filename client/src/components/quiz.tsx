"use client";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// TODO: do proper validation
const answersSchema = z.object({
  answers: z.array(
    z.object({
      answer: z.string(),
    }),
  ),
});

type AnswersSchema = z.infer<typeof answersSchema>;

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
  const ref = useRef<HTMLFormElement | null>(null);

  const form = useForm<AnswersSchema>({
    resolver: zodResolver(answersSchema),
    defaultValues: {
      answers: quiz.map(() => ({ answer: "" })),
    },
  });

  function onSubmit(values: AnswersSchema) {
    console.log(values);
    alert("Quiz Submitted ✅");
  }

  // TODO: improve this function
  function scrollQuizQuestions(direction: "NEXT" | "PREVIOUS") {
    const element = ref?.current;
    const clientWidth = (element?.querySelector("div")?.clientWidth || 0) + 24;

    element?.scrollBy({
      left:
        direction === "NEXT"
          ? clientWidth
          : direction === "PREVIOUS"
            ? -clientWidth
            : 0,
      behavior: "smooth",
    });
  }

  return (
    <section className="rounded-xl bg-secondary p-2 shadow">
      <div className="p-4">
        <Form {...form}>
          <form
            id="quiz-form"
            ref={ref}
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex gap-x-6 overflow-hidden"
          >
            {quiz.map(({ question, options }, index) => (
              <FormField
                key={question + index}
                control={form.control}
                name={`answers.${index}.answer`}
                render={({ field }) => (
                  <FormItem key={index} className="min-w-full">
                    <p className="leadig-relaxed pb-6 text-xl font-medium">
                      {question}
                    </p>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
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
                            className={cn(
                              "absolute inset-0 h-full w-full rounded-lg border-border transition-colors duration-200 [&>span]:hidden",
                              {
                                "border-primary bg-primary/15":
                                  option === field.value,
                              },
                            )}
                            value={option}
                            id={option}
                          />
                        </div>
                      ))}
                    </RadioGroup>
                  </FormItem>
                )}
              />
            ))}
          </form>
        </Form>
      </div>
      <div className="grid grid-cols-[max-content,1fr,max-content,max-content] items-center justify-end gap-4 px-2 pb-2 pt-5">
        <Button type="submit" form="quiz-form">
          Submit Answers
        </Button>
        <Button
          className="col-[3/4]"
          size="sm"
          variant="outline"
          onClick={() => scrollQuizQuestions("PREVIOUS")}
        >
          <IconChevronLeft className="size-4" />
          <span>Previous</span>
        </Button>
        <Button size="sm" onClick={() => scrollQuizQuestions("NEXT")}>
          <span>Next</span>
          <IconChevronRight className="size-4" />
        </Button>
      </div>
    </section>
  );
}
