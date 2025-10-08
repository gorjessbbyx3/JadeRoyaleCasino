import { type User, type InsertUser } from "@shared/schema";
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.POSTGRES_URL || process.env.DATABASE_URL!);

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAllUsers(): Promise<User[]>;
}

function mapUser(row: any): User {
  return {
    id: row.id,
    username: row.username,
    email: row.email,
    fullName: row.full_name,
    phone: row.phone,
    password: row.password,
    agent: row.agent,
  };
}

export class NileStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const result = await sql`SELECT * FROM users WHERE id = ${id}`;
    return result[0] ? mapUser(result[0]) : undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await sql`SELECT * FROM users WHERE username = ${username}`;
    return result[0] ? mapUser(result[0]) : undefined;
  }

  async createUser(user: InsertUser): Promise<User> {
    const result = await sql`
      INSERT INTO users (username, email, full_name, phone, password, agent)
      VALUES (${user.username}, ${user.email}, ${user.fullName}, ${user.phone}, ${user.password}, ${user.agent || null})
      RETURNING *
    `;
    return mapUser(result[0]);
  }

  async getAllUsers(): Promise<User[]> {
    const result = await sql`SELECT * FROM users ORDER BY username`;
    return result.map(mapUser);
  }
}

export const storage = new NileStorage();
