export type SkillCategory = "frontend" | "backend" | "database" | "tools" | "design" | "languages";

export type Skill = {
  name: string;
  category: SkillCategory;
  icon: string; // path to SVG icon
  startYear: number; // année de début d'utilisation
  endYear?: number; // année de fin d'utilisation (optionnel si toujours utilisé)
  level: 1 | 2 | 3 | 4 | 5; // niveau de maîtrise
  description?: string;
};

export type SkillsConfig = {
  skills: Skill[];
  categories: {
    id: SkillCategory;
    label: string;
    color: string;
  }[];
};
