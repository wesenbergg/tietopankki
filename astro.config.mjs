import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    tailwind(),
    sitemap(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "dracula" },
      gfm: false,
    }),
  ],
});
