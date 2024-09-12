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
      <section className="bg-foreground py-20 text-background">
        <Facilities />
        <Teachers />
      </section>
      <Steps />
      <Testimonials />
      <Faq />
    </div>
  );
}
