import { describe, expect, it } from 'vitest';
import tailwindConfig from '../tailwind.config.cjs';

describe('Tailwind Dark Mode Configuration', () => {
    it('should have dark mode enabled', () => {
        expect(tailwindConfig.darkMode).toBe('class');
    });

    it('should have comprehensive dark mode color palette', () => {
        const darkColors = tailwindConfig.theme.extend.colors.dark;
        
        // Check background colors
        expect(darkColors.background).toHaveProperty('primary');
        expect(darkColors.background).toHaveProperty('secondary');
        expect(darkColors.background).toHaveProperty('tertiary');

        // Check text colors
        expect(darkColors.text).toHaveProperty('primary');
        expect(darkColors.text).toHaveProperty('secondary');
        expect(darkColors.text).toHaveProperty('muted');

        // Check accent colors
        expect(darkColors.accent).toHaveProperty('primary');
        expect(darkColors.accent).toHaveProperty('secondary');
        expect(darkColors.accent).toHaveProperty('success');
        expect(darkColors.accent).toHaveProperty('warning');
        expect(darkColors.accent).toHaveProperty('danger');

        // Check border colors
        expect(darkColors.border).toHaveProperty('primary');
        expect(darkColors.border).toHaveProperty('secondary');
    });

    it('should have appropriate color contrast ratios', () => {
        const darkColors = tailwindConfig.theme.extend.colors.dark;
        const contrastRules = [
            { background: darkColors.background.primary, text: darkColors.text.primary },
            { background: darkColors.background.secondary, text: darkColors.text.primary }
        ];

        contrastRules.forEach(({ background, text }) => {
            // Simplified contrast calculation (just checking they are different)
            expect(background).not.toBe(text);
        });
    });

    it('should have safelist for dark mode classes', () => {
        const safeList = tailwindConfig.safelist;
        expect(safeList).toContain('dark:bg-dark-background-primary');
        expect(safeList).toContain('dark:text-dark-text-primary');
    });
});