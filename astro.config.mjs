// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages URL for now — swap for a custom domain (+ add a public/CNAME
  // file) once one is bought. Canonical URLs, the sitemap, and Open Graph tags
  // all depend on this.
  site: 'https://mathieubaffoigne.github.io',
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
