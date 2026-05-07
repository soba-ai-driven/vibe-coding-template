/**
 * Drizzle ORM スキーマ定義。
 *
 * 初期状態は空。Auth.js を導入すると Claude が users/accounts/sessions/verificationTokens を追加する。
 * 機能追加で必要なテーブルもここに追記される。
 *
 * 編集後は必ず `npm run db:generate` でマイグレーション SQL を生成してコミットすること。
 */

// 例: シンプルなテーブル定義は以下のように書く
//
// import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
//
// export const users = pgTable("users", {
//   id: uuid("id").defaultRandom().primaryKey(),
//   email: text("email").notNull().unique(),
//   createdAt: timestamp("created_at").defaultNow().notNull(),
// });

export {};
