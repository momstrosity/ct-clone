/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/views/**/*.pug", "./src/assets/js/*.js"],
    darkMode: 'class', // Use class-based dark mode
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
            // Custom colors with dark mode variants
            colors: {
                // Twilight color palette extended for dark mode
                twilight: {
                    50: { light: "#f1f8fa", dark: "#121f25" },
                    100: { light: "#E8F3F7", dark: "#1a2b35" },
                    200: { light: "#bfe0ee", dark: "#2b3f4c" },
                    300: { light: "#9ed0e5", dark: "#3c5462" },
                    400: { light: "#7ec0dd", dark: "#4d6979" },
                    500: { light: "#5eb1d4", dark: "#5e8091" },
                    600: { light: "#3ea1cc", dark: "#6f97a8" },
                    700: { light: "#2e86ab", dark: "#80adc0" },
                    800: { light: "#226581", dark: "#91c3d6" },
                    900: { light: "#153f51", dark: "#a2d9ec" },
                },
                // Semantic colors for various use cases
                background: {
                    light: "#ffffff",
                    dark: "#0a1317"
                },
                text: {
                    light: "#153f51",
                    dark: "#e6f1f7"
                },
                primary: {
                    light: "#2e86ab",
                    dark: "#4db8e0"
                },
                secondary: {
                    light: "#5eb1d4",
                    dark: "#3c94b8"
                },
                accent: {
                    light: "#3ea1cc",
                    dark: "#5eb1d4"
                },
                // Enhanced contrast for buttons and interactive elements
                button: {
                    light: {
                        background: "#2e86ab",
                        text: "#ffffff"
                    },
                    dark: {
                        background: "#4db8e0",
                        text: "#0a1317"
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
            // Additional dark mode specific configurations
            boxShadow: {
                'dark-sm': '0 1px 2px 0 rgba(255, 255, 255, 0.05)',
                'dark-md': '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)',
            }
        },
    },
    plugins: [require("@tailwindcss/forms")],
    safelist: ["flash-success", "flash-error", "flash-info", "dark"],
    // Variant configuration to support dark mode across utilities
    variants: {
        extend: {
            backgroundColor: ['dark'],
            textColor: ['dark'],
            borderColor: ['dark'],
        }
    }
};