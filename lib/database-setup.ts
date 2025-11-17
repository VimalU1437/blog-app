import sql from './db';

/**
 * Create users table
 * Run this once to set up your database schema
 */
export async function createTables() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(20) DEFAULT 'user',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    console.log('Users table created successfully');
  } catch (error) {
    console.error('Error creating tables:', error);
  }
}

/**
 * Create a new user
 */
export async function createUser(username: string, email: string, password: string, role: string = 'user') {
  try {
    const result = await sql`
      INSERT INTO users (username, email, password, role)
      VALUES (${username}, ${email}, ${password}, ${role})
      RETURNING id
    `;

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
    const users = await sql`
      SELECT id, username, email, password, role, created_at, updated_at
      FROM users
      WHERE email = ${email}
    `;

    return users[0];
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
    const users = await sql`
      SELECT id, username, email, password, role, created_at, updated_at
      FROM users
      WHERE username = ${username}
    `;

    return users[0];
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
    const users = await sql`
      SELECT id, username, email, role, created_at, updated_at
      FROM users
      ORDER BY created_at DESC
    `;

    return users;
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
    await sql`
      UPDATE users
      SET password = ${newPassword}, updated_at = CURRENT_TIMESTAMP
      WHERE id = ${id}
    `;

    return true;
  } catch (error) {
    console.error('Error updating password:', error);
    throw error;
  }
}

/**
 * Update user role
 */
export async function updateUserRole(id: number, newRole: string) {
  try {
    await sql`
      UPDATE users
      SET role = ${newRole}, updated_at = CURRENT_TIMESTAMP
      WHERE id = ${id}
    `;

    return true;
  } catch (error) {
    console.error('Error updating role:', error);
    throw error;
  }
}
