import { Group } from "./types"
export const groups: Group[] = [
    {
        title: "Favs",
        fontAwesome: ["far", "fa-star"],
        links: [
            { href: "https://www.facebook.com/", label: "Facebook" },
            { href: "https://www.instagram.com/", label: "Instagram" },
            { href: "https://mail.google.com/", label: "GMail" },
            { href: "https://github.com/", label: "GitHub" },
            { href: "https://www.reddit.com/", label: "reddit" },
        ],
    },
    {
        title: "Work",
        fontAwesome: ["fas", "fa-briefcase"],
        links: [
            { href: "http://lego/", label: "LEGO" },
            { href: "https://developer.omnis.net/", label: "Omnis Dev" },
            { href: "https://developer.omnis.net/onlinedocs/index.jsp", label: "Omnis Doc" },
            { href: "http://webmail.888sp.it/login.php", label: "WebMail" },
        ],
    },
    // {
    //     title: "Giacomo",
    //     fontAwesome: ["far", "fa-folder"],
    //     links: [
    //         { href: "https://www.facebook.com/", label: "Facebook" },
    //         { href: "https://www.instagram.com/", label: "Instagram" },
    //         { href: "https://mail.google.com/", label: "GMail" },
    //         { href: "https://github.com/", label: "GitHub" },
    //         { href: "https://www.reddit.com/", label: "reddit" },
    //     ],
    // },
    {
        title: "Repos",
        fontAwesome: ["fas", "fa-code-branch"],
        links: [
            { href: "https://github.com/opensourceBIM/BIMserver", label: "BIMServer" },
            { href: "https://github.com/opensourceBIM/BIMserver-JavaScript-API", label: "BIMServer-JavaScript-API" },
            { href: "https://github.com/opensourceBIM/bimvie.ws", label: "bimvie.ws" },
            { href: "https://github.com/GiacomoManzoli/8Bim", label: "8BIM" },
        ],
    },
]
