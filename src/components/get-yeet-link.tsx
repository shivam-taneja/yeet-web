"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useInstallStore } from "@/hooks/use-install-store";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  /** When true, children are replaced with a browser-specific label. */
  useLabel?: boolean;
};

export function GetYeetLink({ children, useLabel = false, ...props }: Props) {
  const { href, label } = useInstallStore();

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {useLabel ? label : children}
    </Link>
  );
}
