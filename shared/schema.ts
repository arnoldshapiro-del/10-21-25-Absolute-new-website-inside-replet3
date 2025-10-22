import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Example schema - currently the app doesn't use database features
// This is a placeholder for future functionality
export const exampleTable = pgTable("example", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertExampleSchema = createInsertSchema(exampleTable).omit({
  id: true,
  createdAt: true,
});

export type InsertExample = z.infer<typeof insertExampleSchema>;
export type Example = typeof exampleTable.$inferSelect;
