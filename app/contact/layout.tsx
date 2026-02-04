import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://groweveryday.com";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with groweveryday. Have a question or want to work together? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  openGraph: {
    title: "Contact | groweveryday",
    description:
      "Get in touch with groweveryday. Have a question or want to work together? We'd love to hear from you.",
    url: `${siteUrl}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact | groweveryday",
    description:
      "Get in touch with groweveryday. Have a question or want to work together? We'd love to hear from you.",
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

