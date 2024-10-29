import { IconBlockquote, IconMovie, IconUsers } from "@tabler/icons-react";

export const baseURL = "http://localhost:8080/api";
// export const baseURL = "https://productive-ielts.onrender.com/api";

export const navLinks = [
  {
    label: "Course",
    href: "modules",
  },
  {
    label: "video",
    href: "youtube-video",
  },
  {
    label: "About Us",
    href: "about-us",
  },
  {
    label: "Contact",
    href: "contact-us",
  },
  {
    label: "Help-desk",
    href: "help-desk",
  },
] as const;

export const adminNavLinks = [
  {
    href: "/admin/modules",
    icon: IconMovie,
    label: "Modules",
  },
  {
    href: "/students",
    icon: IconUsers,
    label: "Students",
  },
  {
    href: "/blog",
    icon: IconBlockquote,
    label: "Blog",
  },
] as const;
