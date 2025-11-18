import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import type { UserRole } from './types';
import { DEFAULT_JWT_SECRET, DEFAULT_JWT_EXPIRES_IN, BEARER_PREFIX, BCRYPT_SALT_ROUNDS } from './constants';

const JWT_SECRET = process.env.JWT_SECRET || DEFAULT_JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || DEFAULT_JWT_EXPIRES_IN;

/**
 * Hash a password
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
}

/**
 * Verify a password against its hash
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/**
 * Generate a JWT token
 */
export function generateToken(payload: { id: number; email: string; role: UserRole }): string {
  const secret = JWT_SECRET;
  const expiresIn = JWT_EXPIRES_IN;

  return jwt.sign(payload, secret, {
    expiresIn,
  } as jwt.SignOptions);
}

/**
 * Verify a JWT token
 */
export function verifyToken(token: string) {
  try {
    const secret = JWT_SECRET;
    return jwt.verify(token, secret) as { id: number; email: string; role: UserRole; iat: number; exp: number };
  } catch {
    return null;
  }
}

/**
 * Extract token from Authorization header
 */
export function extractToken(authHeader: string | null): string | null {
  if (!authHeader || !authHeader.startsWith(BEARER_PREFIX)) {
    return null;
  }
  return authHeader.substring(BEARER_PREFIX.length);
}
