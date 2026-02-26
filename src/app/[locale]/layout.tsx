import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Discover Monastir | The Pearl of Tunisia",
  description: "Explore the beautiful city of Monastir, Tunisia. From the historic Ribat to the stunning Marina, discover everything you need to know about your next tourism destination.",
  keywords: ["Monastir", "Tunisia", "Tourism", "Ribat of Monastir", "Sights", "Travel"],
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="emerald-tp"
          strategy="beforeInteractive"
          data-noptimize="1"
          data-cfasync="false"
          data-wpfc-render="false"
        >
          {`
            (function () {
                var script = document.createElement("script");
                script.async = 1;
                script.src = 'https://emrldtp.cc/NTAyNzM2.js?t=502736';
                document.head.appendChild(script);
            })();
          `}
        </Script>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
