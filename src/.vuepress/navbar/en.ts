import {navbar} from "vuepress-theme-hope";

export const enNavbar = navbar([
    "/",
    {
        text: "Beginner",
        icon: "mdi:speedometer-slow",
        prefix: "beginner/",
        children: [
            {text: "01. Kirish", icon: "material-symbols:document-scanner-outline", link: "01-kirish/"},
        ],
    },
    {text: "Intermediate", icon: "mdi:speedometer-medium", link: "/intermediate/"},
    {text: "Advanced", icon: "mdi:speedometer", link: "/advanced/"},
    {
        text: "Telegram",
        icon: "logos:telegram",
        link: "https://t.me/webdastur",
    },
]);
