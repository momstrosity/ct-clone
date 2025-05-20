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
                // Existing Twilight Colors
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
                dark: {
                    // Background Colors
                    bg: {
                        primary: '#121212', // Deep dark background
                        secondary: '#1E1E1E', // Slightly lighter background
                        tertiary: '#2C2C2C', // Even lighter background
                    },
                    
                    // Text Colors with High Contrast
                    text: {
                        primary: '#E0E0E0', // Main text color
                        secondary: '#A0A0A0', // Secondary text
                        muted: '#6E6E6E', // Muted or less important text
                    },
                    
                    // Interactive Colors
                    interactive: {
                        default: '#3EA1CC', // Primary interaction color
                        hover: '#2E86AB', // Hover state
                        active: '#226581', // Active/pressed state
                    },
                    
                    // Semantic Colors
                    semantic: {
                        success: '#4CAF50', // Success/Positive
                        warning: '#FFC107', // Warning/Caution
                        error: '#F44336', // Error/Negative
                        info: '#2196F3', // Informational
                    },
                    
                    // Border and Separator Colors
                    border: {
                        default: '#3A3A3A', // Default border color
                        subtle: '#2A2A2A', // Subtle border
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
            
            // Dark Mode Specific Transitions
            transitionProperty: {
                'dark-mode': 'background-color, color, border-color'
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
        // Additional dark mode utility classes
        "dark:bg-dark-bg-primary",
        "dark:text-dark-text-primary",
        "dark:border-dark-border-default"
    ],
};