// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://expecto-codum.vercel.app',
  integrations: [sitemap()],
});
