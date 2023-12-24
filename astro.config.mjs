import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx(),
    sitemap(),
    partytown(),
    react({ include: ["**/react/*"] }),
    solidJs({ include: ["**/solid/*"] }),
  ],
});
