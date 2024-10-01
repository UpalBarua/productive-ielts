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
  IconBrandYoutube,
} from "@tabler/icons-react";
import { ModuleVideo } from "@/components/module-video";

export default function ModulesPage() {
  return (
    <main className="grid-container pt-20">
      <div className="grid items-start gap-4 md:grid-cols-[60%_1fr]">
        <section className="rounded-xl bg-secondary p-2 shadow">
          <ModuleVideo />
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
          <Accordion className="space-y-4" type="multiple">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <AccordionItem
                  key={i}
                  className="rounded-xl bg-secondary px-5 py-4 shadow"
                  value={`item-${i}`}
                >
                  <AccordionTrigger className="grid grid-cols-[1fr,_max-content] grid-rows-[repeat(min-content,_2)] items-start gap-3 p-0 text-start hover:no-underline">
                    <h4 className="text-pretty leading-relaxed">
                      Module {1}: Lorem ipsum dolor sit amet, qui minim labore.
                    </h4>
                    <div className="row-start-2 flex items-center gap-4 p-0 text-sm text-secondary-foreground">
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
                  <AccordionContent className="divide-y-[1px] divide-secondary-foreground/20 pt-4">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <div className="flex items-center gap-2 py-4">
                          <IconBrandYoutube className="size-4 text-secondary-foreground" />
                          <span>
                            Module video {i}: Lorem ipsum dolor sit amet.
                          </span>
                        </div>
                      ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </aside>
      </div>
    </main>
  );
}
