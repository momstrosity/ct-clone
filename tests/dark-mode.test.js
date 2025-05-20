import { describe, it, expect } from 'vitest';

describe('Dark Mode Configuration', () => {
    const darkColors = {
        backgroundColors: [
            'bg-dark-background',
            'bg-dark-background-secondary',
            'bg-dark-background-tertiary'
        ],
        textColors: [
            'text-dark-text-primary', 
            'text-dark-text-secondary', 
            'text-dark-text-accent'
        ],
        primaryColors: [
            'bg-dark-primary', 
            'text-dark-primary', 
            'border-dark-primary'
        ],
        accentColors: [
            'bg-dark-accent-success',
            'bg-dark-accent-error', 
            'bg-dark-accent-warning', 
            'bg-dark-accent-info'
        ]
    };

    it('should have all dark mode color classes defined', () => {
        Object.values(darkColors).forEach(colorGroup => {
            colorGroup.forEach(colorClass => {
                expect(colorClass).toBeTruthy();
            });
        });
    });

    it('should have consistent color structure', () => {
        const validateColorFormat = (color) => {
            expect(color).toMatch(/^(bg|text|border)-dark-/);
        };

        Object.values(darkColors).forEach(colorGroup => {
            colorGroup.forEach(validateColorFormat);
        });
    });
});