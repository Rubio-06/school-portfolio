export interface AboutConfig {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  email: string;
  title: string;
  description: string[];
  highlights: {
    icon: string;
    label: string;
    value: string;
  }[];
  cv: {
    available: boolean;
    url?: string;
  };
}
