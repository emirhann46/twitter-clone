/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1DA1F2",
                dark: "#1a91da",
                light: "#a5d0f5",
                lighter: "#D4E5F4",
            },
        },
    },
    plugins: [],
};