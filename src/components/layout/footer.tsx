import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Github } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t-2 border-ink">
      <div className="max-w-340 mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <Image
          src="/yeet-logo.png"
          alt="Yeet"
          width={956}
          height={444}
          loading="lazy"
          className="h-9 w-auto object-contain"
        />
        <p className="text-sm text-ink/50">© 2026 Yeet · posts, yeeted.</p>
        <div className="flex gap-6 items-center text-sm font-medium">
          <Link
            href={siteConfig.links.privacy}
            className="hover:text-coral transition-colors"
          >
            Privacy
          </Link>
          <Link
            href={siteConfig.links.contact}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-coral transition-colors"
          >
            Contact
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-coral transition-colors"
            title="View on GitHub"
          >
            <Github className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
