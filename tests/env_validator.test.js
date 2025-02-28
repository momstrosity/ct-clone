import { describe, it, expect } from 'vitest';
import { EnvValidator } from '../src/utils/env_validator.js';

describe('EnvValidator', () => {
  describe('validateSessionSecret', () => {
    it('should throw an error for empty secret', () => {
      expect(() => EnvValidator.validateSessionSecret('')).toThrow('Session secret is required');
      expect(() => EnvValidator.validateSessionSecret(null)).toThrow('Session secret is required');
      expect(() => EnvValidator.validateSessionSecret(undefined)).toThrow('Session secret is required');
    });

    it('should throw an error for short secrets', () => {
      expect(() => EnvValidator.validateSessionSecret('short')).toThrow('Session secret must be at least 32 characters long');
    });

    it('should throw an error for secrets without character diversity', () => {
      const testCases = [
        'onlylowercase123456789'.repeat(2),
        'ONLYUPPERCASE123456789'.repeat(2),
        '12345678901234567890123456789012',
        'nospecialcharacters123ABC'.repeat(2)
      ];

      testCases.forEach(secret => {
        expect(() => EnvValidator.validateSessionSecret(secret)).toThrow('Session secret must include uppercase, lowercase, numbers, and special characters');
      });
    });

    it('should throw an error for simple weak secrets', () => {
      const weakSecrets = [
        'secretsecret',
        'passwordpassword',
        '12345678901234567890',
        'abcdefabcdef'
      ];

      weakSecrets.forEach(secret => {
        expect(() => EnvValidator.validateSessionSecret(secret)).toThrow('Weak session secret detected');
      });
    });

    it('should accept a valid, strong secret', () => {
      const strongSecret = 'Str0ng_S3cret_W!th_D!verse_Ch@racters_2023';
      expect(EnvValidator.validateSessionSecret(strongSecret)).toBe(strongSecret);
    });
  });
});