import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      description: z.string(),
      year: z.number(),
      services: z.array(z.string()),
      link: z.string().url().optional(),
      coverImage: z.string(),
      gallery: z.array(z.string()).optional(),
      theme: z.enum(["dark", "light"]).default("dark"),
      featured: z.boolean().default(false),
      order: z.number().default(99),
    }),
});

export const collections = {
  projects,
};
