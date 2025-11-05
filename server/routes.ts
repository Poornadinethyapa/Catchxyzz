import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Temporary redirect for Farcaster Hosted Manifest (307)
  // Set FARCASTER_HOSTED_MANIFEST_URL in your environment to use this.
  const hostedManifestUrl = process.env.FARCASTER_HOSTED_MANIFEST_URL;
  if (hostedManifestUrl) {
    app.get("/.well-known/farcaster.json", (_req, res) => {
      res.redirect(307, hostedManifestUrl as string);
    });
  }

  const httpServer = createServer(app);

  return httpServer;
}
