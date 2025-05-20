const tailwindConfig = require('../tailwind.config.cjs');

describe('Dark Mode Color Palette', () => {
    it('should have dark mode configuration', () => {
        expect(tailwindConfig.darkMode).toBe('class');
        expect(tailwindConfig.theme.extend.colors.dark).toBeDefined();
    });

    it('should have background colors', () => {
        const darkBackground = tailwindConfig.theme.extend.colors.dark.background;
        expect(darkBackground.primary).toBe('#121212');
        expect(darkBackground.secondary).toBe('#1E1E1E');
    });
});