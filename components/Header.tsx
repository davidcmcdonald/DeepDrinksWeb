"use client";

import Link from "next/link";
import Image from "next/image";
import Socials from "@/components/Socials";
import { SITE } from "@/site.config";
import { track } from "@/lib/ga";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-black/30">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" aria-label="Deep Drinks home" className="flex items-center" onClick={() => track("nav_click", { to: "home" })}>
          <Image
            src={SITE.logo}
            alt="Deep Drinks"
            width={SITE.logoWidth}
            height={SITE.logoHeight}
            priority
            sizes="(max-width: 768px) 140px, 180px"
            className="h-8 md:h-9 w-auto"
          />
        </Link>

        <div className="flex items-center gap-4">
          <Socials className="hidden sm:flex" placement="header" />
          <nav className="flex items-center gap-3">
            <Link className="btn-secondary" href="/about" onClick={() => track("nav_click", { to: "about" })}>
              About
            </Link>
            <Link className="btn-secondary" href="/contact" onClick={() => track("nav_click", { to: "contact" })}>
              Contact
            </Link>
            <Link
              className="btn"
              href={SITE.subscribeUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => track("sign_up", { method: "youtube_subscribe", placement: "header" })}
            >
              Subscribe
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
