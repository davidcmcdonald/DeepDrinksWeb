import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel({
    analytics: true,
  }),
  integrations: [tailwind(), react()],
});
