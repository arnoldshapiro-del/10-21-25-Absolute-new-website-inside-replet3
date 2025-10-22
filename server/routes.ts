import type { Express } from "express";
import { storage } from "./storage";

export function registerRoutes(app: Express) {
  // API routes will go here
  // Currently the app is mostly static, so no routes needed yet
  
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });
}
