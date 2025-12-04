import type { Navigation, NavigationItem, NavigationGroup } from "@/types/index";

export const navigation: Navigation = [
  {
    title: "Main",
    items: [
      { title: "À propos", href: "/#about" }, // Presentation & CV
      { title: "Expérience", href: "/#experience" }, // Work experience
      { title: "École", href: "/#school" }, // School cursus details
      { title: "Compétences", href: "/#skills" }, // Skills overview
      { title: "Projets", href: "/projects" }, // Projects showcase
      { title: "Veille", href: "/blog" }, // Tech watch (blog)
      { title: "Contact", href: "/#contact" }, // Contact form
    ],
  },
];
