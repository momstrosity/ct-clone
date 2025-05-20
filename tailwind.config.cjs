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
                // Existing Twilight Color Palette (Light Mode)
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
                
                // Dark Mode Color Palette (Based on Twilight Theme)
                dark: {
                    // Background Colors
                    background: {
                        DEFAULT: "#121620", // Deep navy blue for main background
                        secondary: "#1E2332", // Slightly lighter for secondary areas
                        tertiary: "#2A3142", // Even lighter for tertiary sections
                    },
                    
                    // Text Colors
                    text: {
                        primary: "#E6E7EB", // Light gray for primary text
                        secondary: "#A0A5B1", // Muted gray for secondary text
                        accent: "#CBD5E1", // Lighter text for accents
                    },
                    
                    // Accent Colors
                    accent: {
                        primary: "#3EA1CC", // Preserved from light mode twilight
                        secondary: "#2E86AB", // Slightly muted version
                        tertiary: "#226581", // Dark accent
                    },
                    
                    // Interaction Colors
                    interactive: {
                        hover: "#2E86AB",
                        active: "#3EA1CC",
                        border: "#3A4556", // Soft border color
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
            // Add dark mode specific variations if needed
            boxShadow: {
                'dark': '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
    safelist: ["flash-success", "flash-error", "flash-info", "dark"],
};