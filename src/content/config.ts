import { defineCollection, z } from "astro:content";

const notes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.enum([
      "Legacy",
      "Cloud",
      "Kotlin",
      "Architecture",
      "Identity",
      "Observability",
      "Decision-making",
      "Modernization",
    ])).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes };
