import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  email: text("email").notNull(),
  fullName: text("full_name").notNull(),
  phone: text("phone").notNull(),
  password: text("password").notNull(),
  agent: text("agent"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  email: true,
  fullName: true,
  phone: true,
  password: true,
  agent: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
