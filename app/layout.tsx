import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Платформа К-О-Д — Автоматизация B2B бизнес-процессов",
  description: "Интеллектуальная система автоматизации для владельцев и топ-менеджеров. Сокращайте рутину, управляйте спецификациями и оптимизируйте B2B-продажи с помощью ИИ-ассистентов.",
  keywords: "автоматизация бизнеса, B2B, интеллектуальные алгоритмы, seamless-интеграции, платформа К-О-Д",
  openGraph: {
    title: "Платформа К-О-Д — Автоматизация B2B бизнес-процессов",
    description: "Интеллектуальная система автоматизации для владельцев и топ-менеджеров. Сокращайте рутину, управляйте спецификациями и оптимизируйте B2B-продажи с помощью ИИ-ассистентов.",
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kod_platform",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
