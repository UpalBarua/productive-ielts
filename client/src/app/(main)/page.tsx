import { Facilities } from "@/components/facilities";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Steps } from "@/components/steps";
import { Teachers } from "@/components/teachers";
import { Testimonials } from "@/components/testimonials";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  console.log(session);

  return (
    <div className="grid-container pt-16">
      <Hero />
      <section className="full-width grid-container bg-foreground py-20 text-background">
        <Facilities />
        <Teachers />
      </section>
      <Steps />
      <Testimonials />
      <Faq />
    </div>
  );
}
