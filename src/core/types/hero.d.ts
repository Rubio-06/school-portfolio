export type HeroConfig = {
  greeting: string;
  name: string;
  tagline: string;
  animatedTexts: string[];
  cta: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
};
