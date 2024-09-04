import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/config";
import { IconMenu4 } from "@tabler/icons-react";
import Link from "next/link";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button size="icon" variant="outline">
          <IconMenu4 />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-secondary/75 px-10 pt-16 text-lg backdrop-blur">
        <nav className="grid gap-6">
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
