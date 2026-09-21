export function HowItWorks() {
  return (
    <section
      id="how"
      className="max-w-360 mx-auto px-6 md:px-12 py-12 scroll-mt-8"
    >
      <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight mb-10">
        Three things it does.
        <br className="hidden md:block" /> That&apos;s the whole job.
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-mint border-2 border-ink rounded-[1.75rem] p-7 shadow-[6px_6px_0_var(--color-ink)]">
          <div className="text-4xl mb-4 select-none">↔</div>
          <h3 className="font-display font-bold text-xl mb-2">
            Two-way by default
          </h3>
          <p className="text-ink/70 text-[15px] leading-relaxed">
            Post on X, it lands on Threads. Post on Threads, it lands on X. No
            switches, no rules to remember.
          </p>
        </div>
        <div className="bg-butter border-2 border-ink rounded-[1.75rem] p-7 shadow-[6px_6px_0_var(--color-ink)]">
          <div className="text-4xl mb-4 select-none">✎</div>
          <h3 className="font-display font-bold text-xl mb-2">
            Write once, ship twice
          </h3>
          <p className="text-ink/70 text-[15px] leading-relaxed">
            One box, one thought. Yeet carries the exact words to both timelines
            in seconds.
          </p>
        </div>
        <div className="bg-coral text-cream border-2 border-ink rounded-[1.75rem] p-7 shadow-[6px_6px_0_var(--color-ink)]">
          <div className="text-4xl mb-4 select-none">⚡</div>
          <h3 className="font-display font-bold text-xl mb-2">No copy-paste</h3>
          <p className="text-cream/85 text-[15px] leading-relaxed">
            No re-typing, no reposting, no &quot;did I forget the other
            one?&quot; It&apos;s already done.
          </p>
        </div>
      </div>
    </section>
  );
}
