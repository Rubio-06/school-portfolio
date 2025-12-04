import type { Navigation, NavigationItem, NavigationGroup } from "@/types/index";

export const navigation: Navigation = [
  {
    title: "Main",
    items: [
      { title: "À propos", href: "/#about" }, // Presentation & CV
      { title: "Expérience", href: "/#experience" }, // Work experience
      { title: "Compétences", href: "/#skills" }, // Skills overview
      { title: "École", href: "/#school" }, // School cursus details
      { title: "Projets", href: "/#projects" }, // Projects showcase
      { title: "Veille", href: "/#veille" }, // Tech watch (blog)
      { title: "Contact", href: "/#contact" }, // Contact form
    ],
  },
];
