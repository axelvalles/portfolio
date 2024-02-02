import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import webmanifest from "astro-webmanifest";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://www.axelvalles.dev/",
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt(),
    webmanifest({
      name: "Axel Valles Dev",
      icon: 'public/favicon.svg', // source for favicon & icons
      short_name: "Axel Valles Dev",
      description:
        "Ingeniero en Informática experto en desarrollo Frontend de aplicaciones web modernas. Especializado en JavaScript y frameworks como Vue, React, Svelte, y Angular. Experiencia en SSR con Next y Nuxt, así como en aplicaciones mobiles con React Native y Flutter. Amplio conocimiento en el desarrollo Backend con Node.js y los frameworks Express y NestJS. ¡Descubre mi portafolio para explorar mis proyectos y habilidades!",
      start_url: "/",
      theme_color: "#6366f1",
      background_color: "#1e1b4b",
      display: "standalone",
    }),
  ],
});
