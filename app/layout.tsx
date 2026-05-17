import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `${profile.nameJa} | ${profile.fieldJa}`,
  description: profile.intro,
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: `${profile.nameJa} | ${profile.fieldJa}`,
    description: profile.intro,
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
