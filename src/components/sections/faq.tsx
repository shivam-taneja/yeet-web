"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does Yeet work?",
    answer:
      "Yeet is a client-side Chrome extension. When you compose a post on X or Threads, it captures the text and automatically submits it to the other platform in the background, simulating your own actions.",
  },
  {
    question: "Do I need to give you my passwords?",
    answer:
      "No! Since Yeet is a browser extension, it securely uses your existing logged-in sessions on X and Threads. We never see your passwords or store your login tokens.",
  },
  {
    question: "Are my posts stored on your servers?",
    answer:
      "Not at all. We don't even have a database. Yeet operates 100% locally in your browser and communicates directly with the respective social media APIs.",
  },
  {
    question: "Is this completely free?",
    answer: "Yes, Yeet is currently completely free and 100% open-source.",
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
