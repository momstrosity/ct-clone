import { describe, it, expect } from 'vitest';

describe('Tailwind Dark Mode Configuration', () => {
    const tailwindConfig = require('../tailwind.config.cjs');

    it('should have dark mode enabled', () => {
        expect(tailwindConfig.darkMode).toBe('class');
    });

    it('should have dark mode color palette', () => {
        const darkColors = tailwindConfig.theme.extend.colors.dark;
        
        // Check basic structure
        expect(darkColors).toBeDefined();
        expect(darkColors.background).toBeDefined();
        expect(darkColors.text).toBeDefined();
        expect(darkColors.accent).toBeDefined();
        expect(darkColors.interactive).toBeDefined();
        expect(darkColors.border).toBeDefined();
    });

    it('should maintain twilight color palette', () => {
        const twilightColors = tailwindConfig.theme.extend.colors.twilight;
        
        expect(twilightColors).toBeDefined();
        expect(twilightColors[50]).toBe('#f1f8fa');
        expect(twilightColors[900]).toBe('#153f51');
    });

    it('should include safelist with dark class', () => {
        expect(tailwindConfig.safelist).toContain('dark');
    });
});