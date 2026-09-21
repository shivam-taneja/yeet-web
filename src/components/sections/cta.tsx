import Link from "next/link";

export function Cta() {
  return (
    <section
      id="get"
      className="max-w-360 mx-auto px-6 md:px-12 pb-24 scroll-mt-8"
    >
      <div className="relative rounded-[2rem] bg-coral border-2 border-ink p-10 md:p-16 text-cream text-center shadow-[10px_10px_0_var(--color-ink)] overflow-hidden">
        <span className="absolute top-6 left-8 text-5xl anim-yeet select-none">
          ✦
        </span>
        <span className="absolute bottom-8 right-10 text-4xl anim-drift-slow select-none">
          ✦
        </span>
        <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight leading-none mb-4">
          Stop double-typing.
        </h2>
        <p className="text-lg text-cream/85 mb-8">
          Install Yeet and let your posts fly themselves.
        </p>
        <Link
          href="#"
          className="inline-block bg-cream text-ink px-9 py-4 rounded-full font-bold text-lg border-2 border-ink shadow-[5px_5px_0_var(--color-ink)] hover:translate-y-0.5 hover:shadow-[3px_3px_0_var(--color-ink)] transition"
        >
          Get Yeet free
        </Link>
      </div>
    </section>
  );
}
