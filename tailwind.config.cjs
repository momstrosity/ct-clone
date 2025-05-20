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
                // Existing Twilight palette preserved for light mode
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
                // Dark mode semantic color palette
                dark: {
                    // Background colors
                    background: {
                        DEFAULT: "#121212", // Deep dark background
                        secondary: "#1E1E1E", // Slightly lighter for secondary areas
                        tertiary: "#2C2C2C", // Even lighter for tertiary areas
                    },
                    // Text colors with high contrast
                    text: {
                        primary: "#E0E0E0", // Light gray for primary text
                        secondary: "#A0A0A0", // Muted gray for secondary text
                        accent: "#FFFFFF", // Pure white for high emphasis
                    },
                    // Interactive colors
                    primary: {
                        DEFAULT: "#3ea1cc", // Adapted from light mode's twilight 600
                        hover: "#2e86ab",   // Adapted from light mode's twilight 700
                    },
                    // Accent colors for alerts and interactions
                    accent: {
                        success: "#4CAF50", // Green for success states
                        error: "#F44336",   // Red for error states
                        warning: "#FFC107", // Amber for warnings
                        info: "#2196F3",    // Blue for informational states
                    },
                    // Border colors
                    border: {
                        DEFAULT: "#333333", // Dark border color
                        subtle: "#444444",  // Subtle border for less emphasis
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
            // Add extra dark mode specific transitions if needed
            transition: {
                'dark-mode': 'background-color 0.3s ease, color 0.3s ease',
            }
        },
    },
    plugins: [require("@tailwindcss/forms")],
    safelist: [
        "flash-success", 
        "flash-error", 
        "flash-info",
        // Add dark mode specific classes for safelist
        "dark:bg-dark-background", 
        "dark:text-dark-text-primary"
    ],
};