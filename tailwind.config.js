/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                beige: {
                  100: "#f5f5dc",
                  200: "#f0e68c",
                  300: "#d2b48c",
                  400: "#c2b280",
                  500: "#a89f68",
                  600: "#8c7853",
                  700: "#7e6a4a",
                },
              },        
        },
    },
    plugins: [],
};


