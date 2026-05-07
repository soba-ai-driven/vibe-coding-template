# Claude環境セットアップハンズオン（初回オンボーディング）

> このドキュメントは、非エンジニアが初めて vibe-coding-template を使う時の**ハンズオン台本**です。
> 案内役（エンジニア）が読みながら一緒に進めることを想定しています。
>
> 所要時間: 約 60 分

---

## 事前チェック（前日までに）

### 受講者（非エンジニア）側

- [ ] Windows 10 / 11 PC を持参（Home Edition でも可）
- [ ] 管理者権限 or IT 部門の事前協力（winget でツールをインストールするため）
- [ ] 個人メールアドレス1つ（GitHub 用）

### 案内役（エンジニア）側

- [ ] GitHub Organization に invite できる権限
- [ ] Vercel Team に invite できる権限
- [ ] Neon Organization に invite できる権限
- [ ] Claude Desktop の Connectors 画面（Settings → Connectors）の最新 UI を自分でも確認しておく（バージョンによって配置が変わるため）

---

## Part 1: アカウント整備（約30分）

> ⏱️ 3つのサービスへのサインアップ＋招待承認が必要です。メール確認を挟むため、余裕を持って進めてください。

---

### 1.1 GitHub アカウントを作る

GitHub は、作ったプログラムを保存・管理する場所です。まずここにアカウントを作ります。

#### 手順

** 1. サインアップページを開く**

下記リンクを新しいタブで開いてください。

https://github.com/signup

** 2. メールアドレスを選択(入力)する**

「Continue with Google」をクリックする

**普段使っているメールアドレス**を入力して **「Continue」** を押す。

> ⚠️ 「Enter your email」と書かれた欄にメールアドレスを入力でも可ですが、ここではsoba-project.com のGoogle workspace を前提とします。

** 3. Username 等を入力し[Create acccont]をクリック**

> Username: 自分の名前に近い**英数字とハイフンだけ**の名前を入力
> Your Country/Region: Japan

** 4. 案内役に GitHub ユーザー名を伝える**

ここまで完了したら、案内役（エンジニア）に自分の **GitHub ユーザー名（Username）** を伝えてください。

> 🚦 **案内役の作業**: https://github.com/orgs/soba-ai-driven/people から受講者を招待する。

** 5. GitHub Organization への招待メールを承認する**

しばらくすると「You've been invited to join soba-ai-driven」という件名のメールが届きます。

1. メールを開く
2. **「Join soba-ai-driven」** ボタンをクリック
3. ブラウザで GitHub のページが開き、「Welcome to soba-ai-driven!」と表示されれば完了

---

### 1.2 Vercel アカウントを作る

Vercel は、作ったアプリをインターネット上に公開するためのサービスです。**GitHub アカウントでそのままサインインできます**。

#### 手順

**① Vercel のサインアップページを開く**

下記リンクを新しいタブで開いてください。

https://vercel.com/signup

**② 「Continue with GitHub」を選ぶ**

画面に複数のサインイン方法が表示されます。**「Continue with GitHub」** と書かれたボタンをクリックする。

**③ GitHub の認可画面で承認する**

「Authorize Vercel」というタイトルのページが開きます。内容を確認して **「Authorize vercel」** ボタン（緑色）をクリックする。

> ⚠️ このページが開かない場合: ブラウザで GitHub にサインインできているか確認してください。

**④ Vercel の初期設定をスキップする**

「What's your name?」や「What will you be using Vercel for?」などの質問画面が表示されたら、回答して **「Continue」** を押す（内容はなんでも構いません）。

Vercel のダッシュボード（プロジェクト一覧画面）が表示されれば登録完了です。

**⑤ 案内役に完了を伝える**

Vercel の登録が完了したことを案内役に伝えてください。

> 🚦 **案内役の作業**: https://vercel.com/teams/soba-ai-driven/settings/members から受講者を招待する。

**⑥ Vercel Team への招待メールを承認する**

「You've been invited to join the soba-ai-driven team on Vercel」という件名のメールが届きます。

1. メールを開く
2. **「Join Team」** または **「Accept Invite」** ボタンをクリック
3. Vercel の画面で `soba-ai-driven` のダッシュボードに切り替わったら完了

---

### 1.3 Neon アカウントを作る

Neon は、アプリのデータ（例: ユーザー情報や記録）を保存するデータベースサービスです。こちらも **GitHub アカウントでサインインできます**。

#### 手順

**① Neon のサインアップページを開く**

下記リンクを新しいタブで開いてください。

https://console.neon.tech/signup

**② 「Continue with GitHub」を選ぶ**

**「Continue with GitHub」** ボタンをクリックする。

**③ GitHub の認可画面で承認する**

「Authorize neon-database」というタイトルのページが開きます。**「Authorize neon-database」** ボタン（緑色）をクリックする。

**④ Neon のダッシュボードを確認する**

プロジェクト一覧画面（「Neon Console」のような画面）が表示されれば登録完了です。

> ⚠️ 「Create your first project」というボタンが表示されても、**ここでは何も作らないでください**。後で Claude が自動で作ります。

**⑤ 案内役に完了を伝える**

Neon の登録が完了したことを案内役に伝えてください。

> 🚦 **案内役の作業**: https://console.neon.tech/app/org-empty-waterfall-10829916/settings/members から受講者を招待する。

**⑥ Neon Organization への招待メールを承認する**

「You've been invited to join SOBA AI Driven on Neon」という件名のメールが届きます。

1. メールを開く
2. **「Accept Invitation」** ボタンをクリック
3. Neon の画面左上の組織名が「SOBA AI Driven」に切り替わったら完了

---

### Part 1 完了チェック

次の Part 2 に進む前に、以下を確認してください:

- [ ] GitHub にサインインできている（ https://github.com を開くと自分のアイコンが右上に表示される）
- [ ] `soba-ai-driven` の GitHub Organization のメンバーになっている
- [ ] Vercel にサインインできている（ https://vercel.com/soba-ai-driven が開ける）
- [ ] Neon にサインインできている（左上の組織名が「SOBA AI Driven」になっている）

1つでもチェックできない場合は案内役に相談してください。

---

## Part 2: ローカル環境準備（15分）

### 2.1 Node.js + Git for Windows をインストール（管理者権限が必要）

> ⚠️ Claude Code（Code タブ）が `npm install` や `git push` をローカルで実行するため、これらが PATH に通っている必要があります。

PowerShell を**管理者として**開き、以下を実行:

```powershell
winget install OpenJS.NodeJS.LTS --silent --accept-source-agreements --accept-package-agreements
winget install Git.Git --silent --accept-source-agreements --accept-package-agreements
```

インストール後、**PowerShell を一度閉じて開き直し**、以下で確認:

```powershell
node --version    # v20.x.x など
npm --version     # 10.x.x など
git --version     # git version 2.x.x
```

3つともバージョンが返ってきたら OK。

### 2.2 Claude Desktop インストール

1. https://claude.com/download を開く
2. Windows 版をダウンロード → 実行
3. インストール後に起動 → サインイン
4. 上部または左サイドのタブで **Code** が選択できることを確認

### 2.3 GitHub Desktop インストール

1. https://desktop.github.com/ を開く
2. Windows 版をダウンロード → 実行
3. 起動 → **Sign in to GitHub.com** で認証

---

## Part 3: MCP（Connectors）の接続（5分）

GitHub・Vercel・Neon を Claude が操作できるようにします。専用の配布ファイル（`.mcpb`）は使わず、Claude Desktop 標準の **Connectors** 機能で OAuth ログインします。トークンを手で貼り付ける必要はありません。

> 💡 OAuth で接続するため、各サービスにすでに GitHub アカウントでサインイン済みの状態（Part 1 で済ませた状態）であれば、ほぼクリックだけで完了します。

### 3.1 Connectors 画面を開く

1. Claude Desktop を起動
2. 左下のアイコン → **Settings**（または `Ctrl + ,`）
3. 左メニューから **Connectors** を選択

### 3.2 GitHub を接続

1. **Add connector** または検索欄に `GitHub` と入力
2. **GitHub** を選択 → **Connect**
3. ブラウザが開いて GitHub の認可画面が表示される
4. **Authorize** をクリック → Claude Desktop に戻る
5. Connectors 一覧に GitHub が「Connected」と表示されれば OK

### 3.3 Vercel を接続

1. Connectors 画面で **Add connector**
2. 検索欄に `Vercel` と入力（見つからない場合は **Custom connector** で URL: `https://mcp.vercel.com` を入力）
3. **Connect** → ブラウザで Vercel の認可画面 → **Authorize**
4. 「Connected」と表示されれば OK

### 3.4 Neon を接続

1. Connectors 画面で **Add connector**
2. 検索欄に `Neon` と入力（見つからない場合は **Custom connector** で URL: `https://mcp.neon.tech/sse` を入力）
3. **Connect** → ブラウザで Neon の認可画面 → **Authorize**
4. 「Connected」と表示されれば OK

> ⚠️ 各 Connector の名称・URL・追加 UI は Claude Desktop のバージョン更新で変わることがあります。
> 案内役は事前に最新の手順を画面で確認してください。

### 3.5 動作確認

Claude Desktop の **Code タブ**で適当なフォルダ（後で消す `~/test` など）を開き、以下を試す:

```
あなた: 「私の GitHub のリポジトリ一覧を教えて」
Claude: → GitHub Connector 経由で取得して返す

あなた: 「Vercel の私のプロジェクト一覧を教えて」
Claude: → Vercel Connector 経由で取得して返す

あなた: 「Neon にある私の DB プロジェクト一覧を教えて」
Claude: → Neon Connector 経由で取得して返す
```

3 つともリストが返ってきたら接続完了。
エラーが出る場合は **Settings → Connectors** で対象 Connector を **Disconnect → 再 Connect**。

---

## Part 4: 最初のプロジェクトを作る（20分）

### 4.1 テンプレートから派生

1. ブラウザで https://github.com/soba-ai-driven/vibe-coding-template を開く
2. 右上 **「Use this template」** → **「Create a new repository」**
3. リポジトリ名: ハンズオンでは `my-first-mvp` とする
4. **Owner**: 個人アカウント（または Organization、案内役が指示）
5. **Private** を選択
6. **「Create repository」**

### 4.2 GitHub Desktop で clone

1. 作ったリポジトリのページで **Code** → **Open with GitHub Desktop**
2. **Local path** を `C:\Users\<ユーザー名>\Documents\GitHub\` に設定
3. **「Clone」**

> ⚠️ パスは英数字のみのフォルダに。スペースや日本語が混じるとツールが誤動作することがあります。

### 4.3 Claude Desktop で開く

1. Claude Desktop を起動
2. 上部または左サイドの **Code** タブを選択
3. **「Open folder」** または **「フォルダを開く」** → `C:\Users\<ユーザー名>\Documents\GitHub\my-first-mvp`
4. Claude が自己紹介してくれる

### 4.4 `/setup` 実行

```
あなた: /setup を実行して
```

Claude が以下を順に質問してくる:

```
Q1. このMVPで解決したい課題は？
   → 例: 「店舗の出退勤管理が紙で大変」

Q2. 背景は？
   → 例: 「複数店舗あって集計が手作業で月末が地獄」

Q3. 想定ユーザーは？
   → 例: 「店舗スタッフと本部の総務担当」

Q4. 成功条件は？
   → 例: 「月末集計が手作業ゼロになる」

Q5. フロントエンドは？
   → 例: A) Web画面
```

回答後、Claude が自動で:

1. ✅ Vercel project 作成
2. ✅ Neon DB project + 3 ブランチ作成
3. ✅ 環境変数の設定
4. ✅ `npm install`
5. ✅ 初回コミット & ステージング push
6. ✅ ステージング URL 表示

### 4.5 ステージング URL を開く

Claude が表示した URL（例: `https://my-first-mvp-staging-xxx.vercel.app`）をブラウザで開く。

「🎉 セットアップ完了」のページが見えたら成功。

---

## Part 5: 最初の機能を作ってみる（5分）

```
あなた: 「ログイン画面をつけて。Googleでログインできるように」
```

Claude が:
- Auth.js を導入
- Google OAuth クライアント作成手順を案内（Google Cloud Console）
- 必要な環境変数を Vercel に設定
- ログイン画面を実装
- ステージングへ反映

完了したらステージング URL でログインを確認。

---

## トラブルシューティング

### Node.js / Git のインストールに失敗する

- 管理者権限で PowerShell を開いていない → 「PowerShell」を右クリック → **管理者として実行**
- `winget` コマンドが認識されない → Windows 10/11 が古い場合あり。Windows Update で最新化
- 社内 Antivirus が `winget` をブロック → IT 部門に Node.js / Git for Windows のインストール許可を依頼

### `node --version` / `git --version` が認識されない

- インストール後に PowerShell を再起動していない → PowerShell を**一度閉じて開き直す**
- それでもダメなら PC を再起動して PATH を反映

### Connectors 画面に GitHub / Vercel / Neon が見当たらない

- 検索欄でヒットしない場合は **Custom connector** から URL を直接入力
  - Vercel: `https://mcp.vercel.com`
  - Neon: `https://mcp.neon.tech/sse`
  - GitHub: 公式 Connector が見当たらない場合のみ Custom で `https://api.githubcopilot.com/mcp/`
- Claude Desktop が古い可能性 → 最新版に更新して再起動

### OAuth 認可画面でエラーが出る

- ブラウザで GitHub / Vercel / Neon に**先にサインイン**してから、Claude Desktop の Connect ボタンを押す
- Connector の **Disconnect → 再 Connect** で大抵直る
- 社内ネットワークで `claude.com`、`vercel.com`、`neon.tech`、`github.com` がブロックされていないか IT に確認

### Claude Desktop でフォルダがマウントできない

- ホームディレクトリ外（Dドライブ等）にある → ホーム配下に移動
- フォルダパスに日本語/スペースが含まれる → 英数字のみのパスに変更推奨

### `/setup` 中にエラー

- Connector が Disconnected になっている → Settings → Connectors で再接続
- Vercel/Neon の Free tier 制限 → 案内役が確認
- GitHub Organization・Vercel Team・Neon Organization への招待を**まだ承認していない**ケースが多い → 受講者のメールを確認

### `npm install` が失敗する

- ネットワーク許可ドメインが不足 → `.claude/settings.json` の `allowedDomains` を確認
- npm のレジストリブロック → IT に `registry.npmjs.org` の許可を依頼
- Antivirus が `node_modules` 書き込みをブロック → IT に Node.js の例外追加を依頼

---

## ハンズオン後のフォローアップ

### 受講者へ渡す

- [ ] このリポジトリの URL（自分の `my-first-mvp`）
- [ ] vibe-coding-template の README.md と CLAUDE.md の場所
- [ ] サポート窓口（Slack チャンネル等）

### 1週間後にチェック

- 自走で何か作れているか
- どこで詰まっているか
- ai/doc/ にドキュメントが書かれているか
- Claude が `ai/doc/03-decisions.md` を更新しているか

詰まりが多ければ CLAUDE.md やこの ONBOARDING.md を改訂。

---

## 案内役へのメモ

- 受講者は黒画面を見せられると萎える。Code タブ内で完結する見せ方を徹底（PowerShell は事前準備の `winget` 1回だけ）
- API トークンを画面共有時に映さないよう注意
- 「分からないところは Claude に聞いてね」を繰り返し伝える
- 1回目は時間オーバーしがち。Part 1〜2 を事前準備として宿題化するのもアリ
