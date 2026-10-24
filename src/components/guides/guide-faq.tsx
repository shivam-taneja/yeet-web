"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type GuideFaqItem = {
  question: string;
  answer: string;
};

export function GuideFaq({ items }: { items: GuideFaqItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="mt-14" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2
        id="faq-heading"
        className="scroll-mt-28 font-display text-2xl font-extrabold tracking-tight md:text-3xl"
      >
        Frequently asked questions
      </h2>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <FaqItem
            key={item.question}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: GuideFaqItem) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `faq-${question.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-ink bg-cream shadow-[4px_4px_0_var(--color-ink)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--color-ink)]">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-display text-lg font-bold transition-colors hover:bg-ink/5 md:text-xl"
      >
        <span>{question}</span>
        <ChevronDown
          className={`size-6 shrink-0 text-coral transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        id={panelId}
        role="region"
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pt-2 pb-6 text-base leading-relaxed font-medium text-ink/80 md:text-lg">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
