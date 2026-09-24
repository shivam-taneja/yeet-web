"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  MoreHorizontal,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { PlatformBadge } from "@/components/product-preview/platform-badge";
import { StatusPill } from "@/components/product-preview/status-pill";
import { DirectionToggle } from "@/components/product-preview/direction-toggle";
import { QuickPopup } from "@/components/product-preview/quick-popup";

const activity = [
  {
    source: "X",
    target: "Threads",
    text: "Small wins deserve a little noise.",
    time: "Just now",
  },
  {
    source: "Threads",
    target: "X",
    text: "Building in public, minus the double work.",
    time: "12m",
  },
  {
    source: "X",
    target: "Threads",
    text: "Okay, this one shipped faster than expected.",
    time: "1h",
  },
];

export function YeetProductPreview() {
  const [active, setActive] = useState(true);
  const [xToThreads, setXToThreads] = useState(true);
  const [threadsToX, setThreadsToX] = useState(true);

  return (
    <section
      id="product"
      className="border-y-2 border-ink bg-butter py-16 md:py-24"
    >
      <div className="mx-auto max-w-340 px-6 md:px-12">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-coral">
              Meet the tiny posting sidekick
            </p>
            <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-none md:text-6xl">
              One quick peek.
              <br />
              Everything’s handled.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-ink/65">
            See what’s connected, pause a direction, and check what landed —
            without leaving the page you’re on.
          </p>
        </div>

        <div className="grid min-w-0 items-start gap-10 lg:grid-cols-[minmax(320px,420px)_minmax(0,1fr)]">
          <div className="min-w-0">
            <div className="flex justify-center">
              <QuickPopup active={active} onActiveChange={setActive} />
            </div>
          </div>

          <div className="min-w-0">
            <div className="min-w-0 overflow-hidden rounded-3xl border-2 border-ink bg-cream shadow-[8px_8px_0_var(--color-ink)]">
              <div className="flex items-center justify-between border-b-2 border-ink px-6 py-4">
                <Image
                  src="/yeet-logo.png"
                  alt="Yeet"
                  width={956}
                  height={444}
                  className="h-9 w-auto object-contain"
                />
                <div className="flex items-center gap-2">
                  <StatusPill active={active} />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    aria-label="More options"
                  >
                    <MoreHorizontal />
                  </Button>
                </div>
              </div>

              <div className="grid min-w-0 md:grid-cols-[minmax(210px,0.8fr)_minmax(0,1.2fr)]">
                <div className="border-b-2 border-ink bg-grape p-5 text-cream md:border-b-0 md:border-r-2">
                  <div className="mb-5 flex items-center gap-3">
                    <Image
                      src="/yeet-icon.png"
                      alt=""
                      width={410}
                      height={394}
                      className="size-12 object-contain"
                    />
                    <div>
                      <p className="font-display text-xl font-bold">
                        Ready to fly
                      </p>
                      <p className="text-xs text-cream/65">
                        Both accounts connected
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-xl border-2 border-ink bg-cream p-3 text-ink">
                      <span className="flex items-center gap-2">
                        <PlatformBadge name="X" />
                        <span className="text-xs font-bold">to Threads</span>
                      </span>
                      <DirectionToggle
                        checked={xToThreads}
                        onChange={setXToThreads}
                        label="Send X posts to Threads"
                      />
                    </div>
                    <div className="flex items-center justify-between rounded-xl border-2 border-ink bg-cream p-3 text-ink">
                      <span className="flex items-center gap-2">
                        <PlatformBadge name="Threads" />
                        <span className="text-xs font-bold">to X</span>
                      </span>
                      <DirectionToggle
                        checked={threadsToX}
                        onChange={setThreadsToX}
                        label="Send Threads posts to X"
                      />
                    </div>
                  </div>

                  <div className="mt-5 rounded-xl bg-butter p-3 text-ink">
                    <p className="flex items-center gap-2 text-xs font-bold">
                      <Sparkles className="size-4" /> 47 double-posts skipped
                    </p>
                    <p className="mt-1 text-[11px] text-ink/60">
                      That’s a lot less copy-paste.
                    </p>
                  </div>
                </div>

                <div className="min-w-0 p-5 md:p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold">
                      Recent yeets
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-full text-xs"
                    >
                      See all <ChevronRight />
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {activity.map((item) => (
                      <div
                        key={item.text}
                        className="flex min-w-0 gap-3 rounded-2xl border-2 border-ink bg-background p-3.5 max-[420px]:gap-2 max-[420px]:p-3"
                      >
                        <div className="flex items-center self-start">
                          <PlatformBadge
                            name={item.source as "X" | "Threads"}
                          />
                          <ArrowRight className="mx-1 size-4 shrink-0 text-coral max-[420px]:hidden" />
                          <PlatformBadge
                            name={item.target as "X" | "Threads"}
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-xs font-semibold">
                            {item.text}
                          </p>
                          <p className="mt-1 text-[11px] font-medium text-ink/45">
                            Landed · {item.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
