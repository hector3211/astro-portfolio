import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://hectorcodes.dev",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
  ],
  output: "server",
  adapter: vercel(),
  env: {
    schema: {
      SECRET_PLUNK_API_KEY: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
      SECRET_BUSINESS_EMAIL: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
    },
  },
});
