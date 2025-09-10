import Link from "next/link";
import { YouTubeIcon, SpotifyIcon, AppleIcon, LinktreeIcon } from "@/components/Icons";
import { SITE } from "@/site.config";

export default function Socials({ className = "" }: { className?: string }) {
  const base = "h-5 w-5 fill-white/80 hover:fill-white transition";
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Link href={SITE.socials.youtube} target="_blank" aria-label="YouTube"><YouTubeIcon className={base} /></Link>
      <Link href={SITE.socials.spotify} target="_blank" aria-label="Spotify"><SpotifyIcon className={base} /></Link>
      <Link href={SITE.socials.apple} target="_blank" aria-label="Apple Podcasts"><AppleIcon className={base} /></Link>
      <Link href={SITE.socials.linktree} target="_blank" aria-label="Linktree"><LinktreeIcon className={base} /></Link>
    </div>
  );
}
