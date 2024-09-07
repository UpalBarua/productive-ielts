import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";

export function Hero() {
  return (
    <div className="container grid justify-items-center gap-y-14 py-10 text-center">
      <div className="grid max-w-2xl justify-items-center gap-y-6">
        <span className="rounded-full border bg-secondary px-3 py-1 text-sm">
          👋 Welcome to Productive IELTS
        </span>
        <h2 className="tracing-tight text-pretty text-[clamp(2.75rem,_6vw+0.5rem,_3.25rem)] font-extrabold capitalize leading-[1.2]">
          The biggest language school in the world!
        </h2>
        <p className="max-w-[50ch] text-pretty px-2 leading-relaxed text-secondary-foreground">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint cconsectetu consectet urronsectetur cupidatat. Lorem ipsum
          dolor sit amet, qui minim.
        </p>
        <div className="flex items-center gap-x-4">
          <Button size="lg">
            <span>Get Started </span>
            <IconArrowRight />
          </Button>
          <Button variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
      <Image
        src="/images/hero.webp"
        alt=""
        height={500}
        width={900}
        className="max-h-[26rem] rounded-lg object-cover object-center"
      />
    </div>
  );
}
