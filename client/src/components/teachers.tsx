import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

export function Teachers() {
  return (
    <section className="container grid grid-cols-4 gap-x-2 py-20">
      {Array(4)
        .fill("")
        .map((_, i) => (
          <Teacher key={i} />
        ))}
    </section>
  );
}

function Teacher() {
  return (
    <div className="relative min-h-[28rem] cursor-pointer transition-all hover:brightness-90">
      <Image
        className="h-full rounded-2xl object-cover object-center"
        src="/images/teacher.webp"
        alt="teacher"
        height={800}
        width={250}
      />
      <div className="absolute inset-0 grid content-end gap-y-4 rounded-2xl bg-gradient-to-t from-foreground from-[5%] to-transparent p-5 text-background">
        <h3 className="text-4xl font-light capitalize">
          kally
          <br />
          higgins
        </h3>
        <Link className="flex items-center gap-x-2" href="#">
          <span>Study with me</span>
          <IconArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
