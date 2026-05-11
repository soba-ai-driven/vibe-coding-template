---
name: sync-template
description: vibe-coding-templateの最新変更をこの子プロジェクトに取り込む。スキル・git hook・ドキュメント等のテンプレート側の更新を反映する。`/sync-template`で実行。
---

# /sync-template スキル

`vibe-coding-template` の更新をこのプロジェクトに取り込みます。
プロジェクト固有のコード（`src/`、`ai/doc/`）には一切触れません。

## 実行手順

### ステップ1: upstream の確認・登録

```bash
git remote -v
```

`template` という名前のリモートが存在しない場合は追加:

```bash
git remote add template https://github.com/soba-ai-driven/vibe-coding-template.git
```

最新を fetch:

```bash
git fetch template
```

### ステップ2: 安全に上書きできるファイルを更新

以下はプロジェクト固有の内容を含まないため、テンプレートの最新版で上書きする:

```bash
git checkout template/main -- .claude/skills/setup/SKILL.md
git checkout template/main -- .claude/skills/sync-template/SKILL.md
git checkout template/main -- .claude/git-hooks/pre-push
```

### ステップ3: CLAUDE.md の差分確認

`CLAUDE.md` はプロジェクト固有のセクションが追加されている可能性があるため、**上書きせず差分を確認してユーザーに判断を委ねる**。

```bash
git diff template/main -- CLAUDE.md
```

差分をユーザーに見せて、以下を確認する:

```
テンプレートの CLAUDE.md にこのような変更がありました。
このプロジェクトの CLAUDE.md に取り込みますか？

変更箇所を確認して:
  - 「全部取り込む」→ テンプレートで上書き
  - 「一部だけ」→ どのセクションか指示してください。手動で編集します
  - 「スキップ」→ CLAUDE.md は変更しない
```

ユーザーの指示に従って対応する。

### ステップ4: 変更をコミット

更新されたファイルをステージしてコミット:

```bash
git add -f .claude/skills/setup/SKILL.md .claude/skills/sync-template/SKILL.md .claude/git-hooks/pre-push
# CLAUDE.md をユーザーが取り込む選択をした場合も追加
```

```bash
git commit -m "chore: sync with vibe-coding-template

- Updated skills and git hooks from template"
```

### ステップ5: 完了レポート

ユーザーに以下を表示:

```
✅ テンプレートの同期が完了しました。

更新したファイル:
  - .claude/skills/setup/SKILL.md
  - .claude/skills/sync-template/SKILL.md
  - .claude/git-hooks/pre-push
  - CLAUDE.md（ユーザーが取り込みを選択した場合）

staging にデプロイしますか？
```

## 注意事項

- `src/`、`ai/doc/`、`package.json`、`.env.local`、`drizzle/` には**一切触れない**
- `.mcp.json` が gitignore されている場合（Backlog 設定済み）は触れない
- コミット前に必ず `git status` でステージ内容を確認する
- `git stash` で退避が必要なユーザーの作業中ファイルがないか事前確認すること
