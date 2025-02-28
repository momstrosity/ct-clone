const { validateSessionSecret } = require('../../src/utils/env-validator');

describe('Session Secret Validation', () => {
  test('valid complex secret passes validation', () => {
    const validSecret = 'Str0ng!Pass@w0rd123';
    expect(validateSessionSecret(validSecret)).toBe(validSecret);
  });

  test('throws error for undefined secret', () => {
    expect(() => validateSessionSecret()).toThrow('Session secret must be defined');
    expect(() => validateSessionSecret('')).toThrow('Session secret must be defined');
  });

  test('throws error for short secret', () => {
    expect(() => validateSessionSecret('short')).toThrow('Session secret must be at least 16 characters long');
  });

  test('throws error for secret without complexity', () => {
    const noUppercase = 'lowercase123!@#';
    const noLowercase = 'UPPERCASE123!@#';
    const noNumbers = 'UpperAndLower!@#';
    const noSpecialChars = 'UpperAndLower123';

    expect(() => validateSessionSecret(noUppercase)).toThrow('must include uppercase');
    expect(() => validateSessionSecret(noLowercase)).toThrow('must include lowercase');
    expect(() => validateSessionSecret(noNumbers)).toThrow('must include numbers');
    expect(() => validateSessionSecret(noSpecialChars)).toThrow('must include special characters');
  });

  test('trims whitespace from secret', () => {
    const spacedSecret = '   Str0ng!Pass@w0rd123   ';
    expect(validateSessionSecret(spacedSecret)).toBe('Str0ng!Pass@w0rd123');
  });
});