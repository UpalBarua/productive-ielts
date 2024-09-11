import { Hero } from "@/components/hero";
import { Newsletter } from "@/components/newsletter";
import { Faq } from "@/components/faq";
import { Testimonials } from "@/components/testimonials";
import { Teachers } from "@/components/teachers";
import { Facilities } from "@/components/facilities";
import { Steps } from "@/components/steps";

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <section className="mt-[-15%] bg-foreground pb-20 pt-[20rem] text-background">
        <Facilities />
        <Teachers />
      </section>
      <Steps />
      <Testimonials />
      <Faq />
    </div>
  );
}
