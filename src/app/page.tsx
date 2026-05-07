export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8 bg-neutral-50">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">
          🎉 セットアップ完了
        </h1>
        <p className="text-neutral-600 leading-relaxed">
          このページが見えていれば、ステージング環境が正しく動いています。
        </p>
        <div className="bg-white border border-neutral-200 rounded-lg p-6 text-left space-y-3">
          <h2 className="font-semibold text-neutral-900">次のステップ</h2>
          <p className="text-sm text-neutral-700">
            Claude Desktop に戻って、作りたいものを話しかけてください。例:
          </p>
          <ul className="text-sm text-neutral-700 list-disc list-inside space-y-1">
            <li>「ログイン画面を作って」</li>
            <li>「タスク管理機能を追加して」</li>
            <li>「ユーザー一覧を表示するページを作って」</li>
          </ul>
        </div>
        <p className="text-xs text-neutral-400">
          このページは <code className="bg-neutral-100 px-1.5 py-0.5 rounded">src/app/page.tsx</code> です。
          機能を追加すると Claude が自動で書き換えます。
        </p>
      </div>
    </main>
  );
}
