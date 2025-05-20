import { describe, it, expect } from 'vitest';
import tailwindConfig from '../tailwind.config.cjs';

describe('Tailwind Dark Mode Configuration', () => {
    it('should have dark mode configuration', () => {
        expect(tailwindConfig.darkMode).toBe('class');
    });

    it('should have extended color palette for dark mode', () => {
        const colors = tailwindConfig.theme.extend.colors;
        
        // Check dark twilight color palette
        expect(colors['dark-twilight']).toBeDefined();
        expect(Object.keys(colors['dark-twilight'])).toHaveLength(9);
        
        // Check semantic dark mode colors
        expect(colors['dark-text']).toBeDefined();
        expect(colors['dark-bg']).toBeDefined();
        expect(colors['dark-accent']).toBeDefined();
    });

    it('should have full range of dark mode color shades', () => {
        const darkTwilight = tailwindConfig.theme.extend.colors['dark-twilight'];
        const expectedShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
        
        expectedShades.forEach(shade => {
            expect(darkTwilight[shade]).toBeDefined();
            expect(darkTwilight[shade]).toMatch(/^#[0-9A-Fa-f]{6}$/);
        });
    });

    it('should include dark mode in safelist', () => {
        expect(tailwindConfig.safelist).toContain('dark');
    });

    it('should have semantic color structure', () => {
        const semanticColors = [
            'dark-text', 
            'dark-bg', 
            'dark-accent'
        ];

        semanticColors.forEach(colorGroup => {
            const colors = tailwindConfig.theme.extend.colors[colorGroup];
            expect(colors).toBeDefined();
            expect(colors.DEFAULT).toBeDefined();
        });
    });
});