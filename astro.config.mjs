import { defineConfig, passthroughImageService } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://rodrigo-herrera.info',
  image: {
    service: passthroughImageService(),
  },
  integrations: [react(), tailwind({
    applyBaseStyles: false,
  }),]
});