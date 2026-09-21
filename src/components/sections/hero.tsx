import Link from "next/link";
import { siteConfig } from "@/config/site";
import { QuickPopup } from "@/components/product-preview/quick-popup";

export function Hero() {
  return (
    <section className="max-w-340 mx-auto px-6 md:px-12 pt-16 md:pt-28 pb-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        <div className="max-w-4xl relative">
          <span className="absolute -top-8 -left-8 text-6xl text-coral anim-yeet select-none max-md:hidden">
            ✦
          </span>
          <h1 className="font-display font-extrabold leading-[0.88] tracking-[-0.03em] text-[clamp(2.5rem,6vw,5.5rem)]">
            Write once.
            <br />
            <span className="text-coral flex items-center gap-2">
              Yeet
              <svg
                viewBox="0 0 24 24"
                className="w-[clamp(2rem,6vw,5rem)] h-[clamp(2rem,6vw,5rem)] stroke-3"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-7-7 7 7-7 7"
                />
              </svg>
            </span>
            everywhere.
          </h1>
          <p className="mt-8 text-lg md:text-2xl text-ink/75 max-w-2xl leading-relaxed font-medium">
            Yeet carries your posts between X and Threads automatically. Type it
            in one place, and it lands in the other — same moment, no
            copy-paste.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href={siteConfig.links.getYeet}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-coral text-cream px-8 py-4 rounded-full font-bold text-lg border-2 border-ink shadow-[5px_5px_0_var(--color-ink)] hover:translate-y-0.5 hover:shadow-[3px_3px_0_var(--color-ink)] transition"
            >
              Yeet it now
            </Link>
            <Link
              href={siteConfig.links.howItWorks}
              className="bg-cream text-ink px-8 py-4 rounded-full font-bold text-lg border-2 border-ink hover:bg-ink/5 transition"
            >
              See how
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-ink/60">
            <span>✓ Free to install</span>
            <span>✓ Two-way sync</span>
            <span>✓ No re-typing</span>
            <span>✓ Works on the web</span>
          </div>
        </div>

        <div className="hidden lg:block relative -top-12 z-10 shrink-0 transform lg:rotate-3 lg:hover:rotate-0 transition-transform duration-300">
          <QuickPopup />
        </div>
      </div>
    </section>
  );
}
