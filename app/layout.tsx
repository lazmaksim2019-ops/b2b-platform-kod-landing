import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/app/context/ThemeContext";
import ScrollProgress from "@/app/components/ScrollProgress";
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
  description:
    "Интеллектуальная система автоматизации для владельцев и топ-менеджеров. Сокращайте рутину, управляйте спецификациями и оптимизируйте B2B-продажи с помощью ИИ-ассистентов.",
  keywords:
    "автоматизация бизнеса, B2B, интеллектуальные алгоритмы, seamless-интеграции, платформа К-О-Д",
  openGraph: {
    title: "Платформа К-О-Д — Автоматизация B2B бизнес-процессов",
    description:
      "Интеллектуальная система автоматизации для владельцев и топ-менеджеров. Сокращайте рутину, управляйте спецификациями и оптимизируйте B2B-продажи с помощью ИИ-ассистентов.",
    type: "website",
    siteName: "Платформа К-О-Д",
    locale: "ru_RU",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kod_platform",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://platforma-kod.vercel.app"),
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Платформа К-О-Д",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Интеллектуальная система автоматизации B2B бизнес-процессов. ИИ-ассистенты, seamless-интеграции, умная аналитика.",
  offers: {
    "@type": "Offer",
    price: "5000",
    priceCurrency: "RUB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                  document.documentElement.classList.remove('preload');
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Перейти к содержимому
        </a>
        <ThemeProvider>
          <ScrollProgress />
          <main id="main-content">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
