import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },
  site: 'https://bloom-blog.vercel.app',
  integrations: [mdx(), sitemap(), react()],
  output: "server",
  adapter: vercel(),
});
