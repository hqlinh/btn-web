import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./components/AuthProvider";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://groweveryday.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "groweveryday - Better Than Yesterday",
    template: "%s | groweveryday",
  },
  description:
    "BTY means Better Than Yesterday. It's a personal blog. I'm a software engineer and I'm trying to learn more about the world. I'm trying to be a better person every day.",
  keywords: [
    "blog",
    "personal blog",
    "software engineering",
    "web development",
    "programming",
    "technology",
    "learning",
    "growth",
    "self-improvement",
  ],
  authors: [{ name: "groweveryday" }],
  creator: "groweveryday",
  publisher: "groweveryday",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "groweveryday",
    title: "groweveryday - Better Than Yesterday",
    description:
      "BTY means Better Than Yesterday. It's a personal blog. I'm a software engineer and I'm trying to learn more about the world. I'm trying to be a better person every day.",
  },
  twitter: {
    card: "summary_large_image",
    title: "groweveryday - Better Than Yesterday",
    description:
      "BTY means Better Than Yesterday. It's a personal blog. I'm a software engineer and I'm trying to learn more about the world.",
    creator: "@groweveryday",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
