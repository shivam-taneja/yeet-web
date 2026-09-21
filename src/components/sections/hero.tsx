import Link from "next/link";

export function Hero() {
  return (
    <section className="max-w-360 mx-auto px-6 md:px-12 pt-10 md:pt-16 pb-10">
      <div className="relative max-w-275">
        <span className="absolute -top-2 -left-2 md:-left-6 text-coral text-6xl md:text-7xl font-display font-extrabold anim-drift select-none">
          ✦
        </span>
        <span className="absolute top-16 right-6 text-grape text-4xl font-display font-extrabold anim-drift-slow select-none">
          ✦
        </span>
        <h1 className="font-display font-extrabold leading-[0.88] tracking-[-0.03em] text-[clamp(3.2rem,10.5vw,9rem)]">
          <span className="block">Write once.</span>
          <span className="block text-coral">
            Yeet
            <span className="inline-block align-super text-[0.42em] anim-yeet">
              →
            </span>
          </span>
          <span className="block">everywhere.</span>
        </h1>
      </div>
      <p className="mt-8 max-w-xl text-lg md:text-xl text-ink/70 leading-relaxed">
        Yeet carries your posts between X and Threads automatically. Type it in
        one place, and it lands in the other — same moment, no copy-paste.
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-4">
        <Link
          href="#get"
          className="bg-coral text-cream px-8 py-4 rounded-full font-bold text-lg border-2 border-ink shadow-[6px_6px_0_var(--color-ink)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_var(--color-ink)] transition"
        >
          Yeet it now
        </Link>
        <Link
          href="#how"
          className="bg-cream text-ink px-8 py-4 rounded-full font-bold text-lg border-2 border-ink hover:bg-butter transition"
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
    </section>
  );
}
