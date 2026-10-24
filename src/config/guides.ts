import type { Metadata } from "next";
import { siteUrl } from "@/config/seo";

/** Longer walkthrough, same topic as the how-to guide. */
export const mediumGuideUrl =
  "https://codesbyshivam.medium.com/how-to-post-to-x-and-threads-at-the-same-time-free-2026-550c384d128c";

export const guides = [
  {
    id: "how-to",
    href: "/how-to-post-to-x-and-threads-at-the-same-time",
    title: "How to Post to X and Threads at the Same Time | Yeet",
    description:
      "Compare copy-paste, schedulers, and Yeet for posting to X and Threads at the same time, with free setup steps for automatic two-way cross-posting.",
    footerLabel: "Post to X and Threads",
    cardTitle: "How to post to X and Threads at the same time",
    cardBody:
      "Copy-paste, a scheduler, or Yeet. What each one does, and how to set up automatic two-way posting.",
    tone: "mint",
  },
  {
    id: "threads-to-x",
    href: "/threads-to-x",
    title: "Cross-post Threads to X (Twitter) Automatically | Yeet",
    description:
      "Automatically cross-post from Threads to X (Twitter), and from X back to Threads. Yeet fills the other composer and posts your text and images.",
    footerLabel: "Threads to X",
    cardTitle: "Cross-post Threads to X",
    cardBody:
      "Press Post on Threads and land on X. The same extension also posts from X back to Threads.",
    tone: "butter",
  },
  {
    id: "free-tools",
    href: "/free-cross-posting-tools",
    title: "Free Tools to Cross-post Between X and Threads | Yeet",
    description:
      "An honest comparison of free ways to cross-post between X and Threads: Yeet, Crossposter, posting by hand, and what paid schedulers are for.",
    footerLabel: "Free cross-posting tools",
    cardTitle: "Free tools to cross-post X and Threads",
    cardBody:
      "Yeet, Crossposter, doing it by hand, and when a paid scheduler is the tool you actually want.",
    tone: "grape",
  },
] as const;

export type GuideId = (typeof guides)[number]["id"];

const TITLE_MAX = 60;
const DESCRIPTION_MAX = 155;

for (const guide of guides) {
  if (guide.title.length > TITLE_MAX) {
    throw new Error(
      `SEO title for ${guide.id} is ${guide.title.length} characters (max ${TITLE_MAX})`,
    );
  }
  if (guide.description.length > DESCRIPTION_MAX) {
    throw new Error(
      `Meta description for ${guide.id} is ${guide.description.length} characters (max ${DESCRIPTION_MAX})`,
    );
  }
}

export function getGuide(id: GuideId) {
  const guide = guides.find((item) => item.id === id);
  if (!guide) {
    throw new Error(`Unknown guide: ${id}`);
  }
  return guide;
}

export function guideMetadata(id: GuideId): Metadata {
  const guide = getGuide(id);
  const url = `${siteUrl}${guide.href}`;
  const image = {
    url: "/yeet-og.png",
    width: 1200,
    height: 630,
    alt: "Yeet auto cross-posting between X and Threads",
  };

  return {
    title: { absolute: guide.title },
    description: guide.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url,
      siteName: "Yeet",
      title: guide.title,
      description: guide.description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      creator: "@codesbyshivam",
      images: [image.url],
    },
  };
}
