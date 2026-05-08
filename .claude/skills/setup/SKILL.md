---
name: setup
description: テンプレートから派生したリポジトリを初期セットアップする。Vercelプロジェクト作成、Neon DB作成、環境変数注入、初回デプロイまでを自動で行う。`/setup`で実行。一度だけ実行する。
---

# /setup スキル

このリポジトリが vibe-coding-template から派生した直後に**1回だけ**実行するスキルです。
Vercel/Neon プロジェクトを作成し、ステージング環境までを立ち上げます。

## 前提

以下が事前に整っていること（ハンズオンで揃える）:

- [ ] GitHub アカウントが作成済み、組織に招待済み
- [ ] Vercel に GitHub サインイン済み、Team に参加済み
- [ ] Neon に GitHub サインイン済み、Organization に参加済み
- [ ] Claude Desktop の Settings → Connectors で Vercel / Neon が OAuth 接続済み（Code タブ用は `.mcp.json` 経由で自動接続）
- [ ] `gh` コマンドが使える（`gh auth status` でログイン済みを確認）
- [ ] Node.js + Git for Windows がローカルにインストール済み（`node -v` / `git -v` で確認可能）
- [ ] このリポジトリが `~/Documents/GitHub/<repo-name>` に clone されている
- [ ] Claude Desktop の Code タブでこのフォルダが開かれている

## 実行手順

### ステップ1: 既に実行済みかチェック

`.env.local` が存在し `DATABASE_URL` が空でなければ「既にセットアップ済みです」と伝えて終了。
強制再実行したい場合は明示的に `/setup --force` のような指示を求める（基本は推奨しない）。

### ステップ2: 自己紹介と概要説明

ユーザーに以下を伝える:

```
こんにちは。これからこのプロジェクトの初期セットアップを行います。

具体的には:
  1. このプロジェクトの目的を聞きます
  2. Vercel と Neon にプロジェクトを自動で作ります
  3. 環境変数を自動で設定します
  4. ステージング（お試し公開）の URL を立ち上げます

5〜10分程度かかります。途中いくつか質問させてください。
```

### ステップ3: コンテキスト初期化（対話）

以下を順に質問。回答を得るたびに変数として保持:

```
Q1. このMVPで解決したい課題は何ですか？（自由記述）
Q2. なぜ今これを作るのですか？背景を教えてください。（自由記述）
Q3. 想定ユーザーは誰ですか？（例: 営業担当、店舗スタッフ、社内全員）
Q4. 何ができたら成功と言えますか？（成功条件・KPI 等）
Q5. フロントエンドは何にしますか？
   A) Web画面（普通のブラウザで使うアプリ）
   B) LINE公式アカウント
   C) Discord ボット
   D) Slack ボット
   E) Chatwork ボット
   F) その他（自由記述）
```

回答後、以下を `ai/doc/01-context.md` に書き込む:

```markdown
# プロジェクトコンテキスト

最終更新: <YYYY-MM-DD>

## 解決したい課題

<Q1の回答>

## 背景

<Q2の回答>

## 想定ユーザー

<Q3の回答>

## 成功条件

<Q4の回答>

## フロントエンド種別

<Q5の回答>

---

このドキュメントはプロジェクトの最上位の文脈情報です。要件や設計が変わった時はここから見直すこと。
```

### ステップ4: GitHub リポジトリ情報を取得

`gh` CLI を使って:

```bash
gh repo view --json name,owner,defaultBranchRef
gh repo view --json url
```

- リポジトリ名（owner/name）とデフォルトブランチを取得
- staging ブランチが存在するかチェック:

```bash
git ls-remote --heads origin staging
```

存在しなければ作成:

```bash
git checkout -b staging
git push origin staging
git checkout -
```

### ステップ5: Vercel プロジェクト作成

Vercel MCP で:

1. プロジェクト作成（名前 = リポジトリ名）
2. GitHub リポジトリと連携
3. プロダクションブランチ = `main`
4. プレビューブランチに `staging` を含める設定
5. 既存 Team（`SOBA Project Team` 等）配下に作成

### ステップ6: Neon プロジェクト作成

Neon MCP で:

1. 既存 Organization 配下にプロジェクト作成（名前 = リポジトリ名）
2. 3 ブランチ作成（development / staging / production）
3. 各ブランチの接続文字列（DATABASE_URL）を取得

### ステップ7: 環境変数を Vercel に設定

Vercel MCP で:

| 環境 | DATABASE_URL | AUTH_SECRET | AUTH_URL |
|---|---|---|---|
| Production | Neon production branch URL | `openssl rand -base64 32` で生成 | プロダクションURL |
| Preview | Neon staging branch URL | 同上 | プレビューURL |
| Development | （ローカル用、Vercel側は未設定でOK） | — | — |

### ステップ8: `.env.local` を作成

ローカル開発用に以下を生成:

```
DATABASE_URL=<Neon development branch の接続文字列>
AUTH_SECRET=<新規生成>
AUTH_URL=http://localhost:3000
```

### ステップ9: 依存インストール

```bash
npm install
```

エラーが出たらユーザーに見せて、解決策を提示。

### ステップ10: フロントエンド種別ごとの追加処理

Q5 の回答に応じて分岐。CLAUDE.md の「6. パターン集」を参照して必要な依存を追加し、最小限のスキャフォールドを作る:

- A (Web): 何もしない（デフォルトの `src/app/page.tsx` のまま）
- B (LINE): `npm install @line/bot-sdk` & `src/app/api/line/webhook/route.ts` の雛形作成
- C (Discord): `npm install discord-interactions` & `src/app/api/discord/interactions/route.ts` の雛形作成
- D (Slack): `npm install @slack/bolt` & `src/app/api/slack/events/route.ts` の雛形作成
- E (Chatwork): `src/app/api/chatwork/webhook/route.ts` の雛形作成
- F (その他): ユーザーに詳細をヒアリングし、対応可否を判断

### ステップ11: 初期DBスキーマ・migration

Auth.js を使う前提で `src/db/schema.ts` に Auth.js v5 用テーブル（users, accounts, sessions, verificationTokens）を追記。
`npm run db:generate` で `drizzle/0000_initial.sql` を生成。
development branch に `npm run db:migrate` で適用。

### ステップ12: 初回コミットとデプロイ

```bash
git add .
git commit -m "chore: initial setup via /setup skill

- Created Vercel project
- Created Neon DB project (3 branches)
- Configured env vars
- Initial migration applied to development branch
- Frontend type: <Q5の回答>"

git push origin staging
```

### ステップ13: デプロイ完了を待つ

Vercel MCP でデプロイステータスを polling（最大5分）。
完了したらステージングURLを取得。

### ステップ14: 意思決定ログを書く

`ai/doc/03-decisions.md` に追記:

```markdown
## <YYYY-MM-DD>: 初期スタックを Next.js + Drizzle + Auth.js + Vercel + Neon に決定

### 文脈
vibe-coding-template から派生した初期セットアップ。

### 採用案
Next.js 15 (App Router) + TypeScript + Drizzle ORM + Auth.js v5 + Tailwind v4 + shadcn/ui + Vitest + Playwright

### 不採用案と理由
- Prisma: スキーマ独自言語が非エンジニアに負担、マイグレーション差分が見にくい
- Pages Router: App Router が標準
- Jest: Vitest の方が Vite/Next.js 親和性◎

### 結果
このスタックで MVP を構築する。引き継ぎ後のエンジニアもこの前提で開発継続。
```

### ステップ15: 完了レポート

ユーザーに以下を表示:

```
✅ セットアップ完了！

📍 ステージングURL: <https://...vercel.app>
📂 GitHub: <repo URL>
🗄️ Neon DB: <project URL>
☁️ Vercel: <project URL>

次は何を作りますか？例えば:
  - 「ログイン画面を作って」
  - 「ユーザー一覧画面を作って」
  - 「タスク管理機能を追加して」

なんでも話しかけてください。
```

## 注意事項

- このスキルは**初回1回のみ**実行する想定。2回目以降は何もしない
- すべての MCP 呼び出しでエラーハンドリング。失敗したらユーザーに見せて指示を仰ぐ
- API トークン関連のエラー（権限不足等）は、ユーザーに「権限が足りません。エンジニアに連絡してください」と伝える
- ユーザーの回答が短すぎる/曖昧な場合、もう少し具体的に聞き返す（特に Q1〜Q4）
- ステップ間でユーザーに「進めていいですか？」と確認は**しない**（裁量で進める）。ただし重大なエラー時は止まる
