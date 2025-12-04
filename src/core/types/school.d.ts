export interface SchoolOption {
  name: string;
  title: string;
  description: string;
  icon: string;
  skills: string[];
  careers: string[];
}

export interface SchoolConfig {
  name: string;
  description: string;
  diploma: {
    name: string;
    fullName: string;
    description: string;
    duration: string;
    level: string;
  };
  options: SchoolOption[];
  advantages: string[];
}
