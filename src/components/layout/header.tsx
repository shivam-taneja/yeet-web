import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="w-full max-w-360 mx-auto px-6 md:px-12 pt-7 flex items-center justify-between shrink-0">
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
    </header>
  );
}
