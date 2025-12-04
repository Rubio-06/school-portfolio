import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["scolaire", "personnel"]),
    technologies: z.array(z.string()),
    image: z.string().optional(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    date: z.date(),
    featured: z.boolean().default(false),
    order: z.number().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
