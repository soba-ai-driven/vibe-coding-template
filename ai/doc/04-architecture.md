# 技術アーキテクチャ

> このファイルは現在のアーキテクチャを反映します。
> アーキテクチャに影響する変更があったら更新し、変更履歴を末尾に残してください。

---

最終更新: <未セットアップ>

## 全体構成

```
┌────────────────────────────────────────┐
│  Browser / LINE / Discord / Slack /    │
│  Chatwork (フロントエンド種別による)     │
└──────────────┬─────────────────────────┘
               │
               ▼
┌────────────────────────────────────────┐
│  Vercel (Next.js App Router)           │
│  - src/app/                            │
│  - src/components/                     │
│  - src/lib/                            │
│  - API Routes (src/app/api/)           │
└──────────────┬─────────────────────────┘
               │
               ▼
┌────────────────────────────────────────┐
│  Neon PostgreSQL                        │
│  - development branch (ローカル開発)    │
│  - staging branch (preview デプロイ)    │
│  - production branch (本番)             │
└────────────────────────────────────────┘
```

## ブランチ戦略

| Git ブランチ | Vercel 環境 | Neon DB ブランチ | デプロイ責任者 |
|---|---|---|---|
| `main` | Production | production | 人間のみ |
| `staging` | Preview | staging | Claude が自動 push |
| feature branches | Preview (一時) | staging（共有） | Claude（必要時） |

## ディレクトリ構成

```
src/
├── app/                  # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── api/              # サーバーサイド API
├── components/           # React コンポーネント
│   └── ui/               # shadcn/ui コンポーネント
├── db/
│   └── schema.ts         # Drizzle スキーマ
├── lib/
│   └── utils.ts          # ユーティリティ
├── auth.ts               # Auth.js 設定（追加された場合）
└── middleware.ts         # ルート保護（追加された場合）

drizzle/                  # 生成された migration SQL
playwright/               # E2E テスト spec
```

## 技術スタック

| 領域 | 採用 | バージョン |
|---|---|---|
| Framework | Next.js (App Router) | ^15.0.0 |
| Language | TypeScript | ^5.6.0 |
| ORM | Drizzle | ^0.36.0 |
| Auth | Auth.js | 5.0.0-beta.25 |
| UI | shadcn/ui + Tailwind | TW v4 |
| Test (Unit) | Vitest | ^2.1.0 |
| Test (E2E) | Playwright | ^1.49.0 |
| Lint | ESLint + Prettier | latest |
| Pre-commit | Husky + lint-staged | latest |
| Deploy | Vercel | — |
| DB | Neon PostgreSQL | — |

## DB スキーマ概要

`src/db/schema.ts` を参照。
（セットアップ後、Auth.js のテーブル + プロジェクト固有のテーブルがここに定義される）

## API 設計

`src/app/api/` 配下に Route Handler 形式で配置。
- `src/app/api/<resource>/route.ts` - REST 風
- `src/app/api/<integration>/webhook/route.ts` - 外部サービスからの webhook

---

## 変更履歴

<!-- 大きな変更があったらここに追記 -->

- (まだ変更なし)
