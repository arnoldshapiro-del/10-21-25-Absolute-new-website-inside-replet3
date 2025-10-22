// Storage interface for the application
// Currently uses in-memory storage since the app is mostly static

export interface IStorage {
  // Add storage methods here as needed
}

export class MemStorage implements IStorage {
  // In-memory storage implementation
  // Add methods here as needed
}

export const storage = new MemStorage();
