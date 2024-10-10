"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  IconBrandFacebook,
  IconBrandGoogle,
  IconVocabulary,
} from "@tabler/icons-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

// TODO: add proper validation using zod and regex.
const signInFormSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

type TSignInForm = z.infer<typeof signInFormSchema>;

export default function SignInPage() {
  const form = useForm<TSignInForm>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: TSignInForm) {
    console.log(values);
  }

  return (
    <main className="grid content-center justify-items-center py-20">
      <Link
        href="/"
        className="flex items-center gap-2 pb-4 text-2xl font-medium"
      >
        <IconVocabulary className="size-8 text-primary" />
        <span>Productive IELTS</span>
      </Link>
      <span className="pb-8 text-center">
        Welcome back! Sign in to get started
      </span>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid w-full max-w-md gap-y-4 rounded-xl border bg-secondary px-4 py-3 shadow sm:px-6 sm:py-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="absolute left-0 top-0 px-3 py-5">
                  Email Address *
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-foreground/30 bg-transparent pb-5 pt-10"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="absolute left-0 top-0 px-3 py-5">
                  Password *
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="border-foreground/30 bg-transparent pb-5 pt-10"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="lg">
            Sign In
          </Button>
          <div className="flex items-center gap-x-4">
            <span className="block h-[1px] w-full bg-foreground/40" />
            <span>OR</span>
            <span className="block h-[1px] w-full bg-foreground/40" />
          </div>
          <Button type="button" size="lg" variant="outline">
            <IconBrandGoogle className="size-5" />
            Continue with google
          </Button>
          <Button type="button" size="lg" variant="outline">
            <IconBrandFacebook className="size-5" />
            Continue with facebook
          </Button>
          <div className="py-2 text-center text-sm">
            Don't have an account?{" "}
            <Link className="text-primary" href="/sign-up">
              Sign Up
            </Link>
          </div>
        </form>
      </Form>
    </main>
  );
}
