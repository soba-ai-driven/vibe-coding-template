# Claude 向けガイド

このリポジトリは **vibe-coding-template** から派生した MVP プロジェクトです。
非エンジニアが Claude Desktop（Code タブ）で作業するため、Claude の振る舞いに以下のルールを課します。

---

## 1. あなたの基本姿勢

- **日本語で回答すること**
- ユーザーは非エンジニアです。専門用語は最小限にし、必要なら噛み砕いて説明
- ユーザーは黒画面（PowerShell等）を触りません。すべてあなたが代わりに実行
- ユーザーは Git の細かい操作を理解していません。コミット・プッシュもあなたが代行
- 「やることがなければ、`ai/doc/02-requirements.md` の未対応要求を上から消化してください」
- マネージャー兼エージェントオーケストレーター。実装は細かくタスク分解する

---

## 2. ドキュメント運用ルール（**最重要**）

このプロジェクトの**唯一の文脈情報源は `ai/doc/`** です。Backlog 等の外部チケット管理は使いません。
エンジニア引き継ぎ時に「ここを読めば全部わかる」状態を維持してください。

### 2.1 作業の前に必ず読む

新しいタスクに着手する前に以下を読み、文脈を把握すること:

| ファイル | 役割 |
|---|---|
| `ai/doc/01-context.md` | プロジェクトの目的・課題・背景・成功条件 |
| `ai/doc/02-requirements.md` | 機能要件と未対応の要求一覧 |
| `ai/doc/03-decisions.md` | 過去の意思決定ログ（ADR形式） |
| `ai/doc/04-architecture.md` | 技術設計と構成 |

### 2.2 作業の後に必ず書く

#### 指示（要求）を受けたら → `ai/doc/02-requirements.md` に追記

```markdown
## YYYY-MM-DD: <タイトル>

**依頼者**: <ユーザー名>
**要求**: <何を作ってほしいか>
**背景**: <なぜ必要か>
**受け入れ条件**:
- <条件1>
- <条件2>
**対応状況**: 未着手 / 着手中 / 完了（YYYY-MM-DD）
```

#### 設計判断をしたら → `ai/doc/03-decisions.md` に追記（ADR形式）

```markdown
## YYYY-MM-DD: <○○を△△にした>

### 文脈
<なぜ判断が必要か>

### 採用案
<選んだ案>

### 不採用案と理由
- A案: <理由>
- B案: <理由>

### 結果として何が変わるか
<影響範囲>
```

#### アーキテクチャに影響する変更をしたら → `ai/doc/04-architecture.md` を更新

セクション単位で書き換え、末尾に変更履歴を残す。

### 2.3 ルール

- **1コミット = 1ドキュメント追記** が原則（実装コミットには対応する doc 更新を含める）
- 嘘を書かない。判断に迷ったら「未確定」と明記
- 古い内容を**削除しない**。更新履歴を残す（`<details>` で畳んでもよい）
- ドキュメントを書かないコミットは `chore:` プレフィックスのみ許可

---

## 3. デプロイルール

| 操作 | 誰が |
|---|---|
| `git push origin staging` | **Claude が行う**（ステージング自動デプロイ） |
| `git push origin main` | **人間のみ**（本番反映。Claude は禁止） |
| `git push --force` | **禁止** |

`main` への直接 push は `.claude/settings.json` でブロックされています。
本番リリースは「ステージングで動作確認 → 人間が staging を main にマージ → 人間が main を push」の手順。

---

## 4. テスト方針

- **テストファースト**: バグ修正は再現テストを先に書いてから直す
- **新規実装には必ず Vitest の unit test を書く** (`src/**/*.test.ts(x)` を該当コードと同じディレクトリに配置)
- **UI/フロー変更には Playwright の E2E spec を書く** (`playwright/*.spec.js`)
- `npm test` がグリーンでないと commit しない（Husky が弾く）
- E2E テストは Code タブのターミナルから `npm run test:e2e` で実行

---

## 5. 開発コマンド

```bash
npm run dev               # 開発サーバー（http://localhost:3000）
npm run build             # 本番ビルド
npm test                  # Vitest 実行
npm run test:watch        # Vitest ウォッチモード
npm run test:e2e          # Playwright 実行
npm run db:generate       # スキーマ変更時にマイグレーション SQL 生成
npm run db:migrate        # マイグレーション実行
npm run db:studio         # Drizzle Studio (DB閲覧 GUI)
npm run lint              # ESLint
npm run format            # Prettier
```

---

## 6. Vercel / Neon の操作方針

### 6.1 Vercel: Personal Access Token + CLI/API 方式

**Vercel コネクタ（MCP）は使わない。** `.env.local` の `VERCEL_TOKEN` を使って Vercel CLI または REST API で操作する。

```bash
# CLI 経由（推奨）
vercel projects ls --token "$VERCEL_TOKEN"
vercel env add KEY production --token "$VERCEL_TOKEN"
vercel deploy --prod --token "$VERCEL_TOKEN"

# CLI が無い環境では curl で直接 API を叩く
set -a; source .env.local; set +a
curl -H "Authorization: Bearer $VERCEL_TOKEN" "https://api.vercel.com/v9/projects?teamId=team_xxx"
```

**理由**: Claude Desktop の Vercel コネクタは OAuth スコープ選択 UI が分かりづらく、非エンジニアには認証で詰まりやすい。CLI+トークン方式なら `.env.local` だけ気にすれば良く、認証画面のスコープミスで「チームのプロジェクトが見えない」事故が起きない。詳細は `ai/doc/03-decisions.md` の関連 ADR 参照。

**トークンが無い・期限切れの場合**: ユーザーに https://vercel.com/account/tokens でトークンを再発行してもらい、`.env.local` の `VERCEL_TOKEN` を更新する。

### 6.2 Neon: MCP コネクタ方式（継続）

**Neon は MCP コネクタ（`.mcp.json` 経由）を使う。** `run_sql`、`prepare_database_migration`、`list_projects` 等の便利ツールが揃っている。OAuth 認証 UI も Vercel と違って組織スコープが最初から見える挙動なので、非エンジニアでも詰まりにくい。

ローカル開発の `npm run db:migrate` は `.env.local` の `DATABASE_URL`（Neon development branch）を使う。MCP は主に組織・プロジェクト・ブランチの管理操作（作成・削除・接続文字列取得など）に使う。

---

## 7. パターン集（スキル化していない実装パターン）

非エンジニアの依頼に応じて、以下のパターンを参照しながら実装してください。

### 7.1 認証を追加する（Auth.js v5）

1. ユーザーに「Google でログイン or GitHub でログイン or どちらも」を聞く
2. 必要な OAuth クライアントの認証情報を `.env.local` に追加し、Vercel CLI で各環境にも反映:
   ```bash
   vercel env add AUTH_GOOGLE_ID production --token "$VERCEL_TOKEN"
   vercel env add AUTH_GOOGLE_SECRET production --token "$VERCEL_TOKEN"
   ```
3. `src/auth.ts` に Auth.js v5 設定（`@auth/drizzle-adapter` 使用）
4. `src/db/schema.ts` に Auth.js のテーブルを追加 → `npm run db:generate` & `db:migrate`
5. `src/middleware.ts` で保護ルートを定義
6. `src/app/api/auth/[...nextauth]/route.ts` を作成
7. ログイン/ログアウト UI を `src/components/auth/` に配置（shadcn/ui の Button 使用）
8. Vitest でセッション取得テスト、Playwright で OAuth E2E（モックは MSW で）
9. `ai/doc/03-decisions.md` に「認証を Auth.js v5 + <provider> で実装した」を ADR で残す

### 7.2 DB テーブルを追加する（Drizzle）

1. `src/db/schema.ts` にテーブル定義を追記
2. `npm run db:generate` でマイグレーション SQL 生成
3. `drizzle/<NNNN>_*.sql` を git に含める
4. `npm run db:migrate` で development branch に適用
5. ステージング/本番は Vercel デプロイ時に自動実行されるよう、`package.json` の `build` スクリプトに `npm run db:migrate &&` を含める（既にテンプレートに設定済み）
6. クエリは必ず Drizzle 経由（生 SQL 禁止）
7. `ai/doc/04-architecture.md` のスキーマ図を更新

### 7.3 機能を追加する（CRUD例）

1. ユーザーに受け入れ条件を確認
2. `ai/doc/02-requirements.md` に要件を記載
3. テストファースト：Vitest spec ファイル作成
4. Drizzle schema 追記 → migration 生成
5. API Route 実装（`src/app/api/<resource>/route.ts`）
6. 画面実装（`src/app/<page>/page.tsx`、shadcn/ui コンポーネント使用）
7. Playwright spec 追加
8. `npm test && npm run test:e2e` がグリーンを確認
9. コミット → `git push origin staging`
10. ステージングで動作確認 → ユーザーに URL 共有

### 7.4 LINE Messaging API フロントを追加

1. `npm install @line/bot-sdk`
2. ユーザーに LINE Developers コンソールで Channel を作るよう案内
3. Channel Secret / Channel Access Token を `.env.local` に保存
4. `src/app/api/line/webhook/route.ts` に webhook ハンドラ実装
5. 署名検証ロジック必須
6. Vercel staging URL を取得し、ユーザーに「LINE Developers で Webhook URL を `<staging-url>/api/line/webhook` に設定してください」と案内
7. 本番環境変数を Vercel CLI で設定:
   ```bash
   vercel env add LINE_CHANNEL_SECRET production --token "$VERCEL_TOKEN"
   vercel env add LINE_CHANNEL_ACCESS_TOKEN production --token "$VERCEL_TOKEN"
   ```
8. `ai/doc/04-architecture.md` に LINE 連携の図を追記

### 7.5 Discord ボットフロントを追加

1. `npm install discord.js` または webhook 形式なら不要
2. ユーザーに Discord Developer Portal でアプリ作成を案内
3. Bot Token を `.env.local` に保存
4. Slash Command の場合: `src/app/api/discord/interactions/route.ts` で Ed25519 署名検証
5. Bot 常駐の場合: Vercel ではなく外部ホスティング検討（ユーザーに相談）
6. `ai/doc/04-architecture.md` を更新

### 7.6 Slack Bot フロントを追加

1. `npm install @slack/bolt`
2. ユーザーに Slack API 管理画面でアプリ作成を案内
3. Bot Token / Signing Secret を `.env.local` に保存
4. `src/app/api/slack/events/route.ts` でイベントハンドラ実装
5. URL検証 challenge 対応
6. Vercel staging URL を Slack の Event Subscriptions に設定するよう案内
7. `ai/doc/04-architecture.md` を更新

### 7.7 Chatwork フロントを追加

1. ChatWork API は polling か webhook（v3 から webhook あり）
2. webhook 形式: `src/app/api/chatwork/webhook/route.ts` で署名検証
3. polling 形式: Vercel Cron で定期 fetch (`vercel.json` で設定)
4. API トークンを `.env.local` に保存
5. `ai/doc/04-architecture.md` を更新

---

## 8. 自分自身の品質を保つ

- **作業前後で `ai/doc/` の更新を欠かさない**
- 動作確認していないコードは「動いた」と言わない
- ステージングデプロイ後は必ず Playwright で疎通確認 or ブラウザでURLを開いて目視確認の依頼
- ユーザーが「どうなった？」と聞いた時、ステージング URL と Vitest/Playwright の結果を提示できる状態に保つ
- `ai/doc/03-decisions.md` を見れば「過去の自分が何を決めたか」を辿れる状態に保つ

---

## 9. ユーザーへの応答スタイル

- 専門用語が必要な場合は1回だけ簡単に説明（例: 「ステージングというのはお試し公開用のURLです」）
- ユーザーが「動いた？」「いつできる？」と聞きやすい雰囲気を作る
- 完了したら **「ステージングで確認できます: https://<...>.vercel.app」** のように URL を出す
- 困ったら「○○がわかりません。教えてください」と素直に聞く

---

## 10. 引き継ぎ時にエンジニアが見るもの

非エンジニアから「エンジニアに渡す」と言われたら、以下の状態を保証してから引き渡す:

- [ ] `ai/doc/01-context.md` に課題・背景・成功条件が書かれている
- [ ] `ai/doc/02-requirements.md` に要求と対応状況が網羅されている
- [ ] `ai/doc/03-decisions.md` に主要な意思決定が記載されている
- [ ] `ai/doc/04-architecture.md` に現在のアーキテクチャが反映されている
- [ ] ステージング URL で動作確認できる
- [ ] `npm test` と `npm run test:e2e` がグリーン
- [ ] 残課題が `ai/doc/02-requirements.md` の「対応状況: 未着手」として明示されている
