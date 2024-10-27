// @ts-check
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  experimental: {
    env: {
      schema: {
        PUBLIC_ANYBODY: envField.string({
          context: "client",
          access: "public",
          startsWith: "re_",
          min: 20,
        }),
        SECRET_PASSWORD: envField.number({
          context: "server",
          access: "secret",
          gt: 4,
        }),
      },
    },
  },
});
