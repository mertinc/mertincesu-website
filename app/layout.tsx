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
  title: "Mert Incesu — Backend Software Engineer",
  description:
    "Mert Incesu is a backend software engineer based in Munich, building reliable distributed systems with Kotlin, Java, Spring Boot, and PostgreSQL.",
  authors: [{ name: "Mert Incesu" }],
  openGraph: {
    title: "Mert Incesu — Backend Software Engineer",
    description:
      "Backend engineer in Munich. Kotlin, Spring Boot, distributed systems.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#0b0c0e" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
