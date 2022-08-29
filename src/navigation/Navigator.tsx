interface SubCategory {
    name: string;
    route: string;
    icon: string;
}

export default interface Navigate {
    name: string;
    route: string;
    icon: string;
    children?: SubCategory[];
}

export const navigation: Navigate[] = [
    {
        name: "home",
        route: "/",
        icon: "ant-design:home-outlined",
        // children: [
        //     { name: "Sub Home1", route: "https://google.com/xx", icon: "akar-icons:phone" },
        //     { name: "Sub Home2", route: "https://google.com/zz", icon: "akar-icons:phone" },
        // ],
    },
    { name: "radio", route: "/radio", icon: "akar-icons:phone" },
    { name: "browse", route: "/browse", icon: "bx:user-pin" },
    {
        name: "about",
        route: "/about",
        icon: "carbon:information",
    },
    { name: "contact", route: "/contact", icon: "akar-icons:phone" },
];
