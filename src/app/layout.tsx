import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "vibe-coding-template",
  description: "Claude Desktop で立ち上げる MVP テンプレート",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
