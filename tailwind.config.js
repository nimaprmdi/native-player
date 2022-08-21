/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontSize: {
                "text-huge": "3rem",
                "text-big": "2.5rem",
                h1: "2rem",
                h2: "1.75rem",
                h3: "1.5rem",
                h4: "1.188rem",
                h5: "1rem",
                h6: "0.875rem",
                "text-tiny": "0.813rem",
            },
            colors: {
                primary: "#45B39D",
                accent: "#EA57A3",
                dark: "#222222",
            },
            spacing: {
                0.252: "0.063rem" /** 1PX */,
            },
        },
    },
    plugins: [],
};
