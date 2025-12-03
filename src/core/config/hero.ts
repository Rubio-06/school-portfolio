import type { HeroConfig } from "@/types/hero";

export const heroConfig: HeroConfig = {
  greeting: "Hello, World! 💻",
  name: "Rubio Abela",
  tagline: "Développeur en alternance",
  animatedTexts: ["Étudiant BTS SIO", "Développeur Web", "Alternant passionné"],
  cta: {
    primary: {
      text: "Voir mes projets",
      href: "/projects",
    },
    secondary: {
      text: "Me contacter",
      href: "#contact",
    },
  },
};
