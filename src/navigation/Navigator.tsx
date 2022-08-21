interface SubCategory {
    name: string;
    url: string;
    icon: string;
}

export default interface Navigate {
    name: string;
    url: string;
    icon: string;
    children?: SubCategory[];
}

export const navigation: Navigate[] = [
    {
        name: "home",
        url: "https://google.com/home",
        icon: "ant-design:home-outlined",
        children: [
            { name: "Sub Home1", url: "https://google.com/xx", icon: "akar-icons:phone" },
            { name: "Sub Home2", url: "https://google.com/zz", icon: "akar-icons:phone" },
        ],
    },
    {
        name: "about",
        url: "https://google.com/about/pp",
        icon: "carbon:information",
        children: [
            { name: "Sub Home3", url: "https://google.com/ss", icon: "akar-icons:phone" },
            { name: "Sub Home4", url: "https://google.com/kk", icon: "akar-icons:phone" },
        ],
    },
    { name: "contact", url: "https://google.com/about", icon: "akar-icons:phone" },
];
