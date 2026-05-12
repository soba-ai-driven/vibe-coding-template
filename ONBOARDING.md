# Claude環境セットアップハンズオン（初回オンボーディング）

> このドキュメントは、非エンジニアが初めて vibe-coding-template を使う時の**ハンズオン台本**です。
>
> 所要時間: 約 60 分

---

## 事前チェック（前日までに）

### 受講者（非エンジニア）側

- [ ] Windows 10 / 11 PC を持参（Home Edition でも可）
- [ ] Windowsの管理者権限 

### 案内役（エンジニア）側

- [ ] GitHub Organization に invite できる権限
- [ ] Vercel Team に invite できる権限
- [ ] Neon Organization に invite できる権限
- [ ] Claude Desktop の 管理権限

---

## Part 1: アカウント整備（約30分）

> ⏱️ 4つのサービスへのサインアップ＋招待承認が必要です。メール確認を挟むため、余裕を持って進めてください。

---

### 1.1 GitHub アカウントを作る

GitHub は、作ったプログラムを保存・管理する場所です。まずここにアカウントを作ります。

#### 手順

** 1. 下記リンクを新しいタブで開いてください。**

https://github.com/signup


** 2. 「Continue with Google」をクリックする**

soba-project.com のメールアドレスを入力して **「Continue」** をクリック。

>  「Enter your email」と書かれた欄にメールアドレスを入力でも可ですが、ここではsoba-project.com のGoogle workspace を前提とします。

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

4. 忘れない様に、GitHubのURLとアカウント情報をメモしておきましょう

---

### 1.2 Vercel アカウントを作る

Vercel は、作ったアプリをインターネット上に公開するためのサービスです。
**GitHub アカウントでサインインする想定です**。

#### 手順

** 1. 下記リンクを新しいタブで開いてください。**

https://vercel.com/signup


** 2. Plan Type を選ぶ **

●I'm working on persona projects [Hobby] をクリック


** 3. Your Name を入力し [Continue]をクリック ** 

> 自分の名前に近い**英数字とハイフンだけ**の名前を入力


** 4. 「Continue with GitHub」を選ぶ**

画面に複数のサインイン方法が表示されます。**「Continue with GitHub」** と書かれたボタンをクリックする。

** 5. GitHub の認可画面で承認する**

「Vercel by Vercel」というタイトルのページが開きます。 **「Authorize」** ボタン（緑色）をクリックする。

> ⚠️ このページが開かない場合: ブラウザで GitHub にサインインできているか確認してください。


** 6. Let's build something new のページが表示されたら、[<-back] をクリック**

** 7. Vercel のダッシュボード（プロジェクト一覧画面）が表示されれば登録完了です。**

** 8. 案内役に完了を伝える**

メールアドレスを添えて、Vercel の登録が完了したことを案内役に伝えてください。

> 🚦 **案内役の作業**: 下記リンクから受講者を招待する。
>
> https://vercel.com/soba-ai-driven/~/settings/members
** 8. Vercel Team への招待メールを承認する**

しばらくすると「*** invited you to the SOBA AI Driven team on Vercel」という件名のメールが届きます。

1. メールを開く

2. **「Join the team」** ボタンをクリック

3. **「Continue as メールアドレス」** ボタンをクリック

4. Vercel の画面で `SOBA AI Driven` のダッシュボードに切り替わったら完了

5. 忘れない様に、VercelのURLとアカウント情報をメモしておきましょう

---

### 1.3 Neon アカウントを作る

Neon は、アプリのデータ（例: ユーザー情報や記録）を保存するデータベースサービスです。こちらも **GitHub アカウントでサインインしましょう**。

#### 手順

** 1. サインアップページを開く**

下記リンクを新しいタブで開いてください。

https://console.neon.tech/signup

** 2. 「Create your free account」で 「GitHub」をクリック**

** 3. 「Authorize Neon Console」というタイトルのページが開きます。**「Authorize neondatabase」** ボタン（緑色）をクリックする。**

** 4. Welcome to Neon で以下を入力し[Next]をクリック**

> Organization name: 変更なしでOK
> What's this organnization for?: 変更なし(Personal projects)でOK

** 5. Now, let's create your first project. が表示されることを確認する**

> ⚠️ 「Create project」というボタンが表示されても、**ここでは何も作らないでください**。


** 6. 案内役に完了を伝える**

メールアドレスを添えて、Neon の登録が完了したことを案内役に伝えてください。

> 🚦 **案内役の作業**: 下記リンクから受講者を招待する。
>
> https://console.neon.tech/app/org-empty-waterfall-10829916/people

** 6. 「xxxx has  invited you to join SOBA AI Driven」という件名のメールが届くので、「Go to SOBA AI Driven」をクリックする**


** 7. Neon の画面左上の組織名が「SOBA AI Driven」に切り替わったら完了

https://console.neon.tech/app/org-empty-waterfall-10829916/projects

---

### 1.4 Claude（Team プラン）にサインアップする

Claude はこのプロジェクトのメインツールです。チームの招待メールからサインアップします。

> 🚦 **案内役の作業（事前）**: Claude の Team Admin 画面から受講者を招待しておく（受講者の **soba-project.com の Google アカウント**宛て）。

#### 手順

** 1. 件名が「You're invited to join SOBA Project on Claude」の招待メールを開く**

** 2. 「Accept invite」ボタンをクリック**

ブラウザが開き、Claude のサインアップ画面に遷移します。

** 3. 「Continue with Google」をクリック**

サインイン方法の選択画面で **「Continue with Google」** をクリック。

> **soba-project.com の Google アカウント**でサインインしてください。

** 4. Google アカウントで承認**

Google の認可画面で承認すると、Claude のチームに参加完了。

** 5. ブラウザで Claude にアクセスできることを確認**

https://claude.ai/

左下の名前をクリックし **「SOBA Project」**（チーム名）が選択できたら完了。


---

### Part 1 完了チェック

次の Part 2 に進む前に、以下を確認してください:

- [ ] GitHub にサインインできている（ https://github.com/soba-ai-driven/vibe-coding-template が表示できる）
- [ ] Vercel にサインインできている（ https://vercel.com/soba-ai-driven が開ける）
- [ ] Neon にサインインできている（ https://console.neon.tech/app/org-empty-waterfall-10829916/people が開ける）
- [ ] Claude にサインインできている（ https://claude.ai でチーム名「SOBA Project」が表示される）

1つでもチェックできない場合は案内役に相談してください。

---

## Part 2: ローカル環境準備（約15分）

> ⚠️ Claude Code（Code タブ）が `npm install` や `git push` をローカルで実行するため、Node.js と Git のインストールが必要です。

---

### 2.1 Node.js と Git for Windows をインストールする

> ⚠️ この手順は**管理者権限**が必要です。

---

#### 方法A: インストーラーを使う（推奨・PowerShell 不要）

** 1. Node.js のインストーラーをダウンロードする**

下記リンクを新しいタブで開いてください。

https://nodejs.org/en/download

ページ内の **「Windows Installer (.msi)」** をクリックしてダウンロードする。

> 💡 「LTS」と書かれたバージョンを選んでください（安定版）。

** 2. Node.js をインストールする**

ダウンロードした `.msi` ファイルをダブルクリックして実行する。

インストーラーが起動したら **「Next」→「Next」→「Install」** と進む。
「このアプリがデバイスに変更を加えることを許可しますか？」と聞かれたら **「はい」** をクリック。

完了画面で **「Finish」** を押す。

** 3. Git for Windows のインストーラーをダウンロードする**

下記リンクを新しいタブで開いてください。

https://git-scm.com/download/win

**「Git for Windows/x64 Setup」** をクリックしてダウンロードする。

** 4. Git for Windows をインストールする**

ダウンロードした `.exe` ファイルをダブルクリックして実行する。

インストーラーが起動したら **「Next」** を押し続け、すべてデフォルトのまま **「Install」** を押す。
完了画面で **「Finish」** を押す。

** 5. PC を再起動する**

インストール後は PC を一度再起動して PATH（プログラムの場所情報）を更新する。

** 6. インストールを確認する**

タスクバーの検索欄に `powershell` と入力し **「Windows PowerShell」** を起動する（管理者権限は不要）。

以下を1行ずつ入力して **Enter**:

```powershell
node --version
npm --version
git --version
```

それぞれ `v20.x.x`、`10.x.x`、`git version 2.x.x` のようにバージョン番号が返ってきたら OK。

> ⚠️ `npm --version` で「スクリプトの実行が無効になっているため…」と赤いエラーが出た場合は、以下のコマンドを実行してから再度確認してください:
>
> ```powershell
> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
> ```
>
> 「実行ポリシーを変更しますか？」と聞かれたら `Y` を入力して **Enter**。その後 `npm --version` を再度実行する。

> ⚠️ `node` や `git` が「認識されていません」と出た場合は PC を再起動して再度確認してください。

---

#### 方法B: winget を使う（PowerShell が使える場合）

タスクバーの検索欄に `powershell` と入力し、**「Windows PowerShell」** を右クリック → **「管理者として実行」** を選ぶ。

以下を1行ずつ貼り付けて **Enter**:

```powershell
winget install OpenJS.NodeJS.LTS --silent --accept-source-agreements --accept-package-agreements
winget install Git.Git --silent --accept-source-agreements --accept-package-agreements
```

完了後、PowerShell を閉じて開き直し、方法Aの手順 6 と同様に確認する。

---

### 2.2 Claude Desktop をインストールする



※作業前にSOBAのClaude Code Teamへの招待状から soba-project のGoogleアカウントでサインアップしておく


** 1. ダウンロードページを開く**

下記リンクを新しいタブで開いてください。

https://claude.com/download

** 2. Windows 版をダウンロードする**

**「Download for Windows」** ボタンをクリックしてインストーラーをダウンロードする。

** 3. インストーラーを実行する**

ダウンロードしたファイル（`Claude-Setup-x64.exe` など）をダブルクリックして実行する。

「このアプリがデバイスに変更を加えることを許可しますか？」と聞かれたら **「はい」** をクリック。インストールが自動で進み、完了すると Claude Desktop が起動する。

** 4. サインインする**

起動画面「はじめる」をクリックする

サインインで **「Googleで続ける」** をクリックする



** 5. Code タブを確認する**

画面の上部または左サイドに **「</> Code」** タブが表示されていれば OK。

---

### 2.3 GitHub Desktop をインストールする

** 1. ダウンロードページを開く**

下記リンクを新しいタブで開いてください。

https://desktop.github.com/

** 2. Windows 版をダウンロードする**

**「Download now」** ボタンをクリック、**「Download for Windows (64bit)」** ボタンをクリックしてインストーラーをダウンロードする。

** 3. インストーラーを実行する**

ダウンロードしたファイルをダブルクリックして実行する。インストールが自動で進み、完了すると GitHub Desktop が起動する。

** 4. GitHub アカウントでサインインする**

起動後、**「Sign in to GitHub.com」** をクリックしてブラウザが開いたら **「Continue」** をクリック

次に **「Authorize desktop」** をクリック

** 「Verify vie email」 ** をクリック、

しばらくするとメールアドレスに件名「[GitHub] Sudo email verification code」のメールが届くので、数字をコピーする

Confirm access でコピーした数字を入力し [Verify]をクリック

ダイアログが開くのでConfirmをクリック

GitHub Desktop に戻り、「Finish」をクリック


---

### 2.4 GitHub CLI（gh）をインストールする

GitHub CLI（`gh`）は、Claude が GitHub のリポジトリ操作（ブランチ作成・push 等）をターミナルから行うために使います。

#### 方法A: winget を使う（推奨）

タスクバーの検索欄に `powershell` と入力し、**「Windows PowerShell」** を右クリック → **「管理者として実行」** を選ぶ。

以下を貼り付けて **Enter**:

```powershell
winget install GitHub.cli --silent --accept-source-agreements --accept-package-agreements
```

完了後、PowerShell を閉じて開き直す。

#### 方法B: インストーラーを使う（PowerShell 不要）

** 1. ダウンロードページを開く**

下記リンクを新しいタブで開いてください。

https://cli.github.com/

** 2. 「Download for Windows」をクリックしてダウンロードする**

** 3. ダウンロードした `.msi` ファイルをダブルクリックして実行する**

インストーラーが起動したら **「Next」→「Install」** と進み、完了画面で **「Finish」** を押す。

PC を一度再起動して PATH を更新する。

#### インストール確認とサインイン

** 1. PowerShell を起動し、インストールを確認する**

```powershell
gh --version
```

`gh version 2.x.x` のようなバージョン番号が返ってきたら OK。

** 2. GitHub にサインインする**

```powershell
gh auth login --web
```

「What account do you want to log into?」と聞かれたら **「GitHub.com」** を選ぶ（矢印キー＋Enter）。

「How would you like to authenticate?」は **「Login with a web browser」** を選ぶ。

ブラウザが開いて GitHub の認可画面が表示される。**「Authorize github」** をクリックする。

** 3. サインインを確認する**

PowerShell で以下を実行:

```powershell
gh auth status
```

`Logged in to github.com as <あなたのユーザー名>` と表示されれば完了。

---

## Part 3: 最初のプロジェクトを作る（約25分）

> 💡 **このパートで使う各サービスの役割**:
> - **Neon（データベース）**: MCP コネクタ経由（3.4 でブラウザ認証）
> - **Vercel（公開先）**: Personal Access Token 方式（3.5 の `/setup` 内で発行案内）
> - **GitHub**: 2.4 でインストールした `gh` コマンドが担うため MCP 接続は不要

---

### 3.1 テンプレートからリポジトリを作る

** 1. テンプレートリポジトリを開く**

下記リンクを新しいタブで開いてください。

https://github.com/soba-ai-driven/vibe-coding-template

** 2. 「Use this template」をクリックする**

右上の緑色のボタン **「Use this template」** → **「Create a new repository」** をクリックする。

** 3. リポジトリ情報を入力する**

| 項目 | 入力値 |
|---|---|
| Owner | 自分のアカウント（案内役が指示）|
| Repository name | `my-first-mvp` |
| Visibility | **Private** |

入力後、**「Create repository」** をクリックする。

** 4. リポジトリが作成されたことを確認する**

`github.com/<あなたのUsername>/my-first-mvp` のページが表示されれば完了。

---

### 3.2 GitHub Desktop でクローンする

** 1. GitHub Desktop でリポジトリを開く**

先ほどのリポジトリページで **「Code」** ボタン → **「Open with GitHub Desktop」** をクリックする。

GitHub Desktop が起動して「Clone a repository」画面が表示される。

** 2. 保存先を確認して Clone する**

- **Local path** が `C:\Users\<ユーザー名>\Documents\GitHub\my-first-mvp` になっていることを確認する
- 違う場合は **「Choose...」** から `Documents\GitHub\` フォルダを選ぶ
- **「Clone」** をクリックする

> ⚠️ パスに日本語やスペースが含まれると Claude のツールが誤動作することがあります。`Documents\GitHub\` 配下に英数字のみのフォルダ名で保存してください。

---

### 3.3 Claude Desktop でフォルダを開く

** 1. Code タブを選択する**

Claude Desktop を起動し、画面上部または左サイドの **「Code」** タブをクリックする。

** 2. フォルダを開く**

**「Open folder」**（または「フォルダを開く」）をクリックし、以下のフォルダを選択する:

```
C:\Users\<ユーザー名>\Documents\GitHub\my-first-mvp
```

** 3. macOS / Windows のフォルダアクセス確認が表示されたら許可する**

OS から「Claude がフォルダにアクセスしようとしています」というダイアログが出たら **「OK」** または **「許可」** をクリック。

** 4. Claude の挨拶を確認する**

フォルダが開くと Claude が自己紹介のメッセージを送ってくる。表示されれば OK。

---

### 3.4 Neon の MCP 認証をする

Claude がデータベース（Neon）を操作できるよう、ブラウザ経由で1回だけ認証します。

** 1. チャット欄に `/mcp` と入力して Enter**

```
/mcp
```

Claude Code が接続中の MCP サーバー一覧を表示します。

** 2. Neon が一覧に表示されていることを確認**

`neon` というサーバー名と接続ステータスが表示されます。認証が必要な場合は「認証してください」的な表示が出ます。

> 💡 表示されない・`/mcp` コマンド自体が無効な場合は、次の手順 (3.5) に進んでください。Claude が `/setup` 中に Neon を使うときに認証 URL を提示します。

** 3. Neon の OAuth 認証画面でブラウザ承認する**

Claude Code 画面のリンク（または自動で開くブラウザ）の Neon 認可画面で:

- **「SOBA AI Driven」組織** へのアクセスにチェックが入っていることを確認
- 「Authorize」ボタンをクリック

> ⚠️ 個人アカウントだけだと組織のプロジェクトにアクセスできません。必ず組織を選択。

** 4. 認証完了を確認**

ブラウザに「Authorization successful」等が表示されたら Claude Desktop に戻ります。再度 `/mcp` を実行して Neon にツール数（例: `neon (24 tools)`）が表示されていれば完了。

---

### 3.5 /setup を実行する

** 1. チャットに入力する**

チャット欄に以下を入力して **Enter** を押す:

```
/setup を実行して
```

** 2. Vercel アクセストークンの発行を案内されるので発行する**

Claude が最初に Vercel のアクセストークン発行手順を案内してきます。指示通り:

1. ブラウザで https://vercel.com/account/tokens を開く
2. 「Create Token」をクリック
3. Token Name: `claude-my-first-mvp` など、Scope: **「SOBA AI Driven」を選択**（重要）、Expiration: 任意
4. 表示された `vcp_...` で始まる長い文字列をコピー
5. Claude Desktop のチャットに貼り付け

> ⚠️ トークンは1回しか表示されません。コピーし忘れたらもう一度発行し直してください。

** 3. Claude の質問に答える**

Claude が順番に質問してくる。ハンズオンでは以下の例で回答してください:

| 質問 | 回答例 |
|---|---|
| このMVPで解決したい課題は？ | 店舗の出退勤管理が紙で大変 |
| 背景は？ | 複数店舗あって集計が手作業で月末が地獄 |
| 想定ユーザーは？ | 店舗スタッフと本部の総務担当 |
| 成功条件は？ | 月末集計が手作業ゼロになる |
| フロントエンドは？ | Web画面 |

** 4. Claude の自動処理が完了するのを待つ**

回答後、Claude が以下を自動で実行する（数分かかります）:

1. ✅ `.env.local` に `VERCEL_TOKEN` 保存
2. ✅ Vercel project 作成（CLI/API 経由）
3. ✅ Neon DB project + 3 ブランチ作成（MCP 経由）
4. ✅ 環境変数の設定（Vercel CLI/API で各環境）
5. ✅ `npm install`
6. ✅ 初回コミット & ステージング push
7. ✅ ステージング URL 表示

---

### 3.6 ステージング URL を確認する

** 1. URL をブラウザで開く**

Claude が表示した URL（例: `https://my-first-mvp-staging-xxx.vercel.app`）をクリックまたはコピーしてブラウザで開く。

** 2. セットアップ完了を確認する**

「セットアップ完了」のページが表示されれば成功です。

---

## Part 4: 最初の機能を作ってみる（約5分）

---

### 4.1 ログイン機能を依頼する

** 1. チャットに入力する**

チャット欄に以下を入力して **Enter** を押す:

```
ログイン画面をつけて。Googleでログインできるように
```

** 2. Claude の処理が完了するのを待つ**

Claude が以下を自動で行う:

- Auth.js を導入
- Google OAuth クライアント作成手順を案内（Google Cloud Console）
- 必要な環境変数を Vercel に設定
- ログイン画面を実装
- ステージングへ反映

** 3. ステージング URL でログインを確認する**

Claude が案内した URL を開き、Google ログインが動作することを確認する。

---

## トラブルシューティング

### Node.js / Git のインストールに失敗する

- 管理者権限で PowerShell を開いていない → 「PowerShell」を右クリック → **管理者として実行**
- `winget` コマンドが認識されない → Windows 10/11 が古い場合あり。Windows Update で最新化
- 社内 Antivirus が `winget` をブロック → IT 部門に Node.js / Git for Windows のインストール許可を依頼

### `npm --version` で「スクリプトの実行が無効」エラーが出る

Windows の PowerShell はデフォルトで外部スクリプトの実行を禁止しており、npm は `.ps1` スクリプトのため弾かれます。以下で解除してください:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

「実行ポリシーを変更しますか？」と聞かれたら `Y` を入力して **Enter**。その後 `npm --version` を再度実行する。

### `node --version` / `git --version` が認識されない

- インストール後に PowerShell を再起動していない → PowerShell を**一度閉じて開き直す**
- それでもダメなら PC を再起動して PATH を反映

### `/mcp` コマンドで Neon が表示されない

- フォルダを開いた時に MCP 承認ダイアログで「Allow」を押し忘れた → Code タブでフォルダを開き直す
- `.mcp.json` が存在しない → リポジトリのルートに `.mcp.json` があるか確認。ない場合は案内役に相談
- Claude Desktop が古い可能性 → 最新版に更新して再起動

> 💡 Vercel は `/mcp` には出ません（トークン方式に変更したため）。Vercel 関連のトラブルは「`/setup` 中に Vercel エラー」のセクション参照。

### MCP（Neon）の OAuth 認可画面でエラーが出る

- ブラウザで Neon に**先にサインイン**してから、`/mcp` の「Sign in」を押す
- `/mcp` で「Disconnect」→ 再度「Sign in」で大抵直る
- 承認画面で「SOBA AI Driven」組織にチェックを入れ忘れると組織のプロジェクトが見えない → 一度 Disconnect → 再度 Sign in でやり直し
- 社内ネットワークで `claude.com`、`neon.tech` がブロックされていないか IT に確認

### `/setup` 中に Vercel エラー（401 / 403 / Forbidden）

- Vercel トークンが間違っているか期限切れ → https://vercel.com/account/tokens で新しいトークンを発行し、Claude に渡し直す
- トークン発行時の Scope に「SOBA AI Driven」が含まれていない → Token を Revoke して、Scope を正しく選んで再発行
- Free / Hobby プランの制限に当たっている可能性 → 案内役が確認

### Claude Desktop でフォルダがマウントできない

- ホームディレクトリ外（Dドライブ等）にある → ホーム配下に移動
- フォルダパスに日本語/スペースが含まれる → 英数字のみのパスに変更推奨

### `/setup` 中にエラー（その他）

- Neon MCP が未認証になっている → チャット欄で `/mcp` を入力し、Neon が「Authenticated」になっているか確認。なっていなければ「Sign in」で再接続
- Neon の Free tier 制限 → 案内役が確認
- GitHub Organization・Vercel Team・Neon Organization への招待を**まだ承認していない**ケースが多い → 受講者のメールを確認
- Vercel エラーは前述の「`/setup` 中に Vercel エラー」セクション参照

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
