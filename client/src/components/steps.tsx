import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const steps = [
  {
    title: "Partnership with Passback",
    description:
      "We were at Wahab Folawiyo School, Lagos, Nigeria. JustUsedTech, in Collaboration with @passbackofficial, emphasized the importance of reuse and circular economy principles.",
    img: "/images/hero.webp",
  },
  {
    title: "Partnership with Passback",
    description:
      "We were at Wahab Folawiyo School, Lagos, Nigeria. JustUsedTech, in Collaboration with @passbackofficial, emphasized the importance of reuse and circular economy principles.",
    img: "/images/hero.webp",
  },
  {
    title: "Partnership with Passback",
    description:
      "We were at Wahab Folawiyo School, Lagos, Nigeria. JustUsedTech, in Collaboration with @passbackofficial, emphasized the importance of reuse and circular economy principles.",
    img: "/images/hero.webp",
  },
] as const;

export function Steps() {
  return (
    <section className="space-y-20 py-20">
      {steps.map(({ title, description, img }, i) => (
        <div
          key={title + i}
          className="group relative grid grid-cols-1 items-center justify-items-center lg:grid-cols-3"
        >
          <Image
            src={img}
            alt={title}
            height="600"
            width="600"
            className="col-[1/span_2] size-full rounded-xl object-cover object-center group-even:order-1 group-even:col-[2/span_2]"
          />
          <div className="absolute grid justify-items-start gap-y-4 rounded-xl border bg-secondary/75 p-10 backdrop-blur backdrop-saturate-200 group-odd:left-1/2 group-even:right-1/2">
            <h1 className="font-meidum text-pretty text-3xl capitalize">
              {title}
            </h1>
            <p className="max-w-[50ch] text-pretty leading-relaxed text-secondary-foreground">
              {description}
            </p>
            <Link href="/" className={buttonVariants({})}>
              <span>Learn More</span>
              <IconChevronRight />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
