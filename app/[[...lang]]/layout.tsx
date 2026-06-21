import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  defaultLocale,
  localeFromSegments,
  localePath,
  resolveLocale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface LangParams {
  params: Promise<{ lang?: string[] }>;
}

export async function generateStaticParams() {
  return [{ lang: undefined }, { lang: ["de"] }, { lang: ["tr"] }];
}

export async function generateMetadata({
  params,
}: LangParams): Promise<Metadata> {
  const locale = localeFromSegments((await params).lang) ?? defaultLocale;
  const { meta } = await getDictionary(locale);

  return {
    metadataBase: new URL("https://mertincesu.com"),
    title: meta.title,
    description: meta.description,
    authors: [{ name: "Mert Incesu" }],
    alternates: {
      canonical: localePath(locale),
      languages: { en: "/", de: "/de", tr: "/tr", "x-default": "/" },
    },
    openGraph: {
      title: meta.title,
      description: meta.ogDescription,
      type: "website",
      locale: meta.ogLocale,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode }> & LangParams) {
  const locale = resolveLocale((await params).lang);

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#0b0c0e" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
