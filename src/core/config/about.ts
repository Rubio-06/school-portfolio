import type { AboutConfig } from "@/types/about";

export const aboutConfig: AboutConfig = {
  firstName: "Rubio",
  lastName: "Abela",
  age: 20,
  location: "France",
  email: "contact@rubio-abela.fr",
  title: "Développeur Full Stack",
  description: [
    "Étudiant passionné en BTS SIO (Services Informatiques aux Organisations), option SLAM, je me spécialise dans le développement web moderne et les technologies JavaScript/TypeScript.",
    "Mon parcours m'a permis d'acquérir des compétences solides en développement front-end avec React, Astro et Tailwind CSS, ainsi qu'en back-end avec Node.js et les bases de données SQL/NoSQL.",
    "Actuellement en alternance, je cherche constamment à améliorer mes compétences et à relever de nouveaux défis techniques. Je suis particulièrement intéressé par l'architecture logicielle et les bonnes pratiques de développement.",
  ],
  highlights: [
    {
      icon: "",
      label: "Formation",
      value: "BTS SIO - SLAM",
    },
    {
      icon: "",
      label: "Statut",
      value: "En alternance",
    },
    {
      icon: "",
      label: "Localisation",
      value: "France",
    },
    {
      icon: "",
      label: "Expérience",
      value: "4+ ans",
    },
  ],
  cv: {
    available: true,
    url: "/cv.pdf",
  },
};
