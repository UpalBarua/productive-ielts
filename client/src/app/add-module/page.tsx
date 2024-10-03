"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { IconLoader2 } from "@tabler/icons-react";

// TODO: add proper validations for file inputs
const newModuleForm = z.object({
  moduleTitle: z.string(),
  title1: z.string(),
  video1: z.instanceof(File),
  title2: z.string(),
  video2: z.instanceof(File),
  title3: z.string(),
  video3: z.instanceof(File),
  title4: z.string(),
  video4: z.instanceof(File),
});

type TNewModuleForm = z.infer<typeof newModuleForm>;

export default function AddModulePage() {
  const [isUploading, setIsUploading] = useState(false);

  const form = useForm<TNewModuleForm>({
    resolver: zodResolver(newModuleForm),
    // defaultValues: {},
  });

  async function onSubmit(values: TNewModuleForm) {
    try {
      setIsUploading(true);

      const videoFileKeys = Object.keys(values).filter(
        (key) => values[key as keyof typeof values] instanceof File,
      );

      const promises = videoFileKeys.map((value) => {
        const formData = new FormData();
        formData.append("module_video", values[value as keyof typeof values]);

        return fetch("http://localhost:8080/api/module", {
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
          title: values[`title${i + 1}` as keyof typeof values],
          videoId: fileId,
        };
      });

      const newModule = {
        moduleTitle: values.moduleTitle,
        videos: moduleVidoes,
      };

      const response = await fetch(
        "http://localhost:8080/api/module/new-module",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newModule),
        },
      );

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
    <main className="grid-container pt-28">
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
                      className="max-w-max text-3xl font-bold"
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
          <div className="space-y-3 rounded-2xl border bg-secondary p-5">
            <h3 className="pb-2 text-xl font-medium">Module Video 1</h3>
            <FormField
              control={form.control}
              name="title1"
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
              name="video1"
              render={({ field: { value, onChange, ...filedProps } }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...filedProps}
                      type="file"
                      placeholder="shadcn"
                      onChange={(event) => onChange(event?.target?.files?.[0])}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-3 rounded-2xl border bg-secondary p-5">
            <h3 className="pb-2 text-xl font-medium">Module Video 2</h3>
            <FormField
              control={form.control}
              name="title2"
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
              name="video2"
              render={({ field: { value, onChange, ...filedProps } }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...filedProps}
                      type="file"
                      placeholder="shadcn"
                      onChange={(event) => onChange(event?.target?.files?.[0])}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-3 rounded-2xl border bg-secondary p-5">
            <h3 className="pb-2 text-xl font-medium">Module Video 3</h3>
            <FormField
              control={form.control}
              name="title3"
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
              name="video3"
              render={({ field: { value, onChange, ...filedProps } }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...filedProps}
                      type="file"
                      placeholder="shadcn"
                      onChange={(event) => onChange(event?.target?.files?.[0])}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-3 rounded-2xl border bg-secondary p-5">
            <h3 className="pb-2 text-xl font-medium">Module Video 4</h3>
            <FormField
              control={form.control}
              name="title4"
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
              name="video4"
              render={({ field: { value, onChange, ...filedProps } }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...filedProps}
                      type="file"
                      placeholder="shadcn"
                      onChange={(event) => onChange(event?.target?.files?.[0])}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
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
