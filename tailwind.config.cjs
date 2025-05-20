/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/views/**/*.pug", "./src/assets/js/*.js"],
    darkMode: 'class', // Enable dark mode via class
    theme: {
        screens: {
            xs: "640px",
            sm: "780px",
            md: "926px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            fontFamily: {
                logo: ["Orienta", "serif"],
                main: ["Poppins", "sans-serif"],
                awesome: ['"Font Awesome 6 Free"'],
            },
            colors: {
                // Light Mode (Existing Colors)
                twilight: {
                    50: "#f1f8fa",
                    100: "#E8F3F7",
                    200: "#bfe0ee",
                    300: "#9ed0e5",
                    400: "#7ec0dd",
                    500: "#5eb1d4",
                    600: "#3ea1cc",
                    700: "#2e86ab",
                    800: "#226581",
                    900: "#153f51",
                },
                
                // Dark Mode Color Palette
                'dark-twilight': {
                    50: "#0a1418", // Darkest background
                    100: "#111f26", // Dark background
                    200: "#1c2d3a", // Slightly lighter background
                    300: "#2a3f4d", // Background elements
                    400: "#3c5565", // Surface/card backgrounds
                    500: "#4e6b7f", // Muted text and borders
                    600: "#608298", // Secondary text
                    700: "#7299b3", // Active/hover states
                    800: "#8bb1cc", // Highlighted elements
                    900: "#a6c8e6", // Brightest text/accent
                },
                
                // Additional Dark Mode Semantic Colors
                'dark-text': {
                    DEFAULT: '#e6f1fa',    // Primary text
                    secondary: '#8bb1cc',  // Secondary text
                    muted: '#4e6b7f',      // Muted text
                },
                'dark-bg': {
                    DEFAULT: '#0a1418',     // Primary background
                    secondary: '#111f26',   // Secondary background
                    surface: '#1c2d3a',     // Surface/card background
                },
                'dark-accent': {
                    DEFAULT: '#8bb1cc',     // Primary accent
                    hover: '#a6c8e6',       // Hover state
                    active: '#7299b3',      // Active state
                }
            },
            textUnderlineOffset: {
                6: "6px",
            },
            textDecorationThickness: {
                3: "3px",
            },
            maxWidth: {
                "1/3": "33%",
                80: "20rem",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
    safelist: ["flash-success", "flash-error", "flash-info", "dark"],
};