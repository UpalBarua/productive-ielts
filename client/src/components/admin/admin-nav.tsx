import { adminNavLinks } from "@/config";
import Link from "next/link";

export function AdminNav() {
  return (
    <nav className="grid justify-start gap-y-4">
      {adminNavLinks.map(({ icon: Icon, href, label }) => (
        <Link
          key={href}
          href={href}
          className="group flex items-center gap-x-2 font-medium"
        >
          <Icon className="size-4 opacity-80" />
          <span className="underline-offset-2 group-hover:underline">
            {label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
