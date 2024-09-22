import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  IconChevronLeft,
  IconChevronRight,
  IconClock,
  IconVideo,
} from "@tabler/icons-react";

export default function ModulesPage() {
  return (
    <main className="grid-container pt-20">
      <div className="grid gap-4 md:grid-cols-[60%_1fr]">
        <section className="rounded-xl bg-secondary p-2 shadow">
          <div className="h-64 w-full rounded-xl bg-foreground/50 md:h-80"></div>
          <div className="flex items-center justify-end gap-4 px-2 pb-2 pt-5">
            <Button size="sm" variant="secondary">
              <IconChevronLeft className="size-4" />
              <span>Previous</span>
            </Button>
            <Button size="sm">
              <span>Next</span>
              <IconChevronRight className="size-4" />
            </Button>
          </div>
        </section>
        <aside className="">
          <Accordion className="space-y-4" type="single" collapsible>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <AccordionItem
                  key={i}
                  className="rounded-xl bg-secondary shadow"
                  value={`item-${i}`}
                >
                  <AccordionTrigger className="grid grid-cols-[1fr,_max-content] grid-rows-2 items-start gap-3 p-4 text-start">
                    <h4>
                      Module {1}: Lorem ipsum dolor sit amet, qui minim labore.
                    </h4>
                    <div className="row-start-2 flex items-center gap-4 text-sm text-secondary-foreground">
                      <div className="flex items-center gap-1">
                        <IconClock className="size-4" />
                        <span>16h 35m</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <IconVideo className="size-4" />
                        <span>10/12</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>Module {i} content</AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </aside>
      </div>
    </main>
  );
}
