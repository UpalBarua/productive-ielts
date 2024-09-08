import { Hero } from "@/components/hero";
import { Newsletter } from "@/components/newsletter";
import { Faq } from "@/components/faq";
import { Testimonials } from "@/components/testimonials";
import { Teachers } from "@/components/teachers";

export default function Home() {
  return (
    <div className="pt-16">
      {/* <Hero /> */}
      <Teachers />
      {/* <Newsletter /> */}
      {/* <Faq /> */}
      {/* <Testimonials /> */}
    </div>
  );
}
