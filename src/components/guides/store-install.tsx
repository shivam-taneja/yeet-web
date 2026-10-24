import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const stores = [
  siteConfig.stores.chrome,
  siteConfig.stores.edge,
  siteConfig.stores.firefox,
];

const tones = [
  "bg-ink text-cream",
  "bg-cream text-ink",
  "bg-butter text-ink",
];

export function StoreButtons() {
  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {stores.map((store, index) => (
        <Link
          key={store.name}
          href={store.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center justify-center rounded-full border-2 border-ink px-5 py-3 text-sm font-bold shadow-[4px_4px_0_var(--color-ink)] transition hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-ink)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
            tones[index],
          )}
        >
          Get Yeet for {store.name}
        </Link>
      ))}
    </div>
  );
}

export function StoreInstall() {
  return (
    <section
      aria-labelledby="install-heading"
      className="mt-14 rounded-[1.75rem] border-2 border-ink bg-coral p-6 text-cream shadow-[6px_6px_0_var(--color-ink)] md:p-8"
    >
      <h2
        id="install-heading"
        className="font-display text-3xl font-extrabold tracking-tight md:text-4xl"
      >
        Install Yeet
      </h2>
      <p className="mt-3 max-w-2xl leading-relaxed text-cream/90">
        Free on Chrome, Edge, and Firefox. Open source under the MIT license.
        Install it in the browser where you are already signed in to X and
        Threads.
      </p>
      <StoreButtons />
      <p className="mt-5 text-sm leading-relaxed text-cream/80">
        Yeet is not affiliated with X Corp or Meta. It never asks for your
        password.{" "}
        <Link
          href={siteConfig.links.privacy}
          className="font-semibold underline decoration-cream/50 underline-offset-4 hover:decoration-cream"
        >
          Read the privacy policy
        </Link>
        {" · "}
        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline decoration-cream/50 underline-offset-4 hover:decoration-cream"
        >
          Source on GitHub
        </Link>
        .
      </p>
    </section>
  );
}
