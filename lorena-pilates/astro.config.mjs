import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// PENDIENTE: confirmar el slug definitivo del proyecto en Vercel tras el primer deploy.
const site = "https://lorena-pilates.vercel.app";

export default defineConfig({
  site,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});