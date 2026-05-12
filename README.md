# 🚀 vibe-coding-template

> Claude Desktop で MVP を生やすためのテンプレート。
> 非エンジニア向け。黒画面（コマンドプロンプト）を使わずに、Web アプリを作って公開できます。

---

## このテンプレートで何ができる？

- **アイデアを Claude に話すだけで Web アプリが作れる**
- 自動的に GitHub・Vercel（公開先）・Neon（データベース）が設定される
- ステージング URL でいつでも動作確認できる
- 必要に応じてエンジニアにそのまま引き継げる（リポジトリも履歴も全部残る）

---

## はじめてのプロジェクト立ち上げ（初回のみ）

> 初回はハンズオンでエンジニアと一緒にやることを推奨します。
> 詳細手順は [`ONBOARDING.md`](./ONBOARDING.md) を読んでください。

### Step 1. 必要なものを準備（既に揃っていれば飛ばす）

- ✅ Windows PC（Home Edition でも可）
- ✅ Node.js + Git for Windows インストール済み（`node -v` / `git -v` でバージョンが返ること）
- ✅ Claude（Team プラン）に招待メールからサインアップ済み（soba-project.com の Google アカウントで参加、https://claude.ai でチーム名「SOBA Project」が見える）
- ✅ GitHub アカウント（組織に招待されていること）
- ✅ Vercel アカウント（GitHub サインインで作成、Team 招待済み）
- ✅ Neon アカウント（GitHub サインインで作成、Organization 招待済み）
- ✅ [Claude Desktop](https://claude.com/download) インストール済み
- ✅ [GitHub Desktop](https://desktop.github.com/) インストール済み
- ✅ [GitHub CLI（gh）](https://cli.github.com/) インストール済み（`gh auth status` でログイン済みを確認）

### Step 2. 自分のリポジトリを作る

1. GitHub の `vibe-coding-template` リポジトリのページを開く

https://github.com/soba-ai-driven/vibe-coding-template


2. 右上の緑色のボタン **「Use this template」** → **「Create a new repository」**

3. Owner に soba-ai-driven を選択

4. リポジトリ名を入力（例: `kaidan-mvp`）

5. Choose visibility で **Private** を選択

6. **Create repository** をクリック


### Step 3. パソコンに持ってくる（clone）

1. GitHubオーガニゼーションのリポジトリ一覧を開く

https://github.com/orgs/soba-ai-driven/repositories


2. 作ったばかりのリポジトリを探して開く

上記例では、URLはこうなる
https://github.com/soba-ai-driven/kaidan-mvp

3. **「Code」** ボタン → **「Open with GitHub Desktop」**

3. GitHub Desktop が開くので、**Local path** を確認 `C:\Users\<あなたの名前>\Documents\GitHub\kaidan-mvp` しメモする

4. **「Clone」** をクリック

### Step 4. Claude Desktop で開く

1. Claude Desktop を起動する

2. 左サイド上部の **「</> Code」** タブに切り替え

3. [+New session]をクリック

3. **「Open folder」** → さっき clone したフォルダを選ぶ


@@@ 今ここまで@@@

4. MCP サーバー（Neon）の承認を求めるプロンプトが表示されたら**許可**する

5. チャット欄に `/mcp` と入力して Enter → Neon が表示されたら画面の指示に従いブラウザで OAuth 認証する
   （Vercel は `/setup` 実行時に Personal Access Token を発行する方式に変更したので、`/mcp` には出ません）

6. Claude が自己紹介してくれる

### Step 5. セットアップを実行

#### 5-1. スラッシュコマンドの使い方（初回だけ読めばOK）

Claude には「**スラッシュコマンド**」という、よく使う作業をまとめたボタンのようなものがあります。チャット欄で `/` を入力すると候補が出てきます。

> ⚠️ **よくあるつまずき**
>
> - **必ず半角の `/` で打つ**こと。日本語入力（IME）がオンのままだと全角の「／」になり、候補が出ません。画面右下のIMEアイコンを「**A**」に切り替えてから入力してください。
> - **Claude Desktop を開いた直後は候補に出ないことがあります**。Neon との接続準備や、フォルダ信頼確認に数秒〜十数秒かかるためです。**10秒くらい待ってからもう一度 `/` を打ち直す**と出てきます。
> - それでも候補が出ない場合は、Step 4 で「MCPサーバーの承認」をスキップした可能性があります。Claude のチャット欄に「**MCPサーバーを承認したい**」と日本語で話しかけてください。Claude が手順を案内します。

#### 5-2. `/setup` を実行

チャット欄でこう話しかけてください:

> 「`/setup` を実行して」

Claude がいくつか質問してきます。考えていることを**そのまま日本語で**答えてOKです（文章でも箇条書きでも）。

| 質問 | 答え方の例 |
|---|---|
| このMVPで解決したい課題は？ | 「毎月の日報集計が手作業で2時間かかっていてつらい」 |
| なぜ今これを作る？背景は？ | 「来月から人員が減るので、まずは自分の作業を自動化したい」 |
| 想定ユーザーは誰？ | 「最初は自分だけ。うまくいったら同じ部署の3人にも使ってもらう」 |
| 何ができたら成功？ | 「毎日10分以内に集計が終わる」「ボタン一つで Slack に投稿される」など |
| フロントエンドは？ | Webアプリ / LINE / Discord / Slack / Chatwork / その他 から選ぶ |

> 💡 答えに迷ったら「わからない」「あとで決めたい」と言ってOKです。Claude が一緒に考えてくれます。

途中で Vercel の Personal Access Token（PAT）が必要になります。Claude が「Vercel の Token を発行してください」と案内してきたら、画面の指示に従ってブラウザで発行し、チャットに貼り付けてください。

#### 5-3. 待つ

回答が終わると Claude が**5〜10分**かけて以下を自動でやります:

1. GitHub・Vercel・Neon を紐付け
2. データベースを作成
3. 環境変数（パスワード類）を設定
4. 初回デプロイ

途中で Claude が止まったように見えても、**そのまま待ってください**。長い処理を黙々と進めているだけのことが多いです。10分以上動きが無ければ「いまどこまで進んだ？」と聞いてください。

#### 5-4. 完了の確認

完了すると、Claude が**ステージング URL** を教えてくれます。例:

> ✅ セットアップ完了しました。ステージングで確認できます: https://my-mvp-abc123.vercel.app

> 💡 **ステージング URL とは**
> お試し公開用のアドレスです。本番リリース前の「動く Web ページ」で、URLを知っている人だけが見られます。スマホ・PC どちらのブラウザでも開けます。

URL を開いて、画面が表示されれば成功です 🎉

---

## 普段の使い方

セットアップ後は、Claude に話しかけるだけです。

```
あなた: 「ログイン画面を作って」
Claude: → 自動的に Auth.js を設定して、デプロイまで完了
        → ステージング URL でログインを確認できます

あなた: 「ユーザーが投稿できる掲示板を作って」
Claude: → DB スキーマ追加 → API → 画面 → テスト → デプロイ
        → ステージング URL で動作確認できます
```

何か作りたい機能を伝えるだけで、Claude が:
- 設計を考える
- 実装する
- テストを書く
- ステージングにデプロイする
- どこでどう確認するかを教えてくれる

までやってくれます。

---

## ファイル構造の概要（知らなくても大丈夫）

```
my-mvp/
├── ai/doc/              ← 📝 プロジェクトの記録（Claudeが自動更新）
│   ├── 01-context.md    ← プロジェクトの目的・背景
│   ├── 02-requirements.md ← 依頼の履歴
│   ├── 03-decisions.md  ← 設計判断の理由
│   └── 04-architecture.md ← 技術構成
│
├── src/                 ← 💻 アプリのソースコード（Claudeが書く）
├── public/              ← 画像など
├── playwright/          ← 🧪 E2Eテスト
│
├── README.md            ← このファイル
├── ONBOARDING.md        ← 初回ハンズオン用
├── CLAUDE.md            ← 🤖 Claude向けの指示書
└── package.json         ← 依存パッケージ一覧
```

**触らなくていいファイル:**
- `node_modules/`、`.next/`、`drizzle/` など — Claude が自動で管理
- `.env.local` — 機密情報。Claude が作ります。**絶対にコミットしない**

**目を通すと良いファイル:**
- `ai/doc/01-context.md` — このプロジェクトが何のために作られたか
- `ai/doc/02-requirements.md` — どんな依頼をしたか・対応状況

---

## 困った時

### Claude が止まった / おかしな動きをした

- そのまま「もう一度試して」と話しかける
- それでもダメなら、`ai/doc/02-requirements.md` を見て自分で進捗を確認
- エンジニアに相談（GitHub の Issues か Slack 等）

### ステージング URL が表示されない

- Claude に「ステージングのURLを教えて」と聞く
- それでもダメなら `ai/doc/01-context.md` の「動作環境」を見る

### 自分の作業を別の人に渡したい

Claude に伝えてください:

> 「これをエンジニアに引き継ぎたい」

Claude が `ai/doc/` の整備状況を確認し、不足があれば質問してきます。
完了したらリポジトリの URL をエンジニアに渡すだけです。

---

## 引き継ぎを受けるエンジニアへ

このプロジェクトは非エンジニアが Claude Desktop で立ち上げた MVP です。
全文脈は `ai/doc/` に集約されています。

```bash
git clone <repo>
cd <repo>
cat ai/doc/01-context.md     # まずこれを読む
cat ai/doc/02-requirements.md # 何が要求されてきたか
cat ai/doc/03-decisions.md    # なぜそう設計されているか
cat ai/doc/04-architecture.md # 現在の構成
npm install
cp .env.example .env.local    # 必要に応じて値を埋める
npm run dev
```

CLAUDE.md にデプロイルール・テスト方針が書かれています。
本番リリース（`main` への push）は人間のみが行うルールです。
