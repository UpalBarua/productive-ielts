"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { baseURL } from "@/config";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconLoader2, IconTrash } from "@tabler/icons-react";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

// TODO: add proper validations for file inputs
const moduleVideoSchema = z.object({
  title: z.string(),
  video: z.instanceof(File),
});

const newModuleForm = z.object({
  moduleTitle: z.string(),
  moduleVideos: z.array(moduleVideoSchema),
});

type TNewModuleForm = z.infer<typeof newModuleForm>;

export default function NewModulePage() {
  const [isUploading, setIsUploading] = useState(false);

  const form = useForm<TNewModuleForm>({
    resolver: zodResolver(newModuleForm),
    defaultValues: {
      moduleTitle: "",
      moduleVideos: [
        {
          title: "",
          video: new File(["foo"], "foo.txt", {
            type: "text/plain",
          }),
        },
        {
          title: "",
          video: new File(["foo"], "foo.txt", {
            type: "text/plain",
          }),
        },

        {
          title: "",
          video: new File(["foo"], "foo.txt", {
            type: "text/plain",
          }),
        },
        {
          title: "",
          video: new File(["foo"], "foo.txt", {
            type: "text/plain",
          }),
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "moduleVideos",
    control: form.control,
  });

  async function onSubmit({ moduleTitle, moduleVideos }: TNewModuleForm) {
    try {
      setIsUploading(true);

      const promises = moduleVideos.map(({ video }) => {
        const formData = new FormData();
        formData.append("module_video", video);

        return fetch(`${baseURL}/module`, {
          method: "POST",
          body: formData,
        });
      });

      const responses = await Promise.all(promises);
      const data = await Promise.all(
        responses.map((response) => response?.json()),
      );

      const moduleVidoes = data.map(({ fileId }, i) => {
        return {
          title: moduleVideos[i].title,
          videoId: fileId,
        };
      });

      const newModule = {
        moduleTitle: moduleTitle,
        videos: moduleVidoes,
      };

      const response = await fetch(`${baseURL}/module/new-module`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newModule),
      });

      if (response.status === 201) {
        alert("New module added!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <main className="grid-container py-20 md:py-6">
      <button
        onClick={() =>
          append({
            title: "",
            video: new File(["foo"], "foo.txt", {
              type: "text/plain",
            }),
          })
        }
      >
        ADD MODULE
      </button>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4"
        >
          <div className="col-span-full grid grid-cols-[auto_min-content_min-content] items-center gap-2">
            <FormField
              control={form.control}
              name="moduleTitle"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      defaultValue="Module Title"
                      className="text-2xl font-medium"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="button" size="lg" variant="outline">
              Clear
            </Button>
            <Button type="submit" size="lg">
              Publish
            </Button>
          </div>
          {fields.map((item, index) => (
            <div
              key={item.id}
              className="space-y-3 rounded-2xl border bg-secondary p-5"
            >
              <div className="flex items-center justify-between">
                <h3 className="pb-2 font-medium">Module Video {index + 1}</h3>
                <button
                  className="text-destructive"
                  onClick={() => remove(index)}
                >
                  <IconTrash className="size-5" />
                </button>
              </div>
              <FormField
                control={form.control}
                name={`moduleVideos.${index}.title`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} type="text" placeholder="shadcn" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`moduleVideos.${index}.video`}
                render={({ field: { value, onChange, ...filedProps } }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...filedProps}
                        type="file"
                        placeholder="add a video title"
                        onChange={(event) =>
                          onChange(event?.target?.files?.[0])
                        }
                        className="h-auto"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          ))}
        </form>
      </Form>
      {isUploading && (
        <div className="absolute inset-0 mt-4 flex h-full flex-col items-center justify-center gap-4 bg-secondary/80 backdrop-blur">
          <IconLoader2 className="size-[2.5rem] animate-spin" />
          <span>Please Wait</span>
        </div>
      )}
    </main>
  );
}
