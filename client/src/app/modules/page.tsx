"use client";

import { ModuleVideo } from "@/components/module-video";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import type { Module } from "@/types";
import {
  IconBrandYoutube,
  IconChevronLeft,
  IconChevronRight,
  IconClock,
  IconVideo,
} from "@tabler/icons-react";
import { useState, useEffect } from "react";

const modules = [
  {
    title: "Module 1: Lorem ipsum dolor sit amet, qui minim labore.",
    vidoes: [
      {
        title: "Module video 1: Lorem ipsum dolor sit amet.",
        videoId:
          "http://localhost:8080/module/1PlSX5mrApW-DeYMlh4uW3GYXzg460yNZ",
      },
      {
        title: "Module video 1: Lorem ipsum dolor sit amet.",
        videoId:
          "http://localhost:8080/module/1PlSX5mrApW-DeYMlh4uW3GYXzg460yNZ",
      },
      {
        title: "Module video 1: Lorem ipsum dolor sit amet.",
        videoId:
          "http://localhost:8080/module/1PlSX5mrApW-DeYMlh4uW3GYXzg460yNZ",
      },
      {
        title: "Module video 1: Lorem ipsum dolor sit amet.",
        videoId:
          "http://localhost:8080/module/1PlSX5mrApW-DeYMlh4uW3GYXzg460yNZ",
      },
      {
        title: "Module video 1: Lorem ipsum dolor sit amet.",
        videoId:
          "http://localhost:8080/module/1PlSX5mrApW-DeYMlh4uW3GYXzg460yNZ",
      },
    ],
  },
  {
    title: "Module 1: Lorem ipsum dolor sit amet, qui minim labore.",
    vidoes: [
      {
        title: "Module video 1: Lorem ipsum dolor sit amet.",
        videoId:
          "http://localhost:8080/module/1PlSX5mrApW-DeYMlh4uW3GYXzg460yNZ",
      },
      {
        title: "Module video 1: Lorem ipsum dolor sit amet.",
        videoId:
          "http://localhost:8080/module/1PlSX5mrApW-DeYMlh4uW3GYXzg460yNZ",
      },
      {
        title: "Module video 1: Lorem ipsum dolor sit amet.",
        videoId:
          "http://localhost:8080/module/1PlSX5mrApW-DeYMlh4uW3GYXzg460yNZ",
      },
      {
        title: "Module video 1: Lorem ipsum dolor sit amet.",
        videoId:
          "http://localhost:8080/module/1PlSX5mrApW-DeYMlh4uW3GYXzg460yNZ",
      },
    ],
  },
  {
    title: "Module 1: Lorem ipsum dolor sit amet, qui minim labore.",
    vidoes: [
      {
        title: "Module video 1: Lorem ipsum dolor sit amet.",
        videoId:
          "http://localhost:8080/module/1PlSX5mrApW-DeYMlh4uW3GYXzg460yNZ",
      },
      {
        title: "Module video 1: Lorem ipsum dolor sit amet.",
        videoId:
          "http://localhost:8080/module/1PlSX5mrApW-DeYMlh4uW3GYXzg460yNZ",
      },
      {
        title: "Module video 1: Lorem ipsum dolor sit amet.",
        videoId:
          "http://localhost:8080/module/1PlSX5mrApW-DeYMlh4uW3GYXzg460yNZ",
      },
      {
        title: "Module video 1: Lorem ipsum dolor sit amet.",
        videoId:
          "http://localhost:8080/module/1PlSX5mrApW-DeYMlh4uW3GYXzg460yNZ",
      },
    ],
  },
  {
    title: "Module 1: Lorem ipsum dolor sit amet, qui minim labore.",
    vidoes: [
      {
        title: "Module video 1: Lorem ipsum dolor sit amet.",
        videoId:
          "http://localhost:8080/module/1PlSX5mrApW-DeYMlh4uW3GYXzg460yNZ",
      },
      {
        title: "Module video 1: Lorem ipsum dolor sit amet.",
        videoId:
          "http://localhost:8080/module/1PlSX5mrApW-DeYMlh4uW3GYXzg460yNZ",
      },
      {
        title: "Module video 1: Lorem ipsum dolor sit amet.",
        videoId:
          "http://localhost:8080/module/1PlSX5mrApW-DeYMlh4uW3GYXzg460yNZ",
      },
      {
        title: "Module video 1: Lorem ipsum dolor sit amet.",
        videoId:
          "http://localhost:8080/module/1PlSX5mrApW-DeYMlh4uW3GYXzg460yNZ",
      },
    ],
  },
  {
    title: "Module 1: Lorem ipsum dolor sit amet, qui minim labore.",
    vidoes: [
      {
        title: "Module video 1: Lorem ipsum dolor sit amet.",
        videoId:
          "http://localhost:8080/module/1PlSX5mrApW-DeYMlh4uW3GYXzg460yNZ",
      },
      {
        title: "Module video 1: Lorem ipsum dolor sit amet.",
        videoId:
          "http://localhost:8080/module/1PlSX5mrApW-DeYMlh4uW3GYXzg460yNZ",
      },
      {
        title: "Module video 1: Lorem ipsum dolor sit amet.",
        videoId:
          "http://localhost:8080/module/1PlSX5mrApW-DeYMlh4uW3GYXzg460yNZ",
      },
      {
        title: "Module video 1: Lorem ipsum dolor sit amet.",
        videoId:
          "http://localhost:8080/module/1PlSX5mrApW-DeYMlh4uW3GYXzg460yNZ",
      },
      {
        title: "Module video 1: Lorem ipsum dolor sit amet.",
        videoId:
          "http://localhost:8080/module/1PlSX5mrApW-DeYMlh4uW3GYXzg460yNZ",
      },
    ],
  },
] as const;

export default function ModulesPage() {
  const [modules, setModules] = useState<Module[]>([]);
  const [currentVideoId, setCurrentVideoId] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8080/api/module");
      const data = await response.json();
      setModules(data.data);
      setCurrentVideoId(data.data[0].videos[0].videoId);
    })();
  }, []);

  return (
    <main className="grid-container pt-20">
      <div className="grid items-start gap-4 md:grid-cols-[60%_1fr]">
        <section className="rounded-xl bg-secondary p-2 shadow">
          <ModuleVideo currentVideoId={currentVideoId} />
          <div className="flex items-center justify-end gap-4 px-2 pb-2 pt-5">
            <Button size="sm" variant="secondary">
              <IconChevronLeft className="size-4" />
              <span>Previous</span>
            </Button>
            <Button size="sm">
              <span>Next</span>
              <IconChevronRight className="size-4" />
            </Button>
          </div>
        </section>
        <aside className="">
          <Accordion className="space-y-4" type="multiple">
            {modules &&
              modules.map(({ moduleTitle, videos, _id }) => (
                <AccordionItem
                  key={_id}
                  className="rounded-xl bg-secondary px-5 py-4 shadow"
                  value={_id}
                >
                  <AccordionTrigger className="grid grid-cols-[1fr,_max-content] grid-rows-[repeat(min-content,_2)] items-start gap-3 p-0 text-start hover:no-underline">
                    <h4 className="text-pretty leading-relaxed">
                      {moduleTitle}
                    </h4>
                    <div className="row-start-2 flex items-center gap-4 p-0 text-sm text-secondary-foreground">
                      <div className="flex items-center gap-1">
                        <IconClock className="size-4" />
                        <span>16h 35m</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <IconVideo className="size-4" />
                        <span>10/12</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="divide-y-[1px] divide-secondary-foreground/20 pt-4">
                    {videos.map(({ title, videoId }) => (
                      <div
                        key={videoId}
                        className="flex cursor-pointer items-center gap-2 py-4"
                        onClick={() => setCurrentVideoId(videoId)}
                      >
                        <IconBrandYoutube className="size-4 text-secondary-foreground" />
                        <span>{title}</span>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </aside>
      </div>
    </main>
  );
}
