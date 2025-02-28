import { validateSessionSecret, getValidatedSessionSecret } from '../src/utils/sessionSecretValidator.js';
import { expect } from 'chai';

describe('Session Secret Validator', () => {
  // Mock environment variables for testing
  const originalEnv = { ...process.env };
  
  beforeEach(() => {
    process.env = { ...originalEnv };
    process.env.SECRET = 'Valid$ecret123Passw0rd!';
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('validateSessionSecret', () => {
    it('should accept a valid secret', () => {
      expect(() => validateSessionSecret('Valid$ecret123Passw0rd!')).to.not.throw();
    });

    it('should reject undefined secret', () => {
      expect(() => validateSessionSecret()).to.throw('Session secret cannot be undefined or empty');
    });

    it('should reject empty secret', () => {
      expect(() => validateSessionSecret('')).to.throw('Session secret cannot be undefined or empty');
    });

    it('should reject short secrets', () => {
      expect(() => validateSessionSecret('short')).to.throw('Session secret must be at least 32 characters long');
    });

    it('should reject secrets without complexity', () => {
      expect(() => validateSessionSecret('onlylowercaseletters')).to.throw('Session secret must include uppercase, lowercase, numbers, and special characters');
    });

    it('should reject common weak secrets', () => {
      expect(() => validateSessionSecret('secret')).to.throw('Session secret is too common or predictable');
    });
  });

  describe('getValidatedSessionSecret', () => {
    it('should retrieve and validate the secret from environment', () => {
      const secret = getValidatedSessionSecret();
      expect(secret).to.equal(process.env.SECRET);
    });

    it('should throw error if environment secret is invalid', () => {
      process.env.SECRET = 'weak';
      expect(() => getValidatedSessionSecret()).to.throw();
    });
  });
});