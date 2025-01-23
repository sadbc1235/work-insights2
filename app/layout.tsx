import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Work Insihgts',
  description: 'Work Insihgts',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
