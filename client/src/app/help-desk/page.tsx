"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useForm } from "react-hook-form";

import { z, ZodError } from "zod";
import { FolderPen, MailOpen, MessageCircleMore, PhoneOff } from "lucide-react";

const schema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  number: z.string(),

  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" }),
});
const HelpDesk = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <section className="mx-auto mt-24 max-w-5xl">
      <div className="relative m-10 rounded-lg shadow">
        <div className="ml-2 lg:ml-8">
          <h1 className="border-l-2 p-2 text-3xl font-bold text-primary">
            HELP DESK
          </h1>
          <p>Drop Your Query Or Confusion!</p>
        </div>
        <div className="space-y-6 p-6">
          <form
            action="#"
            className="rounded-md p-6 shadow-md shadow-secondary"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="text-white mb-2 flex items-center gap-3 text-[15px] font-medium">
                  <FolderPen size={20} />
                  First Name
                </label>
                <Input
                  {...register("firstName", { required: true })}
                  type="text"
                  name="firstName"
                  className="text-white block w-full rounded-md border bg-secondary p-2.5"
                  placeholder="first name"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="text-white mb-2 flex items-center gap-3 text-[15px] font-medium">
                  <FolderPen size={20} />
                  Last Name
                </label>
                <Input
                  {...register("lastName", { required: true })}
                  type="text"
                  name="lastName"
                  className="text-white block w-full rounded-md border bg-secondary p-2.5"
                  placeholder="last name"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-white mb-2 flex items-center gap-3 text-[15px] font-medium">
                  <MailOpen size={20} />
                  email
                </label>
                <Input
                  {...register("email", { required: true })}
                  type="text"
                  name="email"
                  className="text-white block w-full rounded-md border bg-secondary p-2.5"
                  placeholder="email"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-white mb-2 flex items-center gap-3 text-[15px] font-medium">
                  <PhoneOff size={20} />
                  Number
                </label>
                <Input
                  {...register("number", { required: true })}
                  type="text"
                  name="number"
                  className="text-white block w-full rounded-md border bg-secondary p-2.5"
                  placeholder="number"
                />
              </div>
              <div className="col-span-full">
                <label className="text-white mb-2 flex items-center gap-3 text-[15px] font-medium">
                  <MessageCircleMore size={22} />
                  Message
                </label>
                <Textarea
                  {...register("message", { required: true })}
                  name="message"
                  className="block w-full rounded-lg border bg-secondary p-4"
                  placeholder="message"
                ></Textarea>
              </div>
            </div>
            <div>
              <Button
                type="submit"
                className="mt-6 w-[300px] rounded-md font-bold"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HelpDesk;
