import { type PlayerRegistration, type InsertPlayerRegistration, type RegistrationAlert, type InsertRegistrationAlert } from "@shared/schema";
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.POSTGRES_URL || process.env.DATABASE_URL!);

export interface IStorage {
  // Player registrations
  getPlayerRegistration(id: string): Promise<PlayerRegistration | undefined>;
  getPlayerRegistrationByUsername(username: string): Promise<PlayerRegistration | undefined>;
  createPlayerRegistration(registration: InsertPlayerRegistration): Promise<PlayerRegistration>;
  getAllPlayerRegistrations(): Promise<PlayerRegistration[]>;
  getPlayerRegistrationsByAgent(agentCode: string): Promise<PlayerRegistration[]>;
  updatePlayerRegistrationStatus(id: string, status: string): Promise<void>;
  deletePlayerRegistration(id: string): Promise<void>;

  // Registration alerts
  createRegistrationAlert(alert: InsertRegistrationAlert): Promise<RegistrationAlert>;
  getUnreadAlerts(): Promise<RegistrationAlert[]>;
  markAlertAsRead(id: string): Promise<void>;
  deleteAlert(id: string): Promise<void>;

  // Statistics
  getRegistrationStats(): Promise<{
    totalPlayers: number;
    activeAgents: number;
    pendingRequests: number;
    weeklyRegistrations: number;
  }>;
}

function mapPlayerRegistration(row: any): PlayerRegistration {
  return {
    id: row.id,
    username: row.username,
    email: row.email,
    fullName: row.full_name,
    phone: row.phone,
    password: row.password,
    agentCode: row.agent_code,
    status: row.status,
    createdAt: row.created_at,
    metadata: row.metadata,
  };
}

function mapRegistrationAlert(row: any): RegistrationAlert {
  return {
    id: row.id,
    playerId: row.player_id,
    message: row.message,
    isRead: row.is_read,
    createdAt: row.created_at,
  };
}

export class NileStorage implements IStorage {
  async getPlayerRegistration(id: string): Promise<PlayerRegistration | undefined> {
    const result = await sql`SELECT * FROM player_registrations WHERE id = ${id}`;
    return result[0] ? mapPlayerRegistration(result[0]) : undefined;
  }

  async getPlayerRegistrationByUsername(username: string): Promise<PlayerRegistration | undefined> {
    const result = await sql`SELECT * FROM player_registrations WHERE username = ${username}`;
    return result[0] ? mapPlayerRegistration(result[0]) : undefined;
  }

  async createPlayerRegistration(registration: InsertPlayerRegistration): Promise<PlayerRegistration> {
    const result = await sql`
      INSERT INTO player_registrations (username, email, full_name, phone, password, agent_code)
      VALUES (${registration.username}, ${registration.email}, ${registration.fullName}, ${registration.phone}, ${registration.password}, ${registration.agentCode})
      RETURNING *
    `;
    return mapPlayerRegistration(result[0]);
  }

  async getAllPlayerRegistrations(): Promise<PlayerRegistration[]> {
    const result = await sql`SELECT * FROM player_registrations ORDER BY created_at DESC`;
    return result.map(mapPlayerRegistration);
  }

  async getPlayerRegistrationsByAgent(agentCode: string): Promise<PlayerRegistration[]> {
    const result = await sql`SELECT * FROM player_registrations WHERE agent_code = ${agentCode} ORDER BY created_at DESC`;
    return result.map(mapPlayerRegistration);
  }

  async updatePlayerRegistrationStatus(id: string, status: string): Promise<void> {
    await sql`UPDATE player_registrations SET status = ${status} WHERE id = ${id}`;
  }

  async deletePlayerRegistration(id: string): Promise<void> {
    await sql`DELETE FROM player_registrations WHERE id = ${id}`;
  }

  async createRegistrationAlert(alert: InsertRegistrationAlert): Promise<RegistrationAlert> {
    const result = await sql`
      INSERT INTO registration_alerts (player_id, message)
      VALUES (${alert.playerId}, ${alert.message})
      RETURNING *
    `;
    return mapRegistrationAlert(result[0]);
  }

  async getUnreadAlerts(): Promise<RegistrationAlert[]> {
    const result = await sql`SELECT * FROM registration_alerts WHERE is_read = 'false' ORDER BY created_at DESC`;
    return result.map(mapRegistrationAlert);
  }

  async markAlertAsRead(id: string): Promise<void> {
    await sql`UPDATE registration_alerts SET is_read = 'true' WHERE id = ${id}`;
  }

  async deleteAlert(id: string): Promise<void> {
    await sql`DELETE FROM registration_alerts WHERE id = ${id}`;
  }

  async getRegistrationStats() {
    const [totalPlayersResult] = await sql`SELECT COUNT(*) as count FROM player_registrations`;
    const [activeAgentsResult] = await sql`SELECT COUNT(DISTINCT agent_code) as count FROM player_registrations`;
    const [pendingRequestsResult] = await sql`SELECT COUNT(*) as count FROM player_registrations WHERE status = 'pending'`;
    const [weeklyRegistrationsResult] = await sql`SELECT COUNT(*) as count FROM player_registrations WHERE created_at >= NOW() - INTERVAL '7 days'`;

    return {
      totalPlayers: parseInt(totalPlayersResult.count),
      activeAgents: parseInt(activeAgentsResult.count),
      pendingRequests: parseInt(pendingRequestsResult.count),
      weeklyRegistrations: parseInt(weeklyRegistrationsResult.count),
    };
  }
}

export const storage = new NileStorage();
