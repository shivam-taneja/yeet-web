"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

/** Show once the user has scrolled past this fraction of the page. */
const SHOW_AFTER_SCROLL_RATIO = 0.35;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollable = docHeight - viewportHeight;

      if (scrollable <= 0) {
        setVisible(false);
        return;
      }

      setVisible(scrollTop / scrollable >= SHOW_AFTER_SCROLL_RATIO);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={cn(
        "fixed bottom-20 right-6 z-50 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-coral px-4 py-2.5 text-sm font-bold text-cream shadow-[4px_4px_0_var(--color-ink)] transition-all duration-300",
        "hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-ink)] hover:bg-grape",
        "active:translate-y-1 active:shadow-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
        "cursor-pointer",
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-3 opacity-0 pointer-events-none",
      )}
    >
      <ArrowUp className="size-4 stroke-[2.5]" aria-hidden />
      Back to top
    </button>
  );
}
