"use client";

import { useEffect, useState } from "react";
import { detectStoreId, getInstallHref, getInstallLabel } from "@/lib/store";
import type { StoreId } from "@/config/site";
import { siteConfig } from "@/config/site";

type InstallStore = {
  storeId: StoreId;
  href: string;
  label: string;
};

const fallback: InstallStore = {
  storeId: "chrome",
  href: siteConfig.stores.chrome.href,
  label: getInstallLabel("chrome"),
};

export function useInstallStore(): InstallStore {
  const [store, setStore] = useState<InstallStore>(fallback);

  useEffect(() => {
    const brave = (
      navigator as Navigator & { brave?: { isBrave?: () => Promise<boolean> } }
    ).brave;

    const apply = (isBrave: boolean) => {
      const storeId = detectStoreId(navigator.userAgent, isBrave);
      setStore({
        storeId,
        href: getInstallHref(storeId),
        label: getInstallLabel(storeId),
      });
    };

    if (brave?.isBrave) {
      void brave
        .isBrave()
        .then(apply)
        .catch(() => apply(false));
      return;
    }

    apply(false);
  }, []);

  return store;
}
