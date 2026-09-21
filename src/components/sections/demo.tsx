export function Demo() {
  return (
    <section className="max-w-340 mx-auto px-6 md:px-12 py-14">
      <div className="rounded-[2rem] bg-grape border-2 border-ink p-8 md:p-14 text-cream shadow-[10px_10px_0_var(--color-ink)]">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl select-none">✳</span>
          <h2 className="font-display font-bold text-2xl md:text-3xl">
            Watch a Yeet happen
          </h2>
        </div>
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-center">
          <div className="bg-cream text-ink rounded-3xl border-2 border-ink p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="size-7 rounded-full bg-ink text-cream grid place-items-center text-sm font-bold">
                X
              </span>
              <span className="font-semibold text-sm">X</span>
            </div>
            <p className="text-[15px] leading-relaxed">
              Shipped the new Yeet flow today. Posts hop over on their own now.
              No more double-typing 🙌
            </p>
            <div className="mt-4 flex gap-5 text-xs text-ink/50">
              <span>♥ 214</span>
              <span>💬 32</span>
              <span>↻ 41</span>
            </div>
          </div>
          <div className="flex md:flex-col items-center gap-2">
            <span className="bg-butter text-ink text-3xl font-display font-extrabold px-5 py-2 rounded-full border-2 border-ink anim-yeet whitespace-nowrap">
              yeet →
            </span>
            <span className="text-cream/60 text-xs font-semibold tracking-widest uppercase">
              auto
            </span>
          </div>
          <div className="bg-cream text-ink rounded-3xl border-2 border-ink p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="size-7 rounded-full bg-mint text-ink grid place-items-center text-sm font-bold">
                @
              </span>
              <span className="font-semibold text-sm">Threads</span>
            </div>
            <p className="text-[15px] leading-relaxed">
              Shipped the new Yeet flow today. Posts hop over on their own now.
              No more double-typing 🙌
            </p>
            <div className="mt-4 flex gap-5 text-xs text-ink/50">
              <span>♥ 118</span>
              <span>💬 14</span>
              <span>↻ 9</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
