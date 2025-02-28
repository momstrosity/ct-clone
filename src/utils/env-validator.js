/**
 * Validate and sanitize session secret from environment variables
 * @param {string} secret - Session secret from environment
 * @throws {Error} If secret is invalid
 * @returns {string} Validated and sanitized secret
 */
function validateSessionSecret(secret) {
  // Check if secret is undefined or empty
  if (!secret) {
    throw new Error('Session secret must be defined');
  }

  // Check minimum length requirement
  if (secret.trim().length < 16) {
    throw new Error('Session secret must be at least 16 characters long');
  }

  // Trim whitespace and remove any non-printable characters
  const sanitizedSecret = secret.trim().replace(/[\x00-\x1F\x7F]/g, '');

  // Additional checks for complexity (optional but recommended)
  const hasUpperCase = /[A-Z]/.test(sanitizedSecret);
  const hasLowerCase = /[a-z]/.test(sanitizedSecret);
  const hasNumbers = /[0-9]/.test(sanitizedSecret);
  const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(sanitizedSecret);

  if (!(hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars)) {
    throw new Error('Session secret must include uppercase, lowercase, numbers, and special characters');
  }

  return sanitizedSecret;
}

module.exports = {
  validateSessionSecret
};