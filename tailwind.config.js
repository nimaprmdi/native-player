/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontSize: {
                "text-huge": "3rem", // 48px
                "text-big": "2.5rem", // 40px
                h1: "2rem", // 32px
                h2: "1.75rem", // 28px
                h3: "1.5rem", // 24px
                h4: "1.188rem", // 19px
                h5: "1rem", // 16px
                h6: "0.875rem", // 14px
                "text-tiny": "0.813rem", // 13px
            },
            colors: {
                primary: "#45B39D",
                accent: "#EA57A3",
                dark: "#222222",
            },
            spacing: {
                0.252: "0.063rem" /** 1px */,
                147.5: "36.875rem" /** 590px */,
            },
            screens: {
                desktop: "1280px",
            },
        },
    },
    plugins: [],
};
