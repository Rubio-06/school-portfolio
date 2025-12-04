import type { ExperienceConfig } from "@/types/experience";

export const experienceConfig: ExperienceConfig = {
  items: [
    {
      id: "bts-sio",
      title: "BTS SIO - SLAM",
      organization: "Isitech",
      location: "Lyon",
      startDate: "2024",
      current: true,
      type: "education",
      description: [
        "BTS Services Informatiques aux Organisations en alternance, option Solutions Logicielles et Applications Métiers",
        "École d'informatique spécialisée dans le développement web et la gestion de projets",
        "Formation pratique avec expérience professionnelle en entreprise",
      ],
      skills: [
        "Développement web",
        "JavaScript/TypeScript",
        "React",
        "Node.js",
        "Base de données",
        "Gestion de projet",
      ],
    },
    {
      id: "bac-sti2d",
      title: "Baccalauréat STI2D",
      organization: "Lycée Édouard Branly",
      location: "Lyon",
      startDate: "2022",
      endDate: "2024",
      type: "education",
      description: [
        "Baccalauréat Sciences et Technologies de l'Industrie et du Développement Durable",
        "Spécialité STI2D - Formation axée sur les technologies numériques et l'innovation",
        "Parcours de la première à la terminale avec acquisition de compétences techniques",
      ],
      skills: [
        "Programmation",
        "Systèmes numériques",
        "Technologies de l'information",
        "Électronique",
      ],
    },
    {
      id: "seconde-generale",
      title: "Seconde Générale",
      organization: "Lycée La Martinière Duchère",
      location: "Lyon",
      startDate: "2021",
      endDate: "2022",
      type: "education",
      description: [
        "Année de seconde générale",
        "Découverte des différentes filières et orientation vers les sciences et technologies",
        "Fondation des bases pour la poursuite en filière STI2D",
      ],
      skills: ["Culture générale", "Sciences", "Mathématiques"],
    },
  ],
};
