import { UserPayload } from './auth';

// Simple in-memory store - replace with your database
interface User extends UserPayload {
  password?: string; // Only for local auth
  createdAt: string;
  lastLogin: string;
}

class Database {
  private users: Map<string, User> = new Map();

  // User operations
  async createUser(userData: Omit<User, 'id' | 'createdAt' | 'lastLogin'>): Promise<User> {
    const user: User = {
      ...userData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
    };

    this.users.set(user.email, user);
    return user;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.users.get(email) || null;
  }

  async updateUser(email: string, updates: Partial<User>): Promise<User | null> {
    const user = this.users.get(email);
    if (!user) return null;

    const updatedUser = { ...user, ...updates, lastLogin: new Date().toISOString() };
    this.users.set(email, updatedUser);
    return updatedUser;
  }

  // Password operations (for local auth)
  async hashPassword(password: string): Promise<string> {
    const bcrypt = await import('bcryptjs');
    return bcrypt.hash(password, 12);
  }

  async verifyPassword(password: string, hash: string): Promise<boolean> {
    const bcrypt = await import('bcryptjs');
    return bcrypt.compare(password, hash);
  }
}

export const db = new Database();
