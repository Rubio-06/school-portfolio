// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@layouts": path.resolve(__dirname, "./src/components/layouts"),
        "@sections": path.resolve(__dirname, "./src/components/sections"),
        "@shared": path.resolve(__dirname, "./src/components/shared"),
        "@ui": path.resolve(__dirname, "./src/components/ui"),
        "@core": path.resolve(__dirname, "./src/core"),
        "@config": path.resolve(__dirname, "./src/core/config"),
        "@/types": path.resolve(__dirname, "./src/core/types"),
        "@utils": path.resolve(__dirname, "./src/utils"),
        "@styles": path.resolve(__dirname, "./src/styles"),
        "@scripts": path.resolve(__dirname, "./src/scripts"),
        "@animations": path.resolve(__dirname, "./src/scripts/animations"),
        "@schemas": path.resolve(__dirname, "./src/core/schemas"),
      },
    },
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/passthrough",
    },
  },
});
