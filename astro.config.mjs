import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';
import bookshop from '@bookshop/astro-bookshop';

export default defineConfig({
    integrations: [sitemap(),react(),bookshop()],
});