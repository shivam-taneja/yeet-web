import Link from "next/link";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/layout/back-to-top";
import { guides, type GuideId } from "@/config/guides";

const textLinkClass =
  "font-semibold text-coral underline decoration-coral/40 underline-offset-4 hover:decoration-coral";

export function GuidePage({
  breadcrumb,
  children,
}: {
  breadcrumb: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-cream font-body text-ink selection:bg-coral selection:text-cream">
      <Header />
      <main className="flex-1">
        <article className="mx-auto w-full max-w-4xl px-6 py-16 md:px-12 md:py-24">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm font-semibold">
            <ol className="flex flex-wrap items-center gap-2 text-ink/55">
              <li>
                <Link href="/" className="hover:text-coral">
                  Yeet
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-ink/80">{breadcrumb}</li>
            </ol>
          </nav>
          {children}
        </article>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export function GuideH1({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
      {children}
    </h1>
  );
}

export function GuideLead({ children }: { children: ReactNode }) {
  return (
    <p className="mt-6 text-lg font-medium leading-relaxed text-ink/75 md:text-xl">
      {children}
    </p>
  );
}

export function GuideH2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-14 scroll-mt-28 font-display text-2xl font-extrabold tracking-tight md:text-3xl"
    >
      {children}
    </h2>
  );
}

export function GuideP({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 text-base leading-relaxed text-ink/80 md:text-lg">
      {children}
    </p>
  );
}

export function TextLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  if (external) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={textLinkClass}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={textLinkClass}>
      {children}
    </Link>
  );
}

export function OnThisPage({
  items,
}: {
  items: { href: string; label: string }[];
}) {
  return (
    <nav
      aria-label="On this page"
      className="mt-8 rounded-2xl border-2 border-ink bg-cream p-5 shadow-[4px_4px_0_var(--color-ink)]"
    >
      <p className="font-display text-sm font-extrabold tracking-wide text-ink/50 uppercase">
        On this page
      </p>
      <ol className="mt-3 space-y-2 text-sm font-semibold">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:text-coral">
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

const calloutTone = {
  butter: "bg-butter text-ink",
  mint: "bg-mint text-ink",
  coral: "bg-coral text-cream",
} as const;

export function Callout({
  title,
  children,
  tone = "butter",
}: {
  title: string;
  children: ReactNode;
  tone?: keyof typeof calloutTone;
}) {
  return (
    <aside
      className={`mt-6 rounded-2xl border-2 border-ink p-5 shadow-[4px_4px_0_var(--color-ink)] ${calloutTone[tone]}`}
    >
      <p className="font-display text-lg font-extrabold">{title}</p>
      <div
        className={`mt-2 text-[15px] leading-relaxed md:text-base ${
          tone === "coral" ? "text-cream/90" : "text-ink/80"
        }`}
      >
        {children}
      </div>
    </aside>
  );
}

export function StepList({
  steps,
}: {
  steps: { title: string; body: ReactNode }[];
}) {
  return (
    <ol className="mt-6 space-y-4">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="flex gap-4 rounded-2xl border-2 border-ink bg-cream p-4 shadow-[4px_4px_0_var(--color-ink)] md:p-5"
        >
          <span
            className="grid size-9 shrink-0 place-items-center rounded-full border-2 border-ink bg-butter font-display text-sm font-extrabold"
            aria-hidden
          >
            {index + 1}
          </span>
          <div className="min-w-0">
            <h3 className="font-display text-lg font-bold leading-snug">
              {step.title}
            </h3>
            <div className="mt-1.5 text-[15px] leading-relaxed text-ink/75 md:text-base">
              {step.body}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function RelatedGuides({ current }: { current: GuideId }) {
  const others = guides.filter((guide) => guide.id !== current);

  return (
    <aside aria-label="Related guides" className="mt-14">
      <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">
        Keep reading
      </h2>
      <ul className="mt-5 space-y-3">
        <li>
          <Link href="/" className={textLinkClass}>
            Yeet homepage
          </Link>
          <span className="text-ink/70">
            {" "}
            — what the extension does, in one page.
          </span>
        </li>
        {others.map((guide) => (
          <li key={guide.id}>
            <Link href={guide.href} className={textLinkClass}>
              {guide.cardTitle}
            </Link>
            <span className="text-ink/70"> — {guide.cardBody}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
