import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  experimental: { assets: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "src/vars.scss";',
        },
      },
    },

  }
});
