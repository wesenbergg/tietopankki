import { defineCollection, z } from 'astro:content';

const blogi = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const testi = defineCollection({
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
	})
})

const courseCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		chapter: z.number(),
		desc: z.string()
	})
})

const git101 = courseCollection;
const web101 = courseCollection;

export const collections = { blogi, testi, "101-git": git101, "101-web": web101 };
