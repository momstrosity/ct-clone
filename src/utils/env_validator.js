/**
 * Validates and retrieves environment variables with security checks
 */
export class EnvValidator {
  /**
   * Validates a session secret for security and usability
   * @param {string} secret - The secret to validate
   * @throws {Error} If secret does not meet security requirements
   * @returns {string} The validated secret
   */
  static validateSessionSecret(secret) {
    // Check if secret exists
    if (!secret) {
      throw new Error('Session secret is required');
    }

    // Check minimum length (at least 32 characters recommended)
    if (secret.length < 32) {
      throw new Error('Session secret must be at least 32 characters long');
    }

    // Check for sufficient entropy (mix of characters)
    const hasUppercase = /[A-Z]/.test(secret);
    const hasLowercase = /[a-z]/.test(secret);
    const hasNumbers = /[0-9]/.test(secret);
    const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(secret);

    if (!(hasUppercase && hasLowercase && hasNumbers && hasSpecialChars)) {
      throw new Error('Session secret must include uppercase, lowercase, numbers, and special characters');
    }

    // Optional: Check for common weak secrets
    const weakSecrets = [
      'secret', 'password', '12345', 'abcdef', 
      process.env.NODE_ENV || '', 
      process.env.PORT || ''
    ];

    if (weakSecrets.includes(secret)) {
      throw new Error('Weak session secret detected');
    }

    return secret;
  }

  /**
   * Safely retrieve and validate a session secret
   * @returns {string} The validated session secret
   */
  static getSessionSecret() {
    return this.validateSessionSecret(process.env.SECRET);
  }
}

export default EnvValidator;