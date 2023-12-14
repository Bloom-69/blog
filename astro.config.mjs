import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/static";
import { VitePWA } from 'vite-plugin-pwa';

// https://astro.build/config
export default defineConfig({
  site: 'https://bloom-blog.vercel.app',
  integrations: [mdx(), sitemap(), react()],
  output: "static",
  adapter: vercel(),
  vite: {
    plugins: [
      VitePWA({
        manifest: {
          name: 'Bloom Blog',
          short_name: 'Bloom',
          injectRegister: 'auto',
          icons: [
            {
              src: '/pwa/icons/192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/pwa/icons/512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      })
    ]
  }
});
