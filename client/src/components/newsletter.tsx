import { Button } from "@/components/ui/button";
import { IconSend } from "@tabler/icons-react";

export function Newsletter() {
  return (
    <div className="border-b border-t py-6">
      <div className="container relative isolate grid items-start gap-2 overflow-hidden rounded-lg bg-secondary sm:grid-cols-2 sm:gap-x-4">
        <h2 className="text-pretty pb-2 text-4xl font-medium tracking-tight sm:col-[1/2]">
          Newsletter
        </h2>
        <p className="max-w-[40ch] pb-4 leading-relaxed text-secondary-foreground sm:col-[1/2]">
          Keep pace with SecureCloud advancements! Join our mailing list for
          selective, noteworthy updates.
        </p>
        <form className="flex h-12 w-full rounded-lg border border-input bg-background p-1 text-sm">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            placeholder="Enter your email"
            className="size-full bg-transparent px-2 outline-none"
          />
          <Button
            type="submit"
            className="aspect-square p-0 sm:aspect-[initial] sm:px-4"
          >
            <IconSend className="size-5 sm:size-4" />
            <span className="hidden lg:block">Subscribe</span>
          </Button>
          {/* <div className="absolute right-0 top-1/2 -z-10 size-[80rem] rounded-full bg-primary opacity-20 blur-2xl" /> */}
        </form>
      </div>
    </div>
  );
}
