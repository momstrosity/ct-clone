import { validateSessionSecret, getValidatedSessionSecret } from '../src/utils/sessionSecretValidator.js';
import { expect } from 'chai';

describe('Session Secret Validator', () => {
  // Mock environment variables for testing
  const originalEnv = { ...process.env };
  
  beforeEach(() => {
    process.env = { ...originalEnv };
    // A complex secret that meets all requirements
    process.env.SECRET = 'ValidS3cretP@ssw0rd!WithC0mplex!ty';
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('validateSessionSecret', () => {
    const validSecret = 'ValidS3cretP@ssw0rd!WithC0mplex!ty';

    it('should accept a valid secret', () => {
      expect(() => validateSessionSecret(validSecret)).to.not.throw();
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
      expect(() => validateSessionSecret('onlylowercaseletterslongerthan32chars')).to.throw('Session secret must include uppercase, lowercase, numbers, and special characters');
    });

    it('should reject common weak secrets', () => {
      const weakSecrets = [
        'mysecretpassword123',
        'secret123',
        'passwordWithSecret'
      ];
      
      weakSecrets.forEach(secret => {
        expect(() => validateSessionSecret(secret), `Should reject secret: ${secret}`).to.throw('Session secret is too common or predictable');
      });
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