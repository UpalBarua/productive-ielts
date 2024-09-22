import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const instructors = [
  { name: "John Doe", img: "/images/instructors/instructor1.webp" },
  { name: "Jane Smith", img: "/images/instructors/instructor2.webp" },
  { name: "Alice Johnson", img: "/images/instructors/instructor3.webp" },
  { name: "Bob Williams", img: "/images/instructors/instructor4.webp" },
  { name: "Charlie Brown", img: "/images/instructors/instructor5.webp" },
] as const;

export function Teachers() {
  return (
    <section className="py-20">
      <Carousel
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          {instructors.map((instructor) => (
            <Teacher key={instructor.name} {...instructor} />
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="text-foreground" /> */}
        {/* <CarouselNext className="text-foreground" /> */}
      </Carousel>
    </section>
  );
}

type TeacherProps = (typeof instructors)[number];

function Teacher({ name, img }: Readonly<TeacherProps>) {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/4">
      <div className="group relative h-full min-h-[30rem] cursor-pointer rounded-2xl border border-border/15 transition-all hover:border-border/25 hover:brightness-90">
        <Image
          className="h-full rounded-2xl object-cover object-center"
          src={img}
          alt={name}
          height={800}
          width={250}
        />
        <div className="absolute inset-0 grid content-end gap-y-4 rounded-2xl bg-gradient-to-t from-foreground from-[5%] to-transparent p-5 text-background">
          <h3 className="text-3xl font-light capitalize">
            {name.split(" ")[0]}
            <br />
            {name.split(" ")[1]}
          </h3>
          <Link className="flex items-center gap-x-2" href="#">
            <span>Study with me</span>
            <IconArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </CarouselItem>
  );
}
