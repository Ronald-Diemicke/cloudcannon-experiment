// 2. Define a `type` and `schema` for each collection
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
export const pageCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        content: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
        titleComponent: z.object({
            title: z.string().optional(),
            body: z.string().optional(),
        }).optional()
    }),
});