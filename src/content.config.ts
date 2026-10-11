import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const writings = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writings" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      url: z.url().optional(),
      repo: z.url().optional(),
      stack: z.array(z.string()).default([]),
      points: z.array(z.string()).default([]),
      image: image().optional(),
      // Lower numbers show first.
      order: z.number().default(0),
    }),
});

export const collections = { writings, projects };
