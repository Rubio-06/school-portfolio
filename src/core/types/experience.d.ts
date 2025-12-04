export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string[];
  skills?: string[];
  type: "education" | "work";
}

export interface ExperienceConfig {
  items: ExperienceItem[];
}
