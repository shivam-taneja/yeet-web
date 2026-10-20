import type { Metadata } from "next";

export const siteUrl = "https://yeet.shivamtaneja.com";

const title = "Yeet — Auto cross-post between X and Threads";
const description =
  "Write on X, it posts to Threads by itself. Write on Threads, it lands on X. Images included. Free and open source.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Yeet",
  },
  description,
  keywords: [
    "Yeet",
    "cross-post X and Threads",
    "post to X and Threads at once",
    "auto cross-post",
    "Twitter",
    "X",
    "Threads",
    "cross-posting",
    "cross post images",
    "Chrome extension",
    "social media automation",
    "free open source",
  ],
  authors: [
    {
      name: "Shivam Taneja",
      url: "https://shivamtaneja.com",
    },
  ],
  creator: "Shivam Taneja",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title,
    description,
    siteName: "Yeet",
    images: [
      {
        url: "/yeet-og.png",
        width: 1200,
        height: 630,
        alt: "Yeet auto cross-posting from X to Threads with text and images",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
