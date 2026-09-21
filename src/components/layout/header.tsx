"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-cream/90 backdrop-blur-md border-b-2 border-ink/10 py-4 shadow-sm"
          : "bg-transparent border-b-2 border-transparent py-7"
      }`}
    >
      <div className="max-w-340 mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/yeet-logo.png"
            alt="Yeet"
            width={956}
            height={444}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          <Link
            href={siteConfig.links.howItWorks}
            className="hover:text-coral transition-colors"
          >
            How it works
          </Link>
        </nav>
        <Link
          href={siteConfig.links.getYeet}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-ink text-cream px-5 py-2.5 rounded-full font-semibold text-sm border-2 border-ink shadow-[4px_4px_0_var(--color-coral)] hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-coral)] transition"
        >
          Get Yeet free
        </Link>
      </div>
    </header>
  );
}
