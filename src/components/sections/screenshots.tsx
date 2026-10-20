import Image from "next/image";

const shots = [
  {
    src: "/store-listing/screenshot-1-write-once.png",
    alt: "Yeet Chrome extension popup showing write once, cross-post between X and Threads",
    caption: "Write once",
  },
  {
    src: "/store-listing/screenshot-2-two-timelines.png",
    alt: "Yeet posting from X to Threads so the same post lands on both timelines",
    caption: "Two timelines",
  },
  {
    src: "/store-listing/screenshot-3-side-panel.png",
    alt: "Yeet side panel with pause control and last yeet status while browsing X",
    caption: "Stay in flow",
  },
];

export function Screenshots() {
  return (
    <section
      id="screenshots"
      className="max-w-340 mx-auto px-6 md:px-12 py-12 scroll-mt-8"
    >
      <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight mb-4">
        See Yeet posting from X to Threads
      </h2>
      <p className="text-ink/70 text-lg font-medium max-w-2xl mb-10">
        Same words, same photos, both places — without leaving the composer
        you&apos;re already in.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {shots.map((shot) => (
          <figure key={shot.src} className="min-w-0">
            <div className="overflow-hidden rounded-[1.5rem] border-2 border-ink bg-cream shadow-[6px_6px_0_var(--color-ink)]">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={1280}
                height={800}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <figcaption className="mt-3 text-sm font-bold text-ink/60">
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
