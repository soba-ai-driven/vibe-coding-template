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
- [ ] Claude Desktop の Settings → Connectors で **Neon が OAuth 接続済み**（Vercel はコネクタを使わない方針なので不要）
- [ ] `gh` コマンドが使える（`gh auth status` でログイン済みを確認）
- [ ] Node.js + Git for Windows がローカルにインストール済み（`node -v` / `git -v` で確認可能）
- [ ] このリポジトリが `~/Documents/GitHub/<repo-name>` に clone されている
- [ ] Claude Desktop の Code タブでこのフォルダが開かれている

## 実行手順

### ステップ1: 既に実行済みかチェック

`.env.local` が存在し `DATABASE_URL` が空でなければ「既にセットアップ済みです」と伝えて終了。
強制再実行したい場合は明示的に `/setup --force` のような指示を求める（基本は推奨しない）。

### ステップ2: 自己紹介と概要説明 + Vercel トークン取得

ユーザーに以下を伝える:

```
こんにちは。これからこのプロジェクトの初期セットアップを行います。

具体的には:
  1. Vercel のアクセストークンを発行してもらいます（最初の1分だけ手作業）
  2. このプロジェクトの目的を聞きます
  3. Vercel と Neon にプロジェクトを自動で作ります
  4. 環境変数を自動で設定します
  5. ステージング（お試し公開）の URL を立ち上げます

5〜10分程度かかります。途中いくつか質問させてください。
```

続けて、Vercel トークンの取得手順を案内する:

```
最初に Vercel のアクセストークンを発行してください（1分で終わります）:

1. ブラウザで https://vercel.com/account/tokens を開く
2. 「Create Token」をクリック
3. 以下を入力して「Create」:
   - Token Name: claude-<このリポジトリ名>
   - Scope: 該当チーム（例: SOBA AI Driven）を選択 ← 重要
   - Expiration: お好み（No Expiration でも 1 year でも OK）
4. 表示された vercel_xxx... の文字列をコピーしてこのチャットに貼り付け
   ⚠️ 1回しか表示されないので必ず即コピー
```

ユーザーがトークンを貼り付けたら、即座に `.env.local` に保存:

```
VERCEL_TOKEN=<受け取った値>
```

> `.env.local` は `.gitignore` 済みなので公開リポジトリには上がらない（必ず `git check-ignore .env.local` で確認）。

### ステップ3: コンテキスト初期化（対話）

**1問ずつ**質問する。Q1を送って回答を得てから次のQ2を送る、を繰り返す（複数質問を一度に並べない）:

- Q1. このMVPで解決したい課題は何ですか？（自由記述）
- Q2. なぜ今これを作るのですか？背景を教えてください。（自由記述）
- Q3. 想定ユーザーは誰ですか？（例: 営業担当、店舗スタッフ、社内全員）
- Q4. 何ができたら成功と言えますか？（成功条件・KPI 等）
- Q5. フロントエンドは何にしますか？（選択肢を提示する）
  - A) Web画面（普通のブラウザで使うアプリ）
  - B) LINE公式アカウント
  - C) Discord ボット
  - D) Slack ボット
  - E) Chatwork ボット
  - F) その他（自由記述）

各回答を得たら、簡単に復唱して認識を合わせてから次の質問に進む。

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

### ステップ4: GitHub リポジトリ情報を取得・git hook を有効化

`gh` CLI を使って:

```bash
gh repo view --json name,owner,defaultBranchRef
gh repo view --json url
```

- リポジトリ名（owner/name）とデフォルトブランチを取得
- **オーガニゼーションが `soba-ai-driven` であることを確認する**。異なる場合はユーザーに確認を求めて処理を止める

push 制限の git hook (`.husky/pre-push`) は、後続の `npm install`（ステップ10）で Husky が自動的に有効化する。ここでは何もしなくてよい。

staging ブランチが存在するかチェック:

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

Vercel CLI（または REST API）で実行:

1. `set -a; source .env.local; set +a` で `VERCEL_TOKEN` を読み込む
2. チーム ID を取得（curl で `GET /v2/teams` を叩く）
3. プロジェクト作成（名前 = リポジトリ名、teamId を指定）
   ```bash
   curl -X POST -H "Authorization: Bearer $VERCEL_TOKEN" \
     -H "Content-Type: application/json" \
     "https://api.vercel.com/v9/projects?teamId=team_xxx" \
     -d '{"name":"<repo-name>","framework":"nextjs","gitRepository":{"type":"github","repo":"<owner>/<repo>"}}'
   ```
4. プロダクションブランチ = `main`、`staging` を Preview 対象として扱う（Vercel のデフォルトでも全ブランチが Preview にデプロイされる）
5. プロジェクトの Vercel ダッシュボード URL を控えてユーザーに見せる

**Vercel コネクタ（MCP）は使わない。** 詳細は `CLAUDE.md` の「6.1 Vercel: Personal Access Token + CLI/API 方式」参照。

### ステップ6: Neon プロジェクト作成

Neon MCP で:

1. 既存 Organization 配下にプロジェクト作成（名前 = リポジトリ名）
2. 3 ブランチ作成（development / staging / production）
3. 各ブランチの接続文字列（DATABASE_URL）を取得

### ステップ7: 環境変数を Vercel に設定

Vercel CLI または REST API で各環境ごとに設定:

| 環境 | DATABASE_URL | AUTH_SECRET | AUTH_URL |
|---|---|---|---|
| Production | Neon production branch URL | `openssl rand -base64 32` で生成 | プロダクションURL |
| Preview | Neon staging branch URL | 同上 | プレビューURL |
| Development | （ローカル用、Vercel側は未設定でOK） | — | — |

REST API での設定例:

```bash
curl -X POST -H "Authorization: Bearer $VERCEL_TOKEN" \
  -H "Content-Type: application/json" \
  "https://api.vercel.com/v10/projects/<project-id>/env?teamId=team_xxx" \
  -d '{"key":"DATABASE_URL","value":"<connection-string>","type":"encrypted","target":["production"]}'
```

> 同じ KEY を `production` / `preview` 両方に登録するには別 API call で発行する。

### ステップ8: `.env.local` を更新

ステップ2で先に `VERCEL_TOKEN` を保存済みなので、以下を追記:

```
DATABASE_URL=<Neon development branch の接続文字列>
AUTH_SECRET=<新規生成>
AUTH_URL=http://localhost:3000
```

最終的な `.env.local` は以下のような内容になる:

```
VERCEL_TOKEN=vcp_xxx...
DATABASE_URL=postgresql://...neon.tech/...
AUTH_SECRET=base64-encoded-string
AUTH_URL=http://localhost:3000
```

### ステップ9: Backlog 連携設定（任意）

ユーザーに確認する:

```
Backlog を使っていますか？連携する場合は API キーを発行してください（1分で終わります）。

スペースのドメイン（例: your-space.backlog.jp）と、
以下の手順で発行した API キーを教えてください:
  1. https://<スペース名>.backlog.jp/EditApiSettings.action を開く
  2. 「APIキーの登録」→ メモに「claude-<このリポジトリ名>」→「登録」
  3. 発行されたキーをコピーしてこのチャットに貼り付け

Backlog を使わない場合は「スキップ」と言ってください。
```

**スキップ**の場合 → このステップを飛ばして次へ。

**連携する**場合、以下を順に実行:

受け取った情報を `.env.local` に追記:
```
BACKLOG_DOMAIN=<スペース名>.backlog.jp
BACKLOG_API_KEY=<受け取った値>
```

`.mcp.json` に Backlog の設定を追記（neon の設定は残したまま追加する）:
```json
"backlog": {
  "command": "npx",
  "args": ["-y", "@nulab/backlog-mcp-server@latest"],
  "env": {
    "BACKLOG_DOMAIN": "<スペース名>.backlog.jp",
    "BACKLOG_API_KEY": "<受け取った値>"
  }
}
```

`.mcp.json` を gitignore してトラッキングを外す（API キーをコミットしないため）:
```bash
echo '.mcp.json' >> .gitignore
git rm --cached .mcp.json
```

ユーザーに伝える: 「Backlog の設定完了しました。`.mcp.json` はローカルのみの管理になります。Claude Desktop を再起動すると Backlog MCP が使えるようになります。」

### ステップ10: 依存インストール

```bash
npm install
```

エラーが出たらユーザーに見せて、解決策を提示。

### ステップ11: フロントエンド種別ごとの追加処理

Q5 の回答に応じて分岐。CLAUDE.md の「7. パターン集」を参照して必要な依存を追加し、最小限のスキャフォールドを作る:

- A (Web): 何もしない（デフォルトの `src/app/page.tsx` のまま）
- B (LINE): `npm install @line/bot-sdk` & `src/app/api/line/webhook/route.ts` の雛形作成
- C (Discord): `npm install discord-interactions` & `src/app/api/discord/interactions/route.ts` の雛形作成
- D (Slack): `npm install @slack/bolt` & `src/app/api/slack/events/route.ts` の雛形作成
- E (Chatwork): `src/app/api/chatwork/webhook/route.ts` の雛形作成
- F (その他): ユーザーに詳細をヒアリングし、対応可否を判断

### ステップ12: 初期DBスキーマ・migration

Auth.js を使う前提で `src/db/schema.ts` に Auth.js v5 用テーブル（users, accounts, sessions, verificationTokens）を追記。
`npm run db:generate` で `drizzle/0000_initial.sql` を生成。
development branch に `npm run db:migrate` で適用。

### ステップ13: 初回コミットとデプロイ

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

### ステップ14: デプロイ完了を待つ

Vercel REST API でデプロイステータスを polling（最大5分）:

```bash
# 最新デプロイのステータスを取得
curl -H "Authorization: Bearer $VERCEL_TOKEN" \
  "https://api.vercel.com/v6/deployments?projectId=<project-id>&teamId=team_xxx&limit=1"
# .deployments[0].state が "READY" になるまで待つ
```

完了したら `.deployments[0].url` をステージング URL として取得。

### ステップ15: 意思決定ログを書く

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

### ステップ16: 完了レポート

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
- Vercel API/CLI 呼び出しと Neon MCP 呼び出しはどちらも失敗ハンドリング必須。失敗したらユーザーに見せて指示を仰ぐ
- Vercel トークン関連のエラー（401 / 403）が出たら、ユーザーに `https://vercel.com/account/tokens` でトークン再発行を依頼し、新しいトークンを `.env.local` の `VERCEL_TOKEN` に上書き
- Neon の権限不足等は、ユーザーに「Neon コネクタの認証が切れているかもしれません」と Settings → コネクタの確認を依頼
- ユーザーの回答が短すぎる/曖昧な場合、もう少し具体的に聞き返す（特に Q1〜Q4）
- ステップ間でユーザーに「進めていいですか？」と確認は**しない**（裁量で進める）。ただし重大なエラー時は止まる
