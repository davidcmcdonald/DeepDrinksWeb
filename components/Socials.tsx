"use client";

import Link from "next/link";
import { YouTubeIcon, SpotifyIcon, AppleIcon, LinktreeIcon } from "@/components/Icons";
import { SITE } from "@/site.config";
import { track } from "@/lib/ga";

export default function Socials({
  className = "",
  placement = "header", // "header" | "footer"
}: {
  className?: string;
  placement?: "header" | "footer";
}) {
  const base = "h-6 w-6 text-white/70 hover:text-white transition";

  const click = (network: string) =>
    track("social_click", { network, placement });

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Link href={SITE.socials.youtube} target="_blank" aria-label="YouTube" onClick={() => click("youtube")}>
        <YouTubeIcon className={base} />
      </Link>
      <Link href={SITE.socials.spotify} target="_blank" aria-label="Spotify" onClick={() => click("spotify")}>
        <SpotifyIcon className={base} />
      </Link>
      <Link href={SITE.socials.apple} target="_blank" aria-label="Apple Podcasts" onClick={() => click("apple")}>
        <AppleIcon className={base} />
      </Link>
      <Link href={SITE.socials.linktree} target="_blank" aria-label="Linktree" onClick={() => click("linktree")}>
        <LinktreeIcon className={base} />
      </Link>
    </div>
  );
}
