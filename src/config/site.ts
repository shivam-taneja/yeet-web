const CHROME_WEB_STORE_ID = "knbfidiiikhjebpijhafdikkjhbgbefe";
const CHROME_WEB_STORE_BASE = `https://chromewebstore.google.com/detail/${CHROME_WEB_STORE_ID}`;

const EDGE_ADDONS_BASE = CHROME_WEB_STORE_BASE; // TODO: Edge Add-ons URL
const FIREFOX_ADDONS_BASE =
  "https://addons.mozilla.org/en-US/firefox/addon/get-yeet/";

const STORE_UTM = {
  utm_source: "yeet_site",
  utm_medium: "website",
  utm_campaign: "get_yeet",
} as const;

function withStoreUtm(url: string): string {
  const parsed = new URL(url);
  for (const [key, value] of Object.entries(STORE_UTM)) {
    parsed.searchParams.set(key, value);
  }
  return parsed.toString();
}

const chromeWebStoreUrl = withStoreUtm(CHROME_WEB_STORE_BASE);
const edgeAddonsUrl = withStoreUtm(EDGE_ADDONS_BASE);
const firefoxAddonsUrl = withStoreUtm(FIREFOX_ADDONS_BASE);

export const siteConfig = {
  links: {
    getYeet: chromeWebStoreUrl,
    github: "https://github.com/shivam-taneja/yeet",
    howItWorks: "/#how",
    privacy: "/privacy",
    contact: "https://www.shivamtaneja.com/contact?source=yeet",
  },
  stores: {
    chrome: {
      name: "Chrome",
      href: chromeWebStoreUrl,
    },
    edge: {
      name: "Edge",
      href: edgeAddonsUrl,
    },
    firefox: {
      name: "Firefox",
      href: firefoxAddonsUrl,
    },
  },
};

export type StoreId = keyof typeof siteConfig.stores;
