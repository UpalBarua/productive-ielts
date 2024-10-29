"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { baseURL } from "@/config";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconLoader2, IconPlus, IconTrash } from "@tabler/icons-react";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// TODO: add proper validations for file inputs
const moduleVideoSchema = z.object({
  title: z.string(),
  video: z.instanceof(File),
});

const quizQuestionSchema = z.object({
  question: z.string(),
  options: z.array(z.string()),
  correctAnswer: z.string(),
});

const newModuleForm = z.object({
  moduleTitle: z.string(),
  moduleVideos: z.array(moduleVideoSchema),
  quiz: z.array(quizQuestionSchema),
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
      quiz: [
        {
          question: "",
          options: ["", "", "", ""],
          correctAnswer: "",
        },
        {
          question: "",
          options: ["", "", "", ""],
          correctAnswer: "",
        },
        {
          question: "",
          options: ["", "", "", ""],
          correctAnswer: "",
        },
        {
          question: "",
          options: ["", "", "", ""],
          correctAnswer: "",
        },
      ],
    },
  });

  const {
    fields: moduleVideoFields,
    append: appendModuleVideoField,
    remove: removeModuleVideoField,
  } = useFieldArray({
    name: "moduleVideos",
    control: form.control,
  });

  const {
    fields: quizQuestionFields,
    append: appendQuizQuestionField,
    remove: removeQuizQuestionField,
  } = useFieldArray({
    name: "quiz",
    control: form.control,
  });

  async function onSubmit({ moduleTitle, moduleVideos, quiz }: TNewModuleForm) {
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
        quiz,
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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-[auto_min-content_min-content] items-center gap-2">
            <FormField
              control={form.control}
              name="moduleTitle"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Module Title"
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
          <div className="grid grid-cols-2 gap-4">
            {moduleVideoFields.map((item, index) => (
              <div
                key={item.id}
                className="space-y-3 rounded-2xl border bg-secondary p-5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="pb-2 font-medium">Module Video {index + 1}</h3>
                  <button
                    className="text-destructive"
                    onClick={() => removeModuleVideoField(index)}
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
            <button
              type="button"
              className="flex h-[4rem] items-center justify-center gap-x-2 rounded-xl border bg-secondary py-6 font-medium"
              onClick={() =>
                appendModuleVideoField({
                  title: "",
                  video: new File(["foo"], "foo.txt", {
                    type: "text/plain",
                  }),
                })
              }
            >
              <IconPlus className="size-5" />
              <span>Add Video</span>
            </button>
          </div>
          <div>
            <h2 className="pb-6 pt-8 text-3xl font-medium">Module Quiz</h2>
            <div className="grid grid-cols-2 gap-5">
              {quizQuestionFields.map((item, index) => (
                <div
                  key={item.id}
                  className="space-y-3 rounded-2xl border bg-secondary p-5"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="pb-2 font-medium">
                      Quiz Question {index + 1}
                    </h3>
                    <button
                      className="text-destructive"
                      onClick={() => removeQuizQuestionField(index)}
                    >
                      <IconTrash className="size-5" />
                    </button>
                  </div>
                  <FormField
                    control={form.control}
                    name={`quiz.${index}.question`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="quesiton"
                            className="resize-none"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Label className="block pt-4">Options</Label>
                  {Array(4)
                    .fill("")
                    .map((_, i) => (
                      <FormField
                        key={i}
                        control={form.control}
                        name={`quiz.${index}.options.${i}`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  {...field}
                                  placeholder="option"
                                  className="ps-8"
                                />
                                <span className="absolute left-0 top-1/2 mx-3 -translate-y-1/2 font-medium">
                                  {String.fromCharCode(i + 65)}.
                                </span>
                              </div>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    ))}
                  <Label className="block pt-4">Correct Answer</Label>
                  <FormField
                    control={form.control}
                    name={`quiz.${index}.correctAnswer`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input {...field} placeholder="option" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              ))}
              <button
                type="button"
                className="flex h-[4rem] items-center justify-center gap-x-2 rounded-xl border bg-secondary py-6 font-medium"
                onClick={() =>
                  appendQuizQuestionField({
                    question: "",
                    options: ["", "", "", ""],
                    correctAnswer: "",
                  })
                }
              >
                <IconPlus className="size-5" />
                <span>Add Question</span>
              </button>
            </div>
          </div>
        </form>
      </Form>
      {isUploading && (
        <div className="/80 absolute inset-0 mt-4 flex h-full flex-col items-center justify-center gap-4 bg-secondary backdrop-blur">
          <IconLoader2 className="size-[2.5rem] animate-spin" />
          <span>Please Wait</span>
        </div>
      )}
    </main>
  );
}
