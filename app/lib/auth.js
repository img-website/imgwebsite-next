import jwt from 'jsonwebtoken';

/**
 * Verify JWT token
 * @param {string} token - JWT token to verify
 * @returns {Object|null} - Decoded token data or null if invalid
 */
export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    return decoded;
  } catch (error) {
    console.error('Token verification error:', error);
    return null;
  }
}

/**
 * Generate JWT token
 * @param {Object} payload - Data to include in token
 * @param {string} expiresIn - Token expiration time
 * @returns {string} - Generated JWT token
 */
export function generateToken(payload, expiresIn = '24h') {
  return jwt.sign(payload, process.env.JWT_SECRET || 'your-secret-key', { expiresIn });
}

/**
 * Extract token from request headers
 * @param {Headers} headers - Request headers
 * @returns {string|null} - Extracted token or null
 */
export function extractToken(headers) {
  const authHeader = headers.get('authorization');
  if (!authHeader) return null;

  const [type, token] = authHeader.split(' ');
  if (type !== 'Bearer' || !token) return null;

  return token;
}

/**
 * Check if user is admin
 * @param {Object} decoded - Decoded token data
 * @returns {boolean} - True if user is admin
 */
export function isAdmin(decoded) {
  return decoded && decoded.role === 'admin';
} 