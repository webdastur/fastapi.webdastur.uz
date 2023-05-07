import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      // title: "Docs Demo",
      description: "FastAPI frameworkini real proyektlar orqali o'rganing",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
