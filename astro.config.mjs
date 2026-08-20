// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Deploy-Ziel: GitHub Pages unter https://littlepumpkin87.github.io/astro-lernprojekt/
  // `base` muss von Anfang an stehen — sonst zeigen nach dem Deploy alle internen Links
  // und Asset-Pfade ins Leere, und lokal auf / faellt das nicht auf.
  site: 'https://littlepumpkin87.github.io',
  base: '/astro-lernprojekt',

  // Selbst gehostete Schriften aus src/fonts/. Der letzte Eintrag in `fallbacks` muss
  // generisch sein — daraus erzeugt Astro die metrisch angepasste Ersatzschrift.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Berkshire Swash',
      cssVariable: '--font-berkshire-swash',
      fallbacks: ['Georgia', 'serif'],
      options: {
        variants: [
          {
            src: ['./src/fonts/berkshireswash-regular.woff'],
            weight: 400,
            style: 'normal'
          }
        ]
      }
    },
    {
      provider: fontProviders.local(),
      name: 'Signika Negative',
      cssVariable: '--font-signika-negative',
      options: {
        variants: [
          {
            src: ['./src/fonts/SignikaNegative-Regular.woff'],
            weight: 400,
            style: 'normal'
          }
        ]
      }
    }
  ],

  integrations: [mdx(), sitemap()]
});