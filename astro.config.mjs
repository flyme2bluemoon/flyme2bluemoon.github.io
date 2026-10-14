// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// Extra dev-server hostnames live in the untracked .env (ALLOWED_HOSTS=a.com,b.com)
const { ALLOWED_HOSTS } = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');
const allowedHosts = ALLOWED_HOSTS?.split(',').map((host) => host.trim()).filter(Boolean);

// https://astro.build/config
export default defineConfig({
  site: 'https://flyme2bluemoon.github.io',
  integrations: [react()],
  server: {
    allowedHosts
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
