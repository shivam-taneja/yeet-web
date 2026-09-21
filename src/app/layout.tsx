import type { Metadata } from "next";
import { Bricolage_Grotesque, Space_Grotesk } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Yeet — Write once. Land everywhere.",
  description:
    "Yeet carries your posts between X and Threads automatically. Post in one place, it lands in the other. No copy-paste, no re-typing.",
  openGraph: {
    title: "Yeet — Write once. Land everywhere.",
    description:
      "Post on X, it lands on Threads. Post on Threads, it lands on X. Automatically.",
    type: "website",
    images: [
      "https://id-preview--79bba9ea-2356-4d7f-ade9-eb094594ec64.lovable.app/__l5e/assets-v1/47381fd8-f9df-4637-91d7-122ce2e31508/yeet-og.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://id-preview--79bba9ea-2356-4d7f-ade9-eb094594ec64.lovable.app/__l5e/assets-v1/47381fd8-f9df-4637-91d7-122ce2e31508/yeet-og.png",
    ],
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
      className={`${bricolage.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
