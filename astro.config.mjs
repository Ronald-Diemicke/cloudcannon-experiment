import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import bookshop from '@bookshop/astro-bookshop';

export default defineConfig({
    integrations: [sitemap(),bookshop()],
});