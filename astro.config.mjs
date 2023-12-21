import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://main--endearing-tarsier-9663a7.netlify.app/",
  integrations: [preact()]
});