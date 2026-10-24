import Link from "next/link";
import { siteConfig } from "@/config/site";

type Variant = "default" | "onCoral";

const stores = [
  siteConfig.stores.chrome,
  siteConfig.stores.edge,
  siteConfig.stores.firefox,
];

export function StoreAvailability({
  variant = "default",
}: {
  variant?: Variant;
}) {
  const wrap = variant === "onCoral" ? "text-cream" : "text-ink/75";
  const link =
    variant === "onCoral"
      ? "underline decoration-cream/50 underline-offset-4 hover:decoration-cream"
      : "underline decoration-ink/30 underline-offset-4 hover:text-coral hover:decoration-coral";
  const sep = variant === "onCoral" ? "text-cream/50" : "text-ink/35";

  return (
    <p className={`text-sm font-semibold ${wrap}`}>
      <span className={variant === "onCoral" ? "text-cream/80" : "text-ink/55"}>
        Also on{" "}
      </span>
      {stores.map((store, i) => (
        <span key={store.name}>
          {i > 0 && <span className={`mx-2 ${sep}`}>•</span>}
          <Link
            href={store.href}
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            {store.name}
          </Link>
        </span>
      ))}
    </p>
  );
}
