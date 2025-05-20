import { describe, it, expect } from 'vitest';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config.cjs';

const fullConfig = resolveConfig(tailwindConfig);

describe('Tailwind Dark Mode Color Palette', () => {
    it('should have a comprehensive dark mode color palette', () => {
        const darkColors = fullConfig.theme.colors.dark;

        // Test background colors
        expect(darkColors.background).toBeDefined();
        expect(darkColors.background.primary).toBe('#121212');
        expect(darkColors.background.secondary).toBe('#1E1E1E');
        expect(darkColors.background.tertiary).toBe('#2C2C2C');

        // Test text colors
        expect(darkColors.text).toBeDefined();
        expect(darkColors.text.primary).toBe('#E0E0E0');
        expect(darkColors.text.secondary).toBe('#A0A0A0');
        expect(darkColors.text.inverse).toBe('#FFFFFF');

        // Test accent colors
        expect(darkColors.accent).toBeDefined();
        expect(darkColors.accent[500]).toBe('#2E86AB');
        expect(darkColors.accent[900]).toBe('#0E3B4D');

        // Test semantic colors
        expect(darkColors.semantic.success).toBeDefined();
        expect(darkColors.semantic.error).toBeDefined();
        expect(darkColors.semantic.warning).toBeDefined();
        expect(darkColors.semantic.info).toBeDefined();
    });

    it('should maintain light mode twilight palette', () => {
        const twilightColors = fullConfig.theme.colors.twilight;
        expect(twilightColors[50]).toBe('#f1f8fa');
        expect(twilightColors[900]).toBe('#153f51');
    });
});