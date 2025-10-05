import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  email: text("email").notNull(),
  fullName: text("full_name").notNull(),
  phone: text("phone").notNull(),
  password: text("password").notNull(),
});

export const playerRegistrations = pgTable("player_registrations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull(),
  email: text("email").notNull(),
  fullName: text("full_name").notNull(),
  phone: text("phone").notNull(),
  password: text("password").notNull(),
  agentCode: text("agent_code").notNull(),
  status: text("status").notNull().default("pending"), // pending, active, suspended
  createdAt: timestamp("created_at").default(sql`NOW()`),
  metadata: jsonb("metadata"), // Additional data like IP, referrer, etc.
});

export const registrationAlerts = pgTable("registration_alerts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  playerId: varchar("player_id").references(() => playerRegistrations.id),
  message: text("message").notNull(),
  isRead: text("is_read").notNull().default("false"),
  createdAt: timestamp("created_at").default(sql`NOW()`),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  email: true,
  fullName: true,
  phone: true,
  password: true,
});

export const insertPlayerRegistrationSchema = createInsertSchema(playerRegistrations).pick({
  username: true,
  email: true,
  fullName: true,
  phone: true,
  password: true,
  agentCode: true,
});

export const insertRegistrationAlertSchema = createInsertSchema(registrationAlerts).pick({
  playerId: true,
  message: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertPlayerRegistration = z.infer<typeof insertPlayerRegistrationSchema>;
export type PlayerRegistration = typeof playerRegistrations.$inferSelect;
export type InsertRegistrationAlert = z.infer<typeof insertRegistrationAlertSchema>;
export type RegistrationAlert = typeof registrationAlerts.$inferSelect;
