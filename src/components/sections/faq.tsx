"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I post to X and Threads at the same time?",
    answer:
      "Yes. Yeet is built for that. Post on X and it auto cross-posts to Threads; post on Threads and it lands on X. Both directions work from the normal Post click or Cmd/Ctrl + Enter.",
  },
  {
    question: "Does it support images?",
    answer:
      "Yes. Enable Copy Images in Settings and Yeet carries photos both ways (X ↔ Threads), up to four images on X. Videos and GIFs are not copied yet — if one is attached, Yeet skips the cross-post with an alert and your source post still goes through.",
  },
  {
    question: "Is it free?",
    answer:
      "Yes. Yeet is completely free and open source under the MIT License. No account, no subscription, no paywall.",
  },
  {
    question: "How does Yeet work?",
    answer:
      "Yeet is a Chrome extension that runs in your browser. When you post on X or Threads, it captures the text (and images, if Copy Images is on), opens a background tab on the other platform, fills the composer, and posts for you using the session you’re already logged into.",
  },
  {
    question: "Do I need to give you my passwords?",
    answer:
      "No. Yeet uses your existing logged-in sessions on X and Threads. We never see your passwords or store your login tokens.",
  },
  {
    question: "Are my posts stored on your servers?",
    answer:
      "No. There is no Yeet server and no database. Draft text and images stay in your browser’s extension storage only long enough to complete the cross-post, then they’re cleared.",
  },
];

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="max-w-340 mx-auto px-6 md:px-12 py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-center mb-12">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-ink rounded-2xl bg-cream overflow-hidden shadow-[4px_4px_0_var(--color-ink)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--color-ink)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-6 py-5 text-left font-display font-bold text-lg md:text-xl transition-colors hover:bg-ink/5 cursor-pointer"
      >
        <span>{question}</span>
        <ChevronDown
          className={`size-6 shrink-0 text-coral transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-2">
            <p className="text-ink/80 text-base md:text-lg leading-relaxed font-medium">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
