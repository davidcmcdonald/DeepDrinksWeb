import Link from "next/link";
import Image from "next/image";
import Socials from "@/components/Socials";
import { SITE } from "@/site.config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-black/30">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-extrabold tracking-tight text-xl md:text-2xl">
          Deep<span className="text-white/60">Drinks</span>
        </Link>
        <div className="flex items-center gap-4">
          <Socials className="hidden sm:flex" />
          <nav className="flex items-center gap-3">
            <Link className="btn-secondary" href="/about">About</Link>
            <Link className="btn-secondary" href="/contact">Contact</Link>
            <Link className="btn" href={SITE.subscribeUrl} target="_blank" rel="noreferrer">Subscribe</Link>
          </nav>
          <Image src="/logo.svg" alt="Deep Drinks logo" width={36} height={36} className="hidden md:block" />
        </div>
      </div>
    </header>
  );
}
