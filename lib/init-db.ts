import { createTables } from './database-setup';

// Script to initialize the database
async function initDatabase() {
  try {
    console.log('Initializing database...');
    await createTables();
    console.log('Database initialized successfully!');
  } catch (error) {
    console.error('Failed to initialize database:', error);
    process.exit(1);
  }
}

// Run the initialization
initDatabase();
