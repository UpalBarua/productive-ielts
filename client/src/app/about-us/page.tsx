import { BookOpenText, ServerCog } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  const allManagement = [
    {
      id: 1,
      name: "upal barua",
      position: "founder",
      image:
        "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      name: "upal barua",
      position: "founder",
      image:
        "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      name: "upal barua",
      position: "founder",
      image:
        "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      name: "upal barua",
      position: "founder",
      image:
        "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      name: "upal barua",
      position: "founder",
      image:
        "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      name: "upal barua",
      position: "founder",
      image:
        "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <section className="container mb-14 mt-24">
      <div className="flex flex-col items-center gap-24 lg:flex-row">
        <div className="ml-2 flex-1 lg:ml-8">
          <h4 className="pb-4 text-primary">What we think</h4>
          <h1 className="pb-6 text-3xl font-bold">
            Our Dream is Global Learning Transformation
          </h1>
          <p>
            At its core, coaching is about facilitating change and improvement.
            Coaches help clients identify their strengths, navigate challenges,
            and uncover the potential that lies within. Unlike mentoring, which
            often involves sharing expertise and advice, coaching emphasizes
            asking powerful questions, active listening, and providing feedback
            to stimulate the client’s thinking and creativity. The benefits of
            coaching are extensive and varied. For individuals, coaching can
            enhance leadership skills, improve work-life balance, and increase
            confidence. Organizations also reap rewards, such as higher employee
            engagement, improved performance, and a more resilient and adaptable
            workforce. Through tailored strategies and actionable plans,
            coaching drives both personal fulfillment and organizational
            success.
          </p>
        </div>
        <div className="ml-8 flex-1">
          <Image
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            height={600}
            width={600}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="mb-8 mt-20 flex flex-col items-center gap-24 lg:flex-row">
        <div className="rounded-md border-x-2 bg-secondary p-4">
          <div className="flex justify-end pb-4">
            <h3 className="flex items-center gap-4 text-[22px] font-bold text-primary">
              <BookOpenText />
              Journey Of Us
            </h3>
          </div>
          <p className="pb-4">
            Every great venture begins with a spark of inspiration, a moment
            when a vision is born out of a desire to make a difference. Our
            story is no different. It started with a simple yet powerful idea:
            to create a space where passion meets purpose, where innovation
            thrives, and where people are empowered to reach their fullest
            potential.As we look to the future, we are excited about the
            possibilities that lie ahead. We remain committed to our founding
            principles while embracing innovation and change.
          </p>
        </div>
        <div className="rounded-md border-x-2 bg-secondary p-4">
          <div className="flex justify-end pb-4">
            <h3 className="flex items-center gap-4 text-[22px] font-bold text-primary">
              <ServerCog />
              Aspiration Of Us
            </h3>
          </div>
          <p className="pb-4">
            Every great venture begins with a spark of inspiration, a moment
            when a vision is born out of a desire to make a difference. Our
            story is no different. It started with a simple yet powerful idea:
            to create a space where passion meets purpose, where innovation
            thrives, and where people are empowered to reach their fullest
            potential.As we look to the future, we are excited about the
            possibilities that lie ahead. We remain committed to our founding
            principles while embracing innovation and change.
          </p>
        </div>
      </div>
      <div className="mt-24">
        <div className="pb-8">
          <h1 className="pb-2 text-3xl font-bold text-primary">
            Meet Our Team
          </h1>
          <p>We makes us as a family who has lot of dedication.</p>
        </div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-3">
          {allManagement?.map((management) => (
            <div key={management?.id}>
              <Image
                src={management?.image}
                alt=""
                width={370}
                height={420}
                className="rounded-md filter duration-300"
              />
              <div className="mt-2 w-80 rounded-md border-primary pb-4 pl-4 pt-4">
                <h2 className="text-[20px] font-bold">{management?.name}</h2>
                <h4>{management?.position}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
