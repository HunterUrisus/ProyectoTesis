// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

/* const repo = 'ProyectoTesis'; */

export default defineConfig({
  base: `/`,
  vite: {
    plugins: [tailwindcss()]
  }
});
