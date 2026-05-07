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

Vercel は、作ったアプリをインターネット上に公開するためのサービスです。
**GitHub アカウントでサインインする想定です**。

#### 手順

** 1. サインアップページを開く**

下記リンクを新しいタブで開いてください。

https://vercel.com/signup


** 2. Plan Type を選ぶ **

●I'm working on persona projects [Hobby] をクリック


** 3. Your Name を入力し [Continue]をクリック ** 

> 自分の名前に近い**英数字とハイフンだけ**の名前を入力

** 4. 「Continue with GitHub」を選ぶ**

画面に複数のサインイン方法が表示されます。**「Continue with GitHub」** と書かれたボタンをクリックする。

** 5. GitHub の認可画面で承認する**

「Authorize Vercel」というタイトルのページが開きます。 **「Continue」** ボタン（緑色）をクリックする。

> ⚠️ このページが開かない場合: ブラウザで GitHub にサインインできているか確認してください。


** 6. 初期設定の質問に答える**

「What's your name?」や「What will you be using Vercel for?」などの質問画面が表示されたら、回答して **「Continue」** を押す（内容はなんでも構いません）。

Vercel のダッシュボード（プロジェクト一覧画面）が表示されれば登録完了です。

** 7. 案内役に完了を伝える**

Vercel の登録が完了したことを案内役に伝えてください。

> 🚦 **案内役の作業**: 下記リンクから受講者を招待する。
>
> https://vercel.com/soba-ai-driven/~/settings/members
** 8. Vercel Team への招待メールを承認する**

しばらくすると「*** invited you to the SOBA AI Driven team on Vercel」という件名のメールが届きます。

1. メールを開く
2. **「Join the team」** ボタンをクリック
3. Vercel の画面で `soba-ai-driven` のダッシュボードに切り替わったら完了

---

### 1.3 Neon アカウントを作る

Neon は、アプリのデータ（例: ユーザー情報や記録）を保存するデータベースサービスです。こちらも **GitHub アカウントでサインインしましょう**。

#### 手順

** 1. サインアップページを開く**

下記リンクを新しいタブで開いてください。

https://console.neon.tech/signup

** 2. 「Continue to Neon with」で 「GitHub」をクリック**


** 3. GitHub の認可画面で承認する**

「Authorize Neon Console」というタイトルのページが開きます。**「Authorize neondatabase」** ボタン（緑色）をクリックする。


** 4. Welcome to Neon で以下を入力し[Next]をクリック**

> Organization name: 変更なしでOK
> What's this organnization for?: 変更なし(Personal projects)でOK


** 5. Now, let's create your first project. が表示されることを確認する**

表示されれば登録完了です。

> ⚠️ 「Create project」というボタンが表示されても、**ここでは何も作らないでください**。


** 6. 案内役に完了を伝える**

Neon の登録が完了したことを案内役に伝えてください。

> 🚦 **案内役の作業**: 下記リンクから受講者を招待する。
>
> https://console.neon.tech/app/org-empty-waterfall-10829916/people

** 6. Neon Organization への招待メールを承認する**

「xxxx has  invited you to join SOBA AI Driven」という件名のメールが届きます。

1. メールを開く
2. **「Go to SOBA AI Driven」** ボタンをクリック
3. Neon の画面左上の組織名が「SOBA AI Driven」に切り替わったら完了

---

### Part 1 完了チェック

次の Part 2 に進む前に、以下を確認してください:

- [ ] GitHub にサインインできている（ https://github.com/soba-ai-driven/vibe-coding-template が表示できる）
- [ ] Vercel にサインインできている（ https://vercel.com/soba-ai-driven が開ける）
- [ ] Neon にサインインできている（ https://console.neon.tech/app/org-empty-waterfall-10829916/people が開ける）

1つでもチェックできない場合は案内役に相談してください。

---

## Part 2: ローカル環境準備（約15分）

> ⚠️ Claude Code（Code タブ）が `npm install` や `git push` をローカルで実行するため、Node.js と Git のインストールが必要です。

---

### 2.1 Node.js と Git for Windows をインストールする

> ⚠️ この手順は**管理者権限**が必要です。

** 1. PowerShell を管理者として開く**

タスクバー左下の検索欄（虫眼鏡アイコン）に `powershell` と入力し、検索結果に表示された **「Windows PowerShell」** を右クリック → **「管理者として実行」** を選ぶ。

「このアプリがデバイスに変更を加えることを許可しますか？」と聞かれたら **「はい」** をクリックする。

** 2. Node.js をインストールする**

PowerShell の黒い画面に以下を貼り付けて **Enter** を押す:

```powershell
winget install OpenJS.NodeJS.LTS --silent --accept-source-agreements --accept-package-agreements
```

`Successfully installed` と表示されれば完了。

** 3. Git for Windows をインストールする**

続けて以下を貼り付けて **Enter** を押す:

```powershell
winget install Git.Git --silent --accept-source-agreements --accept-package-agreements
```

`Successfully installed` と表示されれば完了。

** 4. PowerShell を閉じて開き直す**

インストール後は PATH（プログラムの場所情報）を更新するため、PowerShell を一度閉じて再度開く。（管理者権限は不要、通常の起動でよい）

** 5. インストールを確認する**

PowerShell に以下を1行ずつ入力して Enter:

```powershell
node --version
npm --version
git --version
```

それぞれ `v20.x.x`、`10.x.x`、`git version 2.x.x` のようにバージョン番号が返ってきたら OK。

> ⚠️ 「認識されていません」と出た場合はトラブルシューティングを参照してください。

---

### 2.2 Claude Desktop をインストールする

** 1. ダウンロードページを開く**

下記リンクを新しいタブで開いてください。

https://claude.com/download

** 2. Windows 版をダウンロードする**

**「Download for Windows」** ボタンをクリックしてインストーラーをダウンロードする。

** 3. インストーラーを実行する**

ダウンロードしたファイル（`Claude-Setup-x64.exe` など）をダブルクリックして実行する。

「このアプリがデバイスに変更を加えることを許可しますか？」と聞かれたら **「はい」** をクリック。インストールが自動で進み、完了すると Claude Desktop が起動する。

** 4. サインインする**

起動画面で **「Sign in」** をクリックし、Anthropic アカウント（または Google / Apple アカウント）でサインインする。

** 5. Code タブを確認する**

画面の上部または左サイドに **「Code」** タブが表示されていれば OK。

---

### 2.3 GitHub Desktop をインストールする

** 1. ダウンロードページを開く**

下記リンクを新しいタブで開いてください。

https://desktop.github.com/

** 2. Windows 版をダウンロードする**

**「Download for Windows」** ボタンをクリックしてインストーラーをダウンロードする。

** 3. インストーラーを実行する**

ダウンロードしたファイルをダブルクリックして実行する。インストールが自動で進み、完了すると GitHub Desktop が起動する。

** 4. GitHub アカウントでサインインする**

起動後、**「Sign in to GitHub.com」** をクリックしてブラウザが開いたら **「Authorize desktop」** をクリックする。GitHub Desktop に戻り、自分のアカウント名が表示されれば完了。

---

## Part 3: MCP（Connectors）の接続（約5分）

GitHub・Vercel・Neon を Claude が操作できるようにします。Claude Desktop 標準の **Connectors** 機能で OAuth ログインするだけで完了します。トークンを手で貼り付ける必要はありません。

> 💡 Part 1 で各サービスにサインイン済みであれば、ほぼクリックだけで完了します。

---

### 3.1 Connectors 画面を開く

** 1. Claude Desktop を起動する**

デスクトップまたはスタートメニューから **Claude** を起動する。

** 2. Settings を開く**

画面左下のアイコンをクリック → **「Settings」** を選ぶ（または `Ctrl + ,`）。

** 3. Connectors を選択する**

左メニューから **「Connectors」** をクリックする。

---

### 3.2 GitHub を接続する

** 1. Add connector をクリックする**

Connectors 画面で **「Add connector」** をクリックする。

** 2. GitHub を検索して選ぶ**

検索欄に `GitHub` と入力し、表示された **「GitHub」** を選択 → **「Connect」** をクリックする。

** 3. ブラウザの認可画面で承認する**

ブラウザが開いて GitHub の認可画面が表示される。**「Authorize」** をクリックして Claude Desktop に戻る。

** 4. 接続を確認する**

Connectors 一覧に GitHub が **「Connected」** と表示されれば OK。

---

### 3.3 Vercel を接続する

** 1. Add connector をクリックする**

Connectors 画面で **「Add connector」** をクリックする。

** 2. Vercel を検索して選ぶ**

検索欄に `Vercel` と入力し、表示された **「Vercel」** を選択 → **「Connect」** をクリックする。

> ⚠️ 検索してもヒットしない場合は **「Custom connector」** を選び、URL 欄に `https://mcp.vercel.com` を入力してください。

** 3. ブラウザの認可画面で承認する**

ブラウザが開いて Vercel の認可画面が表示される。**「Authorize」** をクリックして Claude Desktop に戻る。

** 4. 接続を確認する**

Connectors 一覧に Vercel が **「Connected」** と表示されれば OK。

---

### 3.4 Neon を接続する

** 1. Add connector をクリックする**

Connectors 画面で **「Add connector」** をクリックする。

** 2. Neon を検索して選ぶ**

検索欄に `Neon` と入力し、表示された **「Neon」** を選択 → **「Connect」** をクリックする。

> ⚠️ 検索してもヒットしない場合は **「Custom connector」** を選び、URL 欄に `https://mcp.neon.tech/sse` を入力してください。

** 3. ブラウザの認可画面で承認する**

ブラウザが開いて Neon の認可画面が表示される。**「Authorize」** をクリックして Claude Desktop に戻る。

** 4. 接続を確認する**

Connectors 一覧に Neon が **「Connected」** と表示されれば OK。

> ⚠️ 各 Connector の名称・URL・追加 UI は Claude Desktop のバージョン更新で変わることがあります。案内役は事前に最新の手順を画面で確認してください。

---

### 3.5 動作確認

** 1. Code タブでテスト用フォルダを開く**

Claude Desktop の **「Code」** タブを選択し、適当なフォルダ（後で消す `~/test` など）を開く。

** 2. 3つの接続を確認する**

チャット欄に以下を順に入力し、それぞれリストが返ってくることを確認する:

```
私の GitHub のリポジトリ一覧を教えて
```

```
Vercel の私のプロジェクト一覧を教えて
```

```
Neon にある私の DB プロジェクト一覧を教えて
```

3つともリストが返ってきたら接続完了。エラーが出る場合は **Settings → Connectors** で対象の Connector を **「Disconnect」→「Connect」** で再接続してください。

---

## Part 4: 最初のプロジェクトを作る（約20分）

---

### 4.1 テンプレートからリポジトリを作る

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

### 4.2 GitHub Desktop でクローンする

** 1. GitHub Desktop でリポジトリを開く**

先ほどのリポジトリページで **「Code」** ボタン → **「Open with GitHub Desktop」** をクリックする。

GitHub Desktop が起動して「Clone a repository」画面が表示される。

** 2. 保存先を確認して Clone する**

- **Local path** が `C:\Users\<ユーザー名>\Documents\GitHub\my-first-mvp` になっていることを確認する
- 違う場合は **「Choose...」** から `Documents\GitHub\` フォルダを選ぶ
- **「Clone」** をクリックする

> ⚠️ パスに日本語やスペースが含まれると Claude のツールが誤動作することがあります。`Documents\GitHub\` 配下に英数字のみのフォルダ名で保存してください。

---

### 4.3 Claude Desktop でフォルダを開く

** 1. Code タブを選択する**

Claude Desktop を起動し、画面上部または左サイドの **「Code」** タブをクリックする。

** 2. フォルダを開く**

**「Open folder」**（または「フォルダを開く」）をクリックし、以下のフォルダを選択する:

```
C:\Users\<ユーザー名>\Documents\GitHub\my-first-mvp
```

** 3. Claude の挨拶を確認する**

フォルダが開くと Claude が自己紹介のメッセージを送ってくる。表示されれば OK。

---

### 4.4 /setup を実行する

** 1. チャットに入力する**

チャット欄に以下を入力して **Enter** を押す:

```
/setup を実行して
```

** 2. Claude の質問に答える**

Claude が順番に質問してくる。ハンズオンでは以下の例で回答してください:

| 質問 | 回答例 |
|---|---|
| このMVPで解決したい課題は？ | 店舗の出退勤管理が紙で大変 |
| 背景は？ | 複数店舗あって集計が手作業で月末が地獄 |
| 想定ユーザーは？ | 店舗スタッフと本部の総務担当 |
| 成功条件は？ | 月末集計が手作業ゼロになる |
| フロントエンドは？ | Web画面 |

** 3. Claude の自動処理が完了するのを待つ**

回答後、Claude が以下を自動で実行する（数分かかります）:

1. ✅ Vercel project 作成
2. ✅ Neon DB project + 3 ブランチ作成
3. ✅ 環境変数の設定
4. ✅ `npm install`
5. ✅ 初回コミット & ステージング push
6. ✅ ステージング URL 表示

---

### 4.5 ステージング URL を確認する

** 1. URL をブラウザで開く**

Claude が表示した URL（例: `https://my-first-mvp-staging-xxx.vercel.app`）をクリックまたはコピーしてブラウザで開く。

** 2. セットアップ完了を確認する**

「セットアップ完了」のページが表示されれば成功です。

---

## Part 5: 最初の機能を作ってみる（約5分）

---

### 5.1 ログイン機能を依頼する

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
