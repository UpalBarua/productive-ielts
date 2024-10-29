import { MobileNav } from "@/components/mobile-nav";
import { navLinks } from "@/config";
import { IconLogin, IconVocabulary } from "@tabler/icons-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export function Navbar() {
  return (
    <header className="grid-container fixed left-0 top-0 z-10 w-full border-b bg-background/75 py-4 backdrop-blur">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-medium">
          <IconVocabulary className="text-primary" />
          <span>Productive IELTS</span>
        </Link>
        <nav className="hidden items-center gap-x-8 md:flex">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="capitalize transition-colors duration-300 hover:text-secondary-foreground focus-visible:text-secondary-foreground"
            >
              {label}
            </Link>
          ))}
          <Link href="/sign-in" className={buttonVariants({})}>
            <IconLogin className="size-5" />
            <span>Sign In</span>
          </Link>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
