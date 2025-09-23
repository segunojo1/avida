import { pgTable, uuid, varchar, timestamp, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  image: varchar("image").notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const dreamCardsTable = pgTable("dreamcards", {
  id: uuid("id").defaultRandom().primaryKey(),
  message: varchar("message", { length: 200 }).notNull(),
  tags: text("tags").array().notNull(),
  vibe: varchar("vibe", { length: 100 }).notNull(),
  userId: uuid("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
