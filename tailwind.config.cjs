/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/views/**/*.pug", "./src/assets/js/*.js"],
    darkMode: 'class',  // Enable class-based dark mode
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
                // Maintain existing light mode twilight palette
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
                // Dark mode color palette
                dark: {
                    background: {
                        primary: "#121212",    // Deep dark background
                        secondary: "#1E1E1E",  // Slightly lighter background
                        tertiary: "#2C2C2C",   // Card/section background
                    },
                    text: {
                        primary: "#E0E0E0",    // Primary text color
                        secondary: "#A0A0A0",  // Secondary/muted text
                        inverse: "#FFFFFF",    // Text on dark backgrounds
                    },
                    accent: {
                        50: "#E6F3FF",     // Lightest accent
                        100: "#CCE6FF",    // Light accent
                        500: "#2E86AB",    // Primary accent (from light mode)
                        700: "#1E5F7D",    // Dark accent
                        900: "#0E3B4D",    // Darkest accent
                    },
                    border: {
                        default: "#3A3A3A",   // Default border color
                        hover: "#4A4A4A",     // Border on hover
                        focus: "#5E5E5E",     // Border on focus
                    },
                    interactive: {
                        default: "#2E86AB",   // Default interactive color
                        hover: "#3EA1CC",     // Hover state
                        active: "#1E5F7D",    // Active/pressed state
                    },
                    semantic: {
                        success: {
                            bg: "#2E7D32",    // Success background
                            text: "#81C784",  // Success text
                        },
                        error: {
                            bg: "#C62828",    // Error background
                            text: "#EF5350", // Error text
                        },
                        warning: {
                            bg: "#F9A825",    // Warning background
                            text: "#FDD835", // Warning text
                        },
                        info: {
                            bg: "#1565C0",    // Info background
                            text: "#64B5F6",  // Info text
                        }
                    }
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
    safelist: [
        "flash-success", 
        "flash-error", 
        "flash-info",
        // Add dark mode safelist for safety
        "dark:bg-dark-background-primary",
        "dark:text-dark-text-primary"
    ],
};