import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink font-body selection:bg-coral selection:text-cream overflow-x-hidden">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24">
        <div className="max-w-md text-center relative">
          <span className="absolute -top-12 -left-12 text-6xl text-coral anim-yeet select-none opacity-50">
            ✦
          </span>
          <h1 className="text-8xl md:text-9xl font-display font-extrabold tracking-tight text-ink drop-shadow-[4px_4px_0_var(--color-coral)]">
            404
          </h1>
          <h2 className="mt-6 text-2xl font-bold font-display text-ink">
            Page not found
          </h2>
          <p className="mt-4 text-ink/75 leading-relaxed">
            Looks like this page got yeeted into the void. The link you followed
            might be broken, or the page no longer exists.
          </p>
          <div className="mt-10">
            <Link
              href="/"
              className="inline-block bg-coral text-cream px-8 py-4 rounded-full font-bold text-lg border-2 border-ink shadow-[5px_5px_0_var(--color-ink)] hover:translate-y-0.5 hover:shadow-[3px_3px_0_var(--color-ink)] transition"
            >
              Back to safety
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
