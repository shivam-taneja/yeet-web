"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { QuickPopup } from "@/components/product-preview/quick-popup";

export function Header() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <header className="max-w-360 mx-auto px-6 md:px-12 pt-7 flex items-center justify-between">
      <Image
        src="/yeet-logo.png"
        alt="Yeet"
        width={956}
        height={444}
        className="h-12 w-auto object-contain"
        priority
      />
      <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
        <Link href="#how" className="hover:text-coral transition-colors">
          How it works
        </Link>
        <div className="relative">
          <button
            onClick={() => setShowPopup(!showPopup)}
            className="flex items-center gap-2 hover:text-coral transition-colors font-medium cursor-pointer"
          >
            Preview Extension
          </button>
          {showPopup && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 z-50">
              <QuickPopup />
            </div>
          )}
        </div>
      </nav>
      <Link
        href="#get"
        className="bg-ink text-cream px-5 py-2.5 rounded-full font-semibold text-sm border-2 border-ink shadow-[4px_4px_0_var(--color-coral)] hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-coral)] transition"
      >
        Get Yeet free
      </Link>
    </header>
  );
}
