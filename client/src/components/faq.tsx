import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { IconHelp } from "@tabler/icons-react";

export const faqs = [
  {
    id: 1,
    question: "What are the prerequisites for enrolling in this course?",
    answer:
      "The prerequisites vary by course. Please check the course description for specific requirements or contact our admissions office for more information.",
  },
  {
    id: 2,
    question: "How do I apply for the course?",
    answer:
      "To apply, visit our admissions page, complete the online application form, and submit the required documents. Detailed instructions are provided on the application page.",
  },
  {
    id: 3,
    question: "What is the course schedule and duration?",
    answer:
      "Course schedules and durations vary. Please refer to the specific course page for detailed information on start dates, class times, and overall length.",
  },
  {
    id: 4,
    question: "Are there any financial aid options or scholarships available?",
    answer:
      "Yes, we offer various financial aid options and scholarships. Visit our financial aid page or contact our financial aid office for details on how to apply.",
  },
  {
    id: 5,
    question: "What materials or textbooks are required for the course?",
    answer:
      "Required materials and textbooks are listed in the course syllabus, which is available on the course page or provided upon enrollment.",
  },
] as const;

export function Faq() {
  return (
    <section className="pb-section container grid grid-cols-1 items-center gap-10 py-20 md:grid-cols-2">
      <div className="space-y-4">
        <h2 className="ld:text-5xl text-start text-4xl font-medium capitalize leading-[1.3]">
          Answers to Your Frequently Asked Questions
        </h2>
        <p className="max-w-[25rem] text-pretty pb-2 leading-relaxed text-secondary-foreground">
          Find answers to the most commonly asked questions about our programs,
          admissions, and campus life. If you need more information, please
          contact us directly.
        </p>
        <Link href="/help-desk" className={buttonVariants({})}>
          <IconHelp className="size-4" />
          <span>Ask Your Question</span>
        </Link>
      </div>
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map(({ id, question, answer }) => (
          <AccordionItem
            key={id}
            className="rounded-2xl border bg-secondary px-4 py-1 shadow-sm"
            value={id + ""}
          >
            <AccordionTrigger className="text-start outline-none hover:no-underline">
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-pretty leading-relaxed text-secondary-foreground">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
