import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "Beginner", icon: "mdi:speedometer-slow", link: "/beginner/" },
  { text: "Intermediate", icon: "mdi:speedometer-medium", link: "/intermediate/" },
  { text: "Advanced", icon: "mdi:speedometer", link: "/advanced/" },
  {
    text: "Telegram",
    icon: "logos:telegram",
    link: "https://theme-hope.vuejs.press/",
  },
]);
