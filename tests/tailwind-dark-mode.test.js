import { describe, it, expect } from 'vitest';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config.cjs';

const fullConfig = resolveConfig(tailwindConfig);

describe('Tailwind Dark Mode Color Palette', () => {
    it('should have dark mode color tokens', () => {
        const darkColors = fullConfig.theme.colors.dark;
        
        // Check background colors
        expect(darkColors.background.DEFAULT).toBe('#121212');
        expect(darkColors.background.secondary).toBe('#1E1E1E');
        expect(darkColors.background.tertiary).toBe('#2C2C2C');

        // Check text colors
        expect(darkColors.text.primary).toBe('#E0E0E0');
        expect(darkColors.text.secondary).toBe('#A0A0A0');
        expect(darkColors.text.muted).toBe('#6E6E6E');

        // Check accent colors
        expect(darkColors.accent.primary).toBe('#3EA1CC');
        expect(darkColors.accent.secondary).toBe('#2E86AB');
        expect(darkColors.accent.highlight).toBe('#50C878');
    });

    it('should have dark mode configuration enabled', () => {
        expect(fullConfig.darkMode).toBe('class');
    });

    it('should maintain existing twilight color palette', () => {
        const twilightColors = fullConfig.theme.colors.twilight;
        expect(twilightColors[900]).toBe('#153f51');
    });
});