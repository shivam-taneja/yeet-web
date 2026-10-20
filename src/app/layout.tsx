import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";

export const viewport: Viewport = {
  themeColor: "#202020",
};
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
      "Write on X, it posts to Threads by itself. Write on Threads, it lands on X. Images included. Free and open source.",
    url: siteUrl,
    downloadUrl:
      "https://chromewebstore.google.com/detail/knbfidiiikhjebpijhafdikkjhbgbefe",
    softwareVersion: "1.3.0",
    isAccessibleForFree: true,
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
      <body className="antialiased overflow-x-hidden">
        {children}

        <Analytics />
        <GoogleAnalytics gaId="G-VCC4KNCCQ5" />
      </body>
    </html>
  );
}
