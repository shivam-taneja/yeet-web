import Link from "next/link";
import { guides } from "@/config/guides";

const toneClass = {
  mint: "bg-mint text-ink",
  butter: "bg-butter text-ink",
  grape: "bg-grape text-cream",
} as const;

export function Guides() {
  return (
    <section
      id="guides"
      className="mx-auto max-w-340 scroll-mt-28 px-6 py-12 md:px-12"
    >
      <h2 className="mb-4 font-display text-3xl font-extrabold tracking-tight md:text-5xl">
        Guides
      </h2>
      <p className="mb-10 max-w-2xl text-lg font-medium text-ink/70">
        Practical notes on posting to X and Threads without typing the same
        thing twice.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {guides.map((guide) => (
          <Link
            key={guide.id}
            href={guide.href}
            className={`block rounded-[1.75rem] border-2 border-ink p-7 shadow-[6px_6px_0_var(--color-ink)] transition hover:-translate-y-0.5 hover:shadow-[8px_8px_0_var(--color-ink)] ${toneClass[guide.tone]}`}
          >
            <h3 className="mb-3 font-display text-xl font-bold">
              {guide.cardTitle}
            </h3>
            <p
              className={`text-[15px] leading-relaxed ${
                guide.tone === "grape" ? "text-cream/85" : "text-ink/75"
              }`}
            >
              {guide.cardBody}
            </p>
            <span className="mt-5 inline-block text-sm font-bold underline decoration-current/40 underline-offset-4">
              Read the guide
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
