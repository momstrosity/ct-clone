/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/views/**/*.pug", "./src/assets/js/*.js"],
    darkMode: 'class', // Use class-based dark mode for maximum compatibility
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
                // Existing Twilight Color Palette
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
                
                // Dark Mode Color Palette - Professional & Accessible
                dark: {
                    // Background colors
                    background: {
                        DEFAULT: '#121212', // Deep, soft black
                        secondary: '#1E1E1E', // Slightly lighter for secondary areas
                        tertiary: '#2C2C2C', // Lighter for tertiary elements
                    },
                    
                    // Text colors
                    text: {
                        primary: '#E0E0E0',   // Light gray for primary text
                        secondary: '#B0B0B0', // Muted gray for secondary text
                        muted: '#808080',     // Very muted for less important text
                    },
                    
                    // Accent colors
                    accent: {
                        DEFAULT: '#3EA1CC', // Using existing twilight accent
                        hover: '#2E86AB',   // Existing twilight hover color
                        light: '#5EB1D4',   // Existing lighter twilight variant
                    },
                    
                    // Interactive colors
                    interactive: {
                        DEFAULT: '#4CAF50', // Green for positive actions
                        hover: '#45A049',   // Slightly darker green
                        destructive: '#F44336', // Red for destructive actions
                    },
                    
                    // Border colors
                    border: {
                        DEFAULT: '#404040', // Dark gray border
                        subtle: '#2C2C2C',  // More subtle border
                    },
                },
            },
            
            // Enhance text decoration and underline for dark mode
            textUnderlineOffset: {
                6: "6px",
            },
            textDecorationThickness: {
                3: "3px",
            },
            
            // Maximum width extensions
            maxWidth: {
                "1/3": "33%",
                80: "20rem",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
    safelist: ["flash-success", "flash-error", "flash-info", "dark"],
};