import Link from "next/link";
import Image from "next/image";
import Socials from "@/components/Socials";
import { SITE } from "@/site.config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-black/30">
      <div className="container flex items-center justify-between py-3">
        {/* Left: PNG logo, visually sized via CSS height */}
        <Link href="/" aria-label="Deep Drinks home" className="flex items-center">
          <Image
            src={SITE.logo}
            alt="Deep Drinks"
            width={SITE.logoWidth}
            height={SITE.logoHeight}
            priority
            sizes="(max-width: 768px) 140px, 180px"
            className="h-16 md:h-[72px] w-auto" // ← adjust these to taste (h-8 ≈ 32px, h-9 ≈ 36px)
          />
        </Link>

        {/* Right: socials + nav + subscribe */}
        <div className="flex items-center gap-4">
          <Socials className="hidden sm:flex" />
          <nav className="flex items-center gap-3">
            <Link className="btn-secondary" href="/about">About</Link>
            <Link className="btn-secondary" href="/contact">Contact</Link>
            <Link className="btn" href={SITE.subscribeUrl} target="_blank" rel="noreferrer">Subscribe</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
