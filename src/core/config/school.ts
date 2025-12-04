import type { SchoolConfig } from "@/types/school";

export const schoolConfig: SchoolConfig = {
  name: "Isitech",
  description:
    "École d'informatique en alternance située à Lyon, proposant des formations du Bac au Bac+5 dans les domaines du numérique et des technologies de l'information.",
  diploma: {
    name: "BTS SIO",
    fullName: "Services Informatiques aux Organisations",
    description:
      "Le BTS SIO forme des techniciens supérieurs capables de répondre aux besoins des entreprises en matière de solutions informatiques. La formation permet d'acquérir des compétences techniques et organisationnelles pour gérer, maintenir et développer des solutions informatiques.",
    duration: "2 ans",
    level: "Bac+2",
  },
  options: [
    {
      name: "SISR",
      title: "Solutions d'Infrastructure, Systèmes et Réseaux",
      description:
        "L'option SISR forme des spécialistes en infrastructure réseau, administration système et cybersécurité. Les étudiants apprennent à installer, configurer et maintenir des infrastructures réseau et des systèmes.",
      icon: "server",
      skills: [],
      careers: [
        "Administrateur systèmes et réseaux",
        "Technicien infrastructure",
        "Responsable sécurité informatique",
        "Technicien support et help desk",
        "Administrateur cloud",
      ],
    },
    {
      name: "SLAM",
      title: "Solutions Logicielles et Applications Métiers",
      description:
        "L'option SLAM forme des développeurs capables de concevoir, développer et maintenir des applications. Les étudiants apprennent la programmation, les bases de données et le développement web et mobile.",
      icon: "code",
      skills: [],
      careers: [
        "Développeur web full-stack",
        "Développeur d'applications mobiles",
        "Développeur back-end",
        "Analyste programmeur",
        "Chef de projet technique",
      ],
    },
  ],
  advantages: [],
};
