"use client";

export default function GlobalError() {
  return (
    <html lang="en">
      <body className="bg-ink text-white">
        <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6">
          <p className="text-sm uppercase tracking-[0.18em] text-accent">Error</p>
          <h1 className="mt-4 text-4xl font-semibold">ページを表示できませんでした</h1>
          <p className="mt-4 leading-7 text-zinc-400">
            ページを再読み込みするか、トップページへ戻ってください。
          </p>
        </main>
      </body>
    </html>
  );
}
