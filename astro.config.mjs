import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  output: "server",
  adapter: vercel(),
  env: {
    schema: {
      SECRET_PLUNK_API_KEY: envField.string({
        context: "server",
        access: "secret",
      }),
      SECRET_BUSINESS_EMAIL: envField.string({
        context: "server",
        access: "secret",
      }),
    },
  },
});
