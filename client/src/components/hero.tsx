import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";

export function Hero() {
  return (
    <div className="container relative isolate my-6 mb-20 grid grid-cols-2 items-center justify-between overflow-hidden rounded-xl border bg-secondary px-0 shadow-sm">
      <div className="grid max-w-2xl justify-items-start gap-y-6 p-8">
        <span className="rounded-full border bg-secondary/75 px-3 py-1 text-sm backdrop-blur">
          👋 Welcome to Productive IELTS
        </span>
        <h2 className="text-pretty text-[clamp(2.75rem,_6vw+0.5rem,_3.25rem)] font-medium capitalize leading-[1.4] text-foreground/90">
          The biggest language school in the world!
        </h2>
        <p className="max-w-[50ch] text-pretty leading-relaxed text-foreground/80">
          For individuals, coaching can enhance leadership skills, improve
          work-life balance, and increase confidence. Organizations also reap
          rewards, such as higher employee engagement,
        </p>
        <div className="flex items-center gap-x-4">
          <Button size="lg">
            <span>Get Started </span>
            <IconArrowRight className="size-5" />
          </Button>
          <Button
            className="bg-secondary/75 backdrop-blur"
            variant="outline"
            size="lg"
          >
            Contact Us
          </Button>
        </div>
      </div>
      <Image
        src="/images/hero2.webp"
        alt=""
        height={500}
        width={900}
        className="h-full rounded-r-lg border-l object-cover object-center"
      />
      <div className="bg-gradient-primary absolute -left-[20%] -top-[40%] -z-10 size-[40rem] animate-[spin_10s_linear_infinite] rounded-full opacity-20 blur-[5rem]" />
    </div>
  );
}
