import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: 'https://bloom-blog.vercel.app',
  integrations: [mdx(), sitemap(), react()],
  output: "static",
  adapter: vercel(),
});
