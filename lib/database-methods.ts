import { db } from './db';
import { users } from './schema';
import { eq } from 'drizzle-orm';
import type { UserRole } from './types';


/**
 * Create a new user
 */
export async function createUser(username: string, email: string, password: string, role: UserRole = 'user') {
  try {
    const result = await db.insert(users).values({
      username,
      email,
      password,
      role,
    }).returning({ id: users.id });

    return result[0].id;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

/**
 * Get user by email
 */
export async function getUserByEmail(email: string) {
  try {
    const result = await db.select().from(users).where(eq(users.email, email));
    return result[0];
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

/**
 * Get user by username
 */
export async function getUserByUsername(username: string) {
  try {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

/**
 * Get all users
 */
export async function getAllUsers() {
  try {
    const result = await db.select({
      id: users.id,
      username: users.username,
      email: users.email,
      role: users.role,
      created_at: users.created_at,
      updated_at: users.updated_at,
    }).from(users).orderBy(users.created_at);

    return result;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

/**
 * Update user password
 */
export async function updateUserPassword(id: number, newPassword: string) {
  try {
    await db.update(users)
      .set({ password: newPassword, updated_at: new Date() })
      .where(eq(users.id, id));

    return true;
  } catch (error) {
    console.error('Error updating password:', error);
    throw error;
  }
}

/**
 * Update user role
 */
export async function updateUserRole(id: number, newRole: UserRole) {
  try {
    await db.update(users)
      .set({ role: newRole, updated_at: new Date() })
      .where(eq(users.id, id));

    return true;
  } catch (error) {
    console.error('Error updating role:', error);
    throw error;
  }
}
