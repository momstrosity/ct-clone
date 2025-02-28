/**
 * Environment Variable Validation Module
 * Securely retrieves and validates environment variables
 */

const validateSecret = (secret) => {
  // Check if secret exists
  if (!secret) {
    throw new Error('SESSION_SECRET is not set');
  }

  // Check minimum length (e.g., 32 characters)
  if (secret.length < 32) {
    throw new Error('SESSION_SECRET must be at least 32 characters long');
  }

  // Optional: Check for entropy (complexity)
  const hasUppercase = /[A-Z]/.test(secret);
  const hasLowercase = /[a-z]/.test(secret);
  const hasNumbers = /[0-9]/.test(secret);
  const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(secret);

  if (!(hasUppercase && hasLowercase && hasNumbers && hasSpecialChars)) {
    throw new Error('SESSION_SECRET must include uppercase, lowercase, numbers, and special characters');
  }

  return secret;
};

const getEnv = (key, defaultValue = null) => {
  const value = process.env[key];
  
  if (value === undefined && defaultValue === null) {
    throw new Error(`Environment variable ${key} is not set`);
  }

  return value || defaultValue;
};

export { validateSecret, getEnv };