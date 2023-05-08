import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "mdi:speedometer-slow ",
      text: "Beginner",
      prefix: "beginner/",
      link: "beginner/",
      children: "structure",
    },
    {
      icon: "mdi:speedometer-slow ",
      text: "Intermediate",
      prefix: "intermediate/",
      link: "intermediate/",
      children: "structure",
    },
    {
      icon: "mdi:speedometer-slow ",
      text: "Advanced",
      prefix: "advanced/",
      link: "advanced/",
      children: "structure",
    },
  ],
});
