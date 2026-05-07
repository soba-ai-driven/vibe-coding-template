# 意思決定ログ（ADR）

> 設計判断をしたら、このファイルに ADR (Architecture Decision Record) 形式で追記してください。
> 「なぜそう決めたか」が永遠に残るように。

---

## 書き方テンプレート

```markdown
## YYYY-MM-DD: <○○を△△にした>

### 文脈
<なぜ判断が必要か。背景情報>

### 採用案
<選んだ案>

### 不採用案と理由
- A案: <理由>
- B案: <理由>

### 結果として何が変わるか
<実装上の影響、運用上の影響>

### 関連
- 要件: ai/doc/02-requirements.md の <セクション>
- 実装コミット: <hash>
```

---

## 過去の決定（テンプレート由来）

<details>
<summary>2026-04-28: Backlog などの外部チケット管理を使わず ai/doc/ で文脈管理する</summary>

### 文脈
非エンジニアの MVP 開発で、Backlog やGitHub Issues などの外部チケット管理を使うか検討。

### 採用案
すべての文脈情報を `ai/doc/*.md` に集約。Git 履歴と組み合わせて引き継ぎに十分な情報量を保つ。

### 不採用案と理由
- Backlog: 非エンジニアが新しいSaaSを覚える負担。プロジェクト数制限。年50件のMVPに対してプラン枯渇リスク
- GitHub Issues: 引き継ぎ時にissueの状態を整理するコスト。doc とのデュアル管理で齟齬発生

### 結果として何が変わるか
- 文脈情報は1箇所に集約され、エンジニアが clone しただけで全文脈を読める
- 非エンジニアが覚えるツールは Claude Desktop / GitHub Desktop の2つだけ
- Claude が CLAUDE.md のドキュメント運用ルールに従って自動でドキュメントを更新する

</details>

<details>
<summary>2026-04-28: 初期スタックを Next.js + Drizzle + Auth.js + Vercel + Neon に決定</summary>

### 文脈
vibe-coding-template の標準スタック選定。

### 採用案
- Framework: Next.js 15 (App Router) + TypeScript
- ORM: Drizzle
- Auth: Auth.js v5
- UI: shadcn/ui + Tailwind CSS v4
- Test: Vitest + Playwright
- Deploy: Vercel
- DB: Neon PostgreSQL

### 不採用案と理由
- Prisma: スキーマ独自言語が非エンジニアに負担。マイグレーション差分が SQL で読めない
- Pages Router: App Router が標準
- Jest: Vitest の方が Vite/Next.js 親和性◎
- Supabase: Vercel との統合は Neon の方がスムーズ。MCP も公式

### 結果として何が変わるか
- すべての MVP がこのスタックで開始される
- 引き継ぎ後のエンジニアもこの前提で開発継続
- スタック変更したい場合は新規 ADR を起こす

</details>

---

<details>
<summary>2026-04-29: MCP は Claude Desktop の Connectors 経由で接続し、.mcpb バンドルは配布しない</summary>

### 文脈
GitHub / Vercel / Neon / Playwright の4つの MCP を非エンジニアに配布する方法を検討。当初は `.mcpb` で1ファイル配布を想定していたが、調査の結果以下が判明:

- `.mcpb` は1ファイル=1MCPサーバーが原則（複数を束ねるには FastMCP プロキシが必要）
- Vercel MCP / Neon MCP は**リモートMCP のみ提供**（`mcp.vercel.com`、`mcp.neon.tech`）
- GitHub も公式リモートMCP（OAuth）が利用可能
- Playwright MCP は **E2E テスト実行に不要**（`npm run test:e2e` で十分。Claude が直接ブラウザを操作する必要がない）

### 採用案
- **GitHub / Vercel / Neon** は Claude Desktop の **Connectors（OAuth）で接続**
- **Playwright MCP は採用しない**。E2E テストは `npm run test:e2e` で実行
- `.mcpb` バンドルは作らない
- ハンズオン（ONBOARDING.md）で「Settings → Connectors」から3つ接続する手順を案内

### 不採用案と理由
- 個別 .mcpb を4つ配布: 結局ダブルクリック4回。リモートMCPは .mcpb 化してもユーザー体験が変わらない
- FastMCP プロキシで1つにまとめる: 複雑度が増し、リモートMCP のOAuth がプロキシ越しでうまく動くか追加検証が必要
- Playwright MCP を入れる: Claude がブラウザを直接操作する用途は薄い。E2E テストコードの実行は npm scripts で完結

### 結果として何が変わるか
- 配布物が減る（`.mcpb` ファイル不要）
- 非エンジニアの初回セットアップ手順は「Settings → Connectors で3つ追加」のみ
- OS Credential Manager に MCP トークンを入れる必要もなくなる（OAuth トークンは Claude Desktop が管理）
- 第1層の `.env.local` だけがアプリ側のシークレット保管庫
- 後から Playwright MCP を追加したくなった場合、`@playwright/mcp` を npm 経由で追加するだけで済む（影響範囲が小さい）

### 関連
- 設計判断書: /ARCHITECTURE.md セクション9
- ハンズオン台本: ONBOARDING.md Part 3

</details>

---

<details>
<summary>2026-04-29: 非エンジニアの作業環境を Cowork mode から Claude Desktop の Code タブに変更</summary>

### 文脈
当初は Claude Desktop の **Cowork mode** を非エンジニアの作業環境として想定していた（GUI、フォルダマウント、クラウドサンドボックス）。しかし以下が判明:

- Cowork mode は **Hyper-V 必須**で、Windows Home Edition では使えず、社内 IT ポリシーで詰まる例も多い
- Claude Desktop の最新版には **Code タブ**（Chat / Cowork / Code の3タブ構成）があり、Claude Code 本体をデスクトップアプリ内 GUI で動かせる
- Code タブは **Hyper-V 不要、Windows ネイティブ**で動作
- `.claude/skills/`、`CLAUDE.md`、`.claude/settings.json` は Cowork と Code タブで完全互換
- Tada さん（テンプレ開発者）自身も普段は CLI の Claude Code を使っており、UI が違うだけで内部エンジンは同じ

### 採用案
非エンジニアの作業環境を **Claude Desktop の Code タブ** に統一する:
- ハンズオン手順から Hyper-V 有効化を削除
- 代わりに Node.js + Git for Windows のインストールを前提条件に追加
- フォルダマウントの代わりに「Code タブでフォルダを開く」操作を案内
- MCP は引き続き Connectors（OAuth）で接続（`.mcpb` 不採用方針は変わらず）

### 不採用案と理由
- Cowork のまま継続: Hyper-V の壁で受講者が詰まるリスクが高い。Home Edition の PC を持つ受講者が救えない
- Cowork と Code の両対応: メンテコスト2倍。テンプレートは1つで動く（互換性あるため）が、ハンズオン台本が分岐すると複雑化
- Claude Code CLI を使わせる: 結局ターミナル操作になる。Code タブと比べて非エンジニアにやさしくない

### 結果として何が変わるか
- **Hyper-V 関連の手順がすべて消える**（ONBOARDING.md の Part 2.1）
- 新しく Node.js + Git for Windows のインストール手順が必要（winget で1コマンド）
- 「Cowork mode」「Cowork sandbox」の表記が「Code タブ」「ローカル実行」に変わる
- ハンズオンの所要時間が短くなる（Hyper-V 有効化と再起動が不要）
- Tada さん自身の開発体験（CLI の Claude Code）と非エンジニアの体験が**同じエンジン**になり、引き継ぎ・トラブルシュートが容易に
- テンプレートの中身（`.claude/skills/`、CLAUDE.md、`/setup`）は**変更なし**で両環境で動く

### 関連
- 設計判断書: /ARCHITECTURE.md セクション 1, 9, 10
- ハンズオン台本: ONBOARDING.md Part 2-3
- 前 ADR: 2026-04-29 「.mcpb 不採用」（Connectors 方針は継続）

</details>

---

## 新しい決定

<!-- ここに追記 -->
