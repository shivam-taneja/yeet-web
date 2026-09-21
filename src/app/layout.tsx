import type { Metadata } from "next";
import { Bricolage_Grotesque, Space_Grotesk } from "next/font/google";
import { defaultMetadata, siteUrl } from "@/config/seo";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Yeet",
    operatingSystem: "Chrome",
    applicationCategory: "BrowserApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Yeet carries your posts between X and Threads automatically. Post in one place, it lands in the other.",
    url: siteUrl,
  };

  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${spaceGrotesk.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
