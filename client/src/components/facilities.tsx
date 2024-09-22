import {
  IconBook,
  IconCalendarEvent,
  IconDeviceAnalytics,
  IconGlobe,
} from "@tabler/icons-react";

const facilities = [
  {
    title: "Personalized Learning Plans",
    description: "Tailored study plans to suit your individual needs and pace.",
    icon: <IconCalendarEvent className="size-12" />,
  },
  {
    title: "Extensive Practice Materials",
    description: "Access to a wide range of practice tests and exercises.",
    icon: <IconBook className="m-0 size-12" />,
  },
  {
    title: "Mock Tests and Feedback",
    description:
      "Simulate exam conditions and receive expert feedback on your performance.",
    icon: <IconDeviceAnalytics className="size-12" />,
  },
  {
    title: "Experienced IELTS Trainers",
    description: "Learn from qualified and experienced IELTS instructors.",
    icon: <IconGlobe className="size-12" />,
  },
] as const;

export function Facilities() {
  return (
    <section className="pb-10">
      <ul className="grid gap-16 sm:grid-cols-2 lg:grid-cols-4">
        {facilities.map(({ title, description, icon: Icon }) => (
          <li
            key={title}
            className="row-span-3 grid grid-rows-subgrid justify-items-center gap-y-2 text-center lg:justify-items-start lg:text-start"
          >
            <span className="pb-4">{Icon}</span>
            <h3 className="text-pretty text-xl font-medium">{title}</h3>
            <p className="max-w-[min(30ch,_80vw)] text-pretty leading-relaxed text-background/60">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
