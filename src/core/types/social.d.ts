import type { SvgComponent } from "astro/types";

export type Social = {
  name: string;
  nickname?: string;
  link: string;
  icon: SvgComponent;
};
