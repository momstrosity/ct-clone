/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/views/**/*.pug", "./src/assets/js/*.js"],
    darkMode: 'class', // Enable dark mode using 'dark' class
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
                // Light mode (base) colors, keeping existing twilight palette
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
                        primary: "#121212",   // Deep charcoal base
                        secondary: "#1E1E1E", // Slightly lighter for sections
                        tertiary: "#2C2C2C",  // Accent background
                    },
                    // Text colors with good contrast
                    text: {
                        primary: "#E0E0E0",   // Light gray for main text
                        secondary: "#A0A0A0", // Subdued text
                        muted: "#6C6C6C",     // Minimally used text
                    },
                    // Interactive colors
                    accent: {
                        primary: "#4A90E2",   // Bright blue for primary actions
                        secondary: "#6B47C3", // Purple for secondary actions
                        success: "#2ECC71",   // Green for success states
                        warning: "#F39C12",   // Orange for warnings
                        danger: "#E74C3C",    // Red for error/destructive actions
                    },
                    // Border and divider colors
                    border: {
                        primary: "#333333",   // Dark border
                        secondary: "#424242", // Lighter border
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
            // Add custom dark mode transitions
            transitionProperty: {
                'theme-colors': 'background-color, color, border-color, text-decoration-color, fill, stroke'
            },
            transitionDuration: {
                'theme-switch': '300ms'
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
    safelist: [
        "flash-success", 
        "flash-error", 
        "flash-info", 
        "dark:bg-dark-background-primary", 
        "dark:text-dark-text-primary"
    ],
};