// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],

  vite: {
    plugins: [tailwindcss()]
  },

  output: 'server', // o 'hybrid'
  adapter: cloudflare(),
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp', // Necesario para la optimización
    },
  },
});