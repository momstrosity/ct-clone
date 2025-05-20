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
                // Extend existing twilight palette with dark mode variations
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
                // Dark mode semantic color tokens
                dark: {
                    // Background Colors
                    background: {
                        primary: '#121212', // Deep dark background
                        secondary: '#1E1E1E', // Slightly lighter dark background
                        tertiary: '#2C2C2C', // Even lighter dark background
                    },
                    // Text Colors
                    text: {
                        primary: '#E0E0E0', // Light text for dark backgrounds
                        secondary: '#A0A0A0', // Subdued text
                        muted: '#727272', // Very subdued text
                    },
                    // Accent Colors
                    accent: {
                        primary: '#3EA1CC', // Bright accent from twilight palette
                        secondary: '#2E86AB', // Complementary accent
                        highlight: '#5EB1D4', // Soft highlight
                    },
                    // State Colors
                    state: {
                        success: '#4CAF50', // Green for success
                        error: '#F44336', // Red for errors
                        warning: '#FF9800', // Orange for warnings
                        info: '#2196F3', // Blue for information
                    },
                    // Border and Divider Colors
                    border: {
                        primary: '#3C3C3C', // Dark border
                        secondary: '#2A2A2A', // Subtle border
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
            // Dark mode specific transitions
            transitionProperty: {
                'colors-and-bg': 'color, background-color, border-color, text-decoration-color, fill, stroke',
            },
            transitionDuration: {
                '250': '250ms',
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms")
    ],
    safelist: [
        "flash-success", 
        "flash-error", 
        "flash-info",
        // Additional dark mode safelist items
        "dark:bg-dark-background-primary",
        "dark:text-dark-text-primary",
        "dark:border-dark-border-primary"
    ],
};