import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPlayerRegistrationSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all player registrations
  app.get("/api/registrations", async (req, res) => {
    try {
      const registrations = await storage.getAllPlayerRegistrations();
      res.json(registrations);
    } catch (error) {
      console.error("Error fetching registrations:", error);
      res.status(500).json({ message: "Failed to fetch registrations" });
    }
  });

  // Get registrations by agent
  app.get("/api/registrations/agent/:agentCode", async (req, res) => {
    try {
      const { agentCode } = req.params;
      const registrations = await storage.getPlayerRegistrationsByAgent(agentCode);
      res.json(registrations);
    } catch (error) {
      console.error("Error fetching registrations by agent:", error);
      res.status(500).json({ message: "Failed to fetch registrations" });
    }
  });

  // Create new player registration
  app.post("/api/registrations", async (req, res) => {
    try {
      const validatedData = insertPlayerRegistrationSchema.parse(req.body);
      
      // Check if username already exists
      const existingUser = await storage.getPlayerRegistrationByUsername(validatedData.username);
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }

      const registration = await storage.createPlayerRegistration(validatedData);
      
      // Create alert for new registration
      await storage.createRegistrationAlert({
        playerId: registration.id,
        message: `${registration.fullName} registered under agent: ${registration.agentCode}`,
      });

      res.status(201).json(registration);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid input data", errors: error.errors });
      }
      console.error("Error creating registration:", error);
      res.status(500).json({ message: "Failed to create registration" });
    }
  });

  // Update player registration status
  app.patch("/api/registrations/:id/status", async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      
      if (!["pending", "active", "suspended"].includes(status)) {
        return res.status(400).json({ message: "Invalid status" });
      }

      await storage.updatePlayerRegistrationStatus(id, status);
      res.json({ message: "Status updated successfully" });
    } catch (error) {
      console.error("Error updating status:", error);
      res.status(500).json({ message: "Failed to update status" });
    }
  });

  // Delete player registration
  app.delete("/api/registrations/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deletePlayerRegistration(id);
      res.json({ message: "Registration deleted successfully" });
    } catch (error) {
      console.error("Error deleting registration:", error);
      res.status(500).json({ message: "Failed to delete registration" });
    }
  });

  // Get unread alerts
  app.get("/api/alerts", async (req, res) => {
    try {
      const alerts = await storage.getUnreadAlerts();
      res.json(alerts);
    } catch (error) {
      console.error("Error fetching alerts:", error);
      res.status(500).json({ message: "Failed to fetch alerts" });
    }
  });

  // Mark alert as read
  app.patch("/api/alerts/:id/read", async (req, res) => {
    try {
      const { id } = req.params;
      await storage.markAlertAsRead(id);
      res.json({ message: "Alert marked as read" });
    } catch (error) {
      console.error("Error marking alert as read:", error);
      res.status(500).json({ message: "Failed to mark alert as read" });
    }
  });

  // Delete alert
  app.delete("/api/alerts/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteAlert(id);
      res.json({ message: "Alert deleted successfully" });
    } catch (error) {
      console.error("Error deleting alert:", error);
      res.status(500).json({ message: "Failed to delete alert" });
    }
  });

  // Get registration statistics
  app.get("/api/stats", async (req, res) => {
    try {
      const stats = await storage.getRegistrationStats();
      res.json(stats);
    } catch (error) {
      console.error("Error fetching stats:", error);
      res.status(500).json({ message: "Failed to fetch statistics" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
