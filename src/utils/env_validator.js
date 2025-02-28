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

    // Check length first
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

    // Weak secret patterns
    const weakSecretPatterns = [
      'secret', 'pass', 'word', 'password', 
      '12345', 'abcdef', '123', 
      ...((process.env.NODE_ENV || '').split(' ')),
      ...((process.env.PORT || '').split(' '))
    ];

    const normalizedSecret = secret.toLowerCase();
    
    // Comprehensive weak secret detection
    const weaknessChecks = [
      // Check if any weak pattern is fully contained
      weakSecretPatterns.some(pattern => 
        normalizedSecret.includes(pattern.toLowerCase())
      ),
      // Check for character repetition
      /(.)\1{3,}/.test(secret),
      // Check for sequential patterns
      /123|234|345|456|567|678|789|987|876|765|654|543|432|321/.test(secret),
      // Check for keyboard pattern sequences
      /qwerty|asdfgh|zxcvbn/i.test(secret)
    ];

    // If any weakness check passes, throw an error
    if (weaknessChecks.some(check => check)) {
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