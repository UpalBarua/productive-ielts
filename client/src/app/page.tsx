import { Hero } from "@/components/hero";
import { Newsletter } from "@/components/newsletter";
import { Faq } from "@/components/faq";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <Newsletter />
      <Faq />
      <Testimonials />
    </div>
  );
}
