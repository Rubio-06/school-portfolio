import type { Navigation, NavigationItem, NavigationGroup } from "@/types/index";

export const navigation: Navigation = [
  {
    title: "Main",
    items: [
      { title: "About", href: "/#about" }, // Presentation & CV
      { title: "Skills", href: "/#skills" }, // Skills overview
      { title: "School", href: "/#school" }, // School cursus details
      { title: "Projects", href: "/#projects" }, // Projects showcase
      { title: "Experience", href: "/#experience" }, // Work experience
      { title: "Veille", href: "/#veille" }, // Tech watch (blog)
      { title: "Contact", href: "/#contact" }, // Contact form
    ],
  },
];
