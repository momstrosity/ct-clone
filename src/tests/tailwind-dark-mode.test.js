import { describe, it, expect } from 'vitest';
import tailwindConfig from '../../tailwind.config.cjs';

describe('Tailwind Dark Mode Configuration', () => {
    it('should have dark mode enabled with class strategy', () => {
        expect(tailwindConfig.darkMode).toBe('class');
    });

    it('should have comprehensive dark mode color palette', () => {
        const darkColors = tailwindConfig.theme.extend.colors.dark;
        
        // Test background colors
        expect(darkColors.background.DEFAULT).toBeDefined();
        expect(darkColors.background.secondary).toBeDefined();
        expect(darkColors.background.tertiary).toBeDefined();

        // Test text colors
        expect(darkColors.text.primary).toBeDefined();
        expect(darkColors.text.secondary).toBeDefined();
        expect(darkColors.text.muted).toBeDefined();

        // Test interactive colors
        expect(darkColors.primary.DEFAULT).toBeDefined();
        expect(darkColors.primary.hover).toBeDefined();
        expect(darkColors.primary.active).toBeDefined();

        // Test accent colors
        expect(darkColors.accent.success).toBeDefined();
        expect(darkColors.accent.warning).toBeDefined();
        expect(darkColors.accent.error).toBeDefined();
        expect(darkColors.accent.info).toBeDefined();

        // Test border colors
        expect(darkColors.border.DEFAULT).toBeDefined();
        expect(darkColors.border.subtle).toBeDefined();
    });

    it('should have dark class in safelist', () => {
        expect(tailwindConfig.safelist).toContain('dark');
    });
});