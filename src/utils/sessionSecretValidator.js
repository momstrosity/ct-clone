/**
 * Validates the session secret to ensure it meets security requirements
 * @param {string} secret - The session secret to validate
 * @throws {Error} If the secret does not meet security requirements
 * @returns {boolean} True if the secret is valid
 */
export function validateSessionSecret(secret) {
  // Check if secret is undefined or empty
  if (!secret) {
    throw new Error('Session secret cannot be undefined or empty');
  }

  // Minimum length requirement
  if (secret.length < 32) {
    throw new Error('Session secret must be at least 32 characters long');
  }

  // Check for sufficient complexity
  const hasUppercase = /[A-Z]/.test(secret);
  const hasLowercase = /[a-z]/.test(secret);
  const hasNumber = /[0-9]/.test(secret);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(secret);

  if (!(hasUppercase && hasLowercase && hasNumber && hasSpecialChar)) {
    throw new Error('Session secret must include uppercase, lowercase, numbers, and special characters');
  }

  // Check for common weak secrets
  const weakSecrets = [
    'secret', 
    'password', 
    'mysecret', 
    process.env.NODE_ENV, // Environment name should not be used as secret 
    'communitytaught' // Prevent project name being used as secret
  ];

  if (weakSecrets.some(weak => secret.toLowerCase().includes(weak))) {
    throw new Error('Session secret is too common or predictable');
  }

  return true;
}

/**
 * Safely retrieves and validates the session secret from environment
 * @returns {string} Validated session secret
 */
export function getValidatedSessionSecret() {
  const secret = process.env.SECRET;
  validateSessionSecret(secret);
  return secret;
}