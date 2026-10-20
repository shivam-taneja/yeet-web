export function HowItWorks() {
  return (
    <section
      id="how"
      className="max-w-340 mx-auto px-6 md:px-12 py-12 scroll-mt-8"
    >
      <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight mb-10">
        Post to X and Threads at once.
        <br className="hidden md:block" /> That&apos;s the whole job.
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-mint border-2 border-ink rounded-[1.75rem] p-7 shadow-[6px_6px_0_var(--color-ink)]">
          <div className="text-4xl mb-4 select-none">↔</div>
          <h3 className="font-display font-bold text-xl mb-2">
            Two-way by default
          </h3>
          <p className="text-ink/70 text-[15px] leading-relaxed">
            Write on X, it posts to Threads. Write on Threads, it lands on X.
            Both directions, no switches to remember.
          </p>
        </div>
        <div className="bg-butter border-2 border-ink rounded-[1.75rem] p-7 shadow-[6px_6px_0_var(--color-ink)]">
          <div className="text-4xl mb-4 select-none">▣</div>
          <h3 className="font-display font-bold text-xl mb-2">
            Text and images
          </h3>
          <p className="text-ink/70 text-[15px] leading-relaxed">
            Turn on Copy Images in Settings and your photos hop over too — up to
            four on X. Videos and GIFs are next.
          </p>
        </div>
        <div className="bg-coral text-cream border-2 border-ink rounded-[1.75rem] p-7 shadow-[6px_6px_0_var(--color-ink)]">
          <div className="text-4xl mb-4 select-none">⚡</div>
          <h3 className="font-display font-bold text-xl mb-2">
            Posts by itself
          </h3>
          <p className="text-cream/85 text-[15px] leading-relaxed">
            Hit Post (or Cmd/Ctrl + Enter). Yeet opens a background tab, fills
            the other composer, and posts — no copy-paste.
          </p>
        </div>
      </div>
    </section>
  );
}
