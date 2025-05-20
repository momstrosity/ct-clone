/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/views/**/*.pug", "./src/assets/js/*.js"],
    darkMode: 'class', // Enable dark mode with class-based approach
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
                // Existing twilight color palette
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
                // New dark mode color palette
                dark: {
                    // Background colors
                    background: {
                        DEFAULT: "#121212", // Primary dark background
                        secondary: "#1E1E1E", // Slightly lighter for secondary areas
                        tertiary: "#2C2C2C", // Even lighter for tertiary elements
                    },
                    // Text colors
                    text: {
                        primary: "#E0E0E0",   // Primary text color
                        secondary: "#A0A0A0", // Secondary text color
                        muted: "#6E6E6E",     // Muted text color
                    },
                    // Interactive colors
                    primary: {
                        DEFAULT: "#3EA1CC", // Same as twilight primary
                        hover: "#2E86AB",   // Derived from twilight 700
                        active: "#226581",  // Derived from twilight 800
                    },
                    // Accent and semantic colors
                    accent: {
                        success: "#4CAF50",
                        warning: "#FFC107",
                        error: "#F44336",
                        info: "#2196F3",
                    },
                    // Border and divider colors
                    border: {
                        DEFAULT: "#3A3A3A",
                        subtle: "#2A2A2A",
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
    safelist: ["flash-success", "flash-error", "flash-info", "dark"],
};