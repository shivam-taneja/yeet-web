import type { Metadata } from "next";

export const siteUrl = "http://yeet.shivamtaneja.com";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yeet — Write once. Land everywhere.",
    template: "%s | Yeet",
  },
  description:
    "Yeet carries your posts between X and Threads automatically. Post in one place, it lands in the other. No copy-paste, no re-typing.",
  keywords: [
    "Yeet",
    "Twitter",
    "X",
    "Threads",
    "Cross-posting",
    "Social Media Automation",
    "Chrome Extension",
    "Sync posts",
  ],
  authors: [
    {
      name: "Shivam Taneja",
      url: "https://shivamtaneja.com",
    },
  ],
  creator: "Shivam Taneja",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Yeet — Write once. Land everywhere.",
    description:
      "Post on X, it lands on Threads. Post on Threads, it lands on X. Automatically.",
    siteName: "Yeet",
    images: [
      {
        url: "/yeet-og.png",
        width: 1200,
        height: 630,
        alt: "Yeet - Write once, Land everywhere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yeet — Write once. Land everywhere.",
    description:
      "Post on X, it lands on Threads. Post on Threads, it lands on X. Automatically.",
    creator: "@codesbyshivam",
    images: ["/yeet-og.png"],
  },
  icons: {
    icon: "/yeet-icon.svg",
    shortcut: "/yeet-icon.png",
    apple: "/yeet-icon.png",
  },
  manifest: "/site.webmanifest",
};
