import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";

const { VITE_APP_BASE_URL } = import.meta.env;

// https://astro.build/config
export default defineConfig({
  site: VITE_APP_BASE_URL,
  integrations: [
    mdx(),
    sitemap(),
    partytown(),
    react({ include: ["**/react/*"] }),
    solidJs({ include: ["**/solid/*"] }),
  ],
});
