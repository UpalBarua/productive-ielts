import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconRosetteFilled } from "@tabler/icons-react";

export const testimonials = [
  {
    name: "Ashik Khan",
    batchNo: 12,
    ieltsScore: 7.5,
    review:
      "Diam quis enim lobortis scelerisque fermentum dui fauci in ornare. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.",
    picture: "/images/testimonial.jpg",
  },
  {
    name: "Shakil Ahmed",
    batchNo: 10,
    ieltsScore: 8.0,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    picture: "/images/testimonial.jpg",
  },
  {
    name: "Rafidul Islam",
    batchNo: 15,
    ieltsScore: 6.5,
    review:
      "Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam.",
    picture: "/images/testimonial.jpg",
  },
  {
    name: "Anika Sultana",
    batchNo: 8,
    ieltsScore: 7.0,
    review:
      "Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.",
    picture: "/images/testimonial.jpg",
  },
  {
    name: "Kamal Hossain",
    batchNo: 14,
    ieltsScore: 7.8,
    review:
      "Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Nulla facilisi.",
    picture: "/images/testimonial.jpg",
  },
  {
    name: "Sadia Ahmed",
    batchNo: 11,
    ieltsScore: 8.2,
    review:
      "Pellentesque commodo eros a enim. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl.",
    picture: "/images/testimonial.jpg",
  },
] as const;

export function Testimonials() {
  return (
    <section className="pb-section container">
      <h2 className="pb-6 text-center text-4xl font-extrabold capitalize tracking-tight md:text-5xl lg:pb-8">
        Hear From Our Students
      </h2>
      <p className="mx-auto max-w-prose text-pretty px-4 pb-14 text-center leading-relaxed text-foreground/80">
        Insights and Testimonials from Our Community: Discover the Impact of Our
        Programs Through Our Students Eyes
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map(({ name, ieltsScore, batchNo, review, picture }) => (
          <div
            key={name}
            className="space-y-4 rounded-2xl border bg-secondary p-6 shadow-sm"
          >
            <div className="grid grid-cols-[max-content,_1fr,_max-content] items-center gap-x-3">
              <Avatar className="size-12 rounded-lg">
                <AvatarImage src={picture} alt={name} />
                <AvatarFallback>{name}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium">{name}</h4>
                <span className="text-foreground/60">Batch {batchNo}</span>
              </div>
              <div className="relative">
                <IconRosetteFilled className="size-10 text-primary" />
                <span className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 text-sm font-bold text-background">
                  {ieltsScore}
                </span>
              </div>
            </div>
            <p className="text-pretty leading-relaxed text-secondary-foreground">
              {review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
