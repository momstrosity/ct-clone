/** @type {import('tailwindcss').Config} */
module.exports = {
    // Enable dark mode using class strategy
    darkMode: 'class',
    content: ["./src/views/**/*.pug", "./src/assets/js/*.js"],
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
            // Existing font configurations
            fontFamily: {
                logo: ["Orienta", "serif"],
                main: ["Poppins", "sans-serif"],
                awesome: ['"Font Awesome 6 Free"'],
            },
            
            // Expanded color palette with dark mode variants
            colors: {
                // Existing twilight palette
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

                // Dark mode color tokens
                'dark': {
                    // Background colors
                    background: {
                        DEFAULT: '#121212', // Deep dark background
                        secondary: '#1E1E1E', // Slightly lighter for secondary areas
                        tertiary: '#2C2C2C', // Even lighter for tertiary elements
                    },

                    // Text colors with good contrast
                    text: {
                        primary: '#E0E0E0',   // Light text for readability
                        secondary: '#A0A0A0', // Subdued text
                        muted: '#6E6E6E',     // Very subtle text
                    },

                    // Accent colors
                    accent: {
                        primary: '#3EA1CC',   // Derived from twilight palette
                        secondary: '#2E86AB', // Complementary accent
                        highlight: '#50C878', // Bright highlight color
                    },

                    // Interactive states
                    interactive: {
                        hover: '#3EA1CC',
                        active: '#2E86AB',
                        focus: '#50C878',
                    },

                    // Border and divider colors
                    border: {
                        DEFAULT: '#3A3A3A',
                        subtle: '#2A2A2A',
                    },
                },
            },

            // Text underline and decoration settings
            textUnderlineOffset: {
                6: "6px",
            },
            textDecorationThickness: {
                3: "3px",
            },

            // Maximum width configurations
            maxWidth: {
                "1/3": "33%",
                80: "20rem",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
    safelist: ["flash-success", "flash-error", "flash-info"],
};