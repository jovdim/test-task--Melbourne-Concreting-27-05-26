// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// NOTE: `site` is the canonical production URL. It drives the sitemap,
// canonical tags and absolute Open Graph URLs. Swap to the real domain
// when the client confirms it (see HANDOFF.md "Before you go live").
export default defineConfig({
  site: 'https://www.melbourneconcreting.com.au',
  integrations: [
    sitemap({
      lastmod: new Date(),
      changefreq: 'monthly',
      priority: 0.7,
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
