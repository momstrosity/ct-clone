/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/views/**/*.pug", "./src/assets/js/*.js"],
    darkMode: 'class', // Enable class-based dark mode
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
                // Light Mode Color Palette (current twilight palette)
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
                // Dark Mode Color Palette (semantic tokens)
                dark: {
                    background: {
                        primary: '#121212',     // Deep, neutral dark background
                        secondary: '#1E1E1E',   // Slightly lighter for secondary areas
                        tertiary: '#2C2C2C',    // Even lighter for tertiary elements
                    },
                    text: {
                        primary: '#E0E0E0',    // Light text for primary content
                        secondary: '#A0A0A0',  // Muted text for secondary content
                        tertiary: '#6E6E6E',   // Subtle text for less important content
                    },
                    accent: {
                        primary: '#4A90E2',    // Bright blue for primary accents
                        secondary: '#5D6D7E',  // Muted blue-gray for secondary accents
                        highlight: '#3498DB',  // Bright highlight color
                    },
                    border: {
                        primary: '#333333',    // Dark border for primary separations
                        secondary: '#444444',  // Lighter border for subtle separations
                    },
                    interactive: {
                        default: '#4A90E2',    // Default interactive color
                        hover: '#5DADE2',      // Hover state interactive color
                        active: '#2980B9',     // Active state interactive color
                    },
                },
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
    safelist: ["flash-success", "flash-error", "flash-info"],
};