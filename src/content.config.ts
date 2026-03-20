import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const novedades = defineCollection({
    // Use the glob loader to load files from the file system
    loader: glob({ pattern: "**/*.md", base: "./src/content/novedades" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date().transform(date => {
            return new Date(
                date.getUTCFullYear(),
                date.getUTCMonth(),
                date.getUTCDate()
            );
        }),
        image: image(),
        imageAlt: z.string(),
        category: z.string(),
        author: z.string().optional(),
        draft: z.boolean().optional().default(false),
        featured: z.boolean().optional().default(false),
    }),
});

export const collections = {
    'novedades': novedades,
};