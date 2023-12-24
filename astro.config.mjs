import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import { astroImageTools } from "astro-imagetools";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },
  site: 'https://bloom-blog.vercel.app',
  integrations: [mdx(), sitemap(), react(), astroImageTools({
    placeholder: "tracedSVG",
    format: ["webp", "jpg"],
    fallbackFormat: "png",
    includeSourceFormat: false,
    formatOptions: {
      jpg: {
        quality: 80,
      },
      png: {
        quality: 80,
      },
      webp: {
        quality: 50,
      },
      tracedSVG: {
        options: {
          background: "#fff",
          color: "#000",
          turnPolicy: "black",
          turdSize: 1,
          alphaMax: 1,
          optCurve: true,
          threshold: 100,
          blackOnWhite: false,
        },
      },
    },
  })],
  output: "server",
  adapter: vercel(),
});
