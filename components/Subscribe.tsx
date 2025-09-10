"use client";

import Link from "next/link";
import { SITE } from "@/site.config";
import { track } from "@/lib/ga";

export default function Subscribe() {
  const click = (what: string, extra: Record<string, any> = {}) =>
    track(what, { placement: "subscribe_box", ...extra });

  return (
    <div className="card flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-between">
      <div>
        <h3 className="text-xl font-semibold">Never miss an episode</h3>
        <p className="text-white/70">Subscribe on your favourite platform.</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link className="btn" href={SITE.subscribeUrl} target="_blank" onClick={() => click("sign_up", { method: "youtube_subscribe" })}>
          Subscribe on YouTube
        </Link>
        <Link className="btn-secondary" href={SITE.socials.spotify} target="_blank" onClick={() => click("social_click", { network: "spotify" })}>
          Spotify
        </Link>
        <Link className="btn-secondary" href={SITE.socials.apple} target="_blank" onClick={() => click("social_click", { network: "apple" })}>
          Apple Podcasts
        </Link>
        <Link className="btn-secondary" href={SITE.socials.linktree} target="_blank" onClick={() => click("social_click", { network: "linktree" })}>
          Linktree
        </Link>
      </div>
    </div>
  );
}
