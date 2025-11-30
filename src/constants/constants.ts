import { NavigationButtonProps } from "@/components/layout/Navbar/Navbar.types";

export const REGEX = {
  EMAIL: /\S+@\S+\.\S+/,
};

export const MOBILE_VIEW_WIDTH = 768;
export const SCROLL_UPDATE_THRESHOLD = 80;

export const NavigationLinks: NavigationButtonProps[] = [
  {
    label: "corporate",
    href: "/corporate",
  },
  {
    label: "services",
    href: "/services",
  },
  {
    label: "projects",
    href: "/projects",
  },
  {
    label: "hse",
    href: "/hse",
  },
  {
    label: "quality",
    href: "/quality",
  },
  {
    label: "contact",
    href: "/contact",
  },
  {
    label: "careers",
    href: "/careers",
  },
];
