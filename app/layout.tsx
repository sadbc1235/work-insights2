import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic"
const Header = dynamic(() => import('../components/header/Header'), { ssr: false })

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
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
