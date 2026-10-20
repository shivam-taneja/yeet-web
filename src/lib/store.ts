import { siteConfig, type StoreId } from "@/config/site";

/** Brave / Chromium / unknown → Chrome Web Store. */
export function detectStoreId(userAgent: string, isBrave?: boolean): StoreId {
  const ua = userAgent.toLowerCase();

  if (ua.includes("firefox")) return "firefox";
  // Edge before Chrome — Edge UA also contains "chrome".
  if (ua.includes("edg/") || ua.includes("edgios") || ua.includes("edga")) {
    return "edge";
  }
  if (isBrave || ua.includes("brave")) return "chrome";
  if (
    ua.includes("chrome") ||
    ua.includes("chromium") ||
    ua.includes("crios")
  ) {
    return "chrome";
  }

  return "chrome";
}

export function getInstallHref(storeId: StoreId): string {
  return siteConfig.stores[storeId].href;
}

export function getInstallLabel(storeId: StoreId): string {
  return `Get Yeet on ${siteConfig.stores[storeId].name}`;
}
