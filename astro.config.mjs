// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Deploy-Ziel: GitHub Pages unter https://littlepumpkin87.github.io/astro-lernprojekt/
  // `base` muss von Anfang an stehen — sonst zeigen nach dem Deploy alle internen Links
  // und Asset-Pfade ins Leere, und lokal auf / faellt das nicht auf.
  site: 'https://littlepumpkin87.github.io',
  base: '/astro-lernprojekt',

  integrations: [mdx(), sitemap()]
});