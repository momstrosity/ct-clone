import { validateSecret, getEnv } from '../src/config/env.js';

describe('Environment Variable Validation', () => {
  describe('validateSecret', () => {
    test('should throw error for empty secret', () => {
      expect(() => validateSecret('')).toThrow('SESSION_SECRET is not set');
    });

    test('should throw error for short secret', () => {
      expect(() => validateSecret('short')).toThrow('SESSION_SECRET must be at least 32 characters long');
    });

    test('should throw error for secret lacking complexity', () => {
      const simpleSecret = 'simplestringwithonlylowercase';
      expect(() => validateSecret(simpleSecret)).toThrow('SESSION_SECRET must include uppercase, lowercase, numbers, and special characters');
    });

    test('should pass for a complex secret', () => {
      const complexSecret = 'Str0ngS3cret!@#WithV@riedChars2023';
      expect(validateSecret(complexSecret)).toBe(complexSecret);
    });
  });

  describe('getEnv', () => {
    test('should return value for existing env variable', () => {
      process.env.TEST_VAR = 'test_value';
      expect(getEnv('TEST_VAR')).toBe('test_value');
      delete process.env.TEST_VAR;
    });

    test('should return default value for non-existing env variable', () => {
      expect(getEnv('NON_EXISTING_VAR', 'default')).toBe('default');
    });

    test('should throw error for non-existing env variable without default', () => {
      expect(() => getEnv('NON_EXISTING_VAR')).toThrow('Environment variable NON_EXISTING_VAR is not set');
    });
  });
});