import Image from "next/image";
import { SITE } from "@/site.config";
import Link from "next/link";

export const metadata = {
  title: "About"
};

export default function About() {
  return (
    <div className="grid lg:grid-cols-3 gap-8 items-start">
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-3xl font-extrabold">About Deep Drinks</h1>
        <p className="text-white/80">
          Deep Drinks is a long‑form interview podcast hosted by David McDonald — exploring religion,
          philosophy, science, and human rights over a favourite drink.
          Guests range from scholars and historians to content creators and everyday people.
        </p>
        <p className="text-white/80">
          New episodes are published to a curated YouTube playlist and syndicated to major audio platforms.
          This site automatically updates as new videos are added to the playlist.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link className="btn-secondary" href={SITE.socials.youtube} target="_blank">YouTube</Link>
          <Link className="btn-secondary" href={SITE.socials.spotify} target="_blank">Spotify</Link>
          <Link className="btn-secondary" href={SITE.socials.apple} target="_blank">Apple Podcasts</Link>
          <Link className="btn-secondary" href={SITE.socials.linktree} target="_blank">Linktree</Link>
        </div>
      </div>
      <div className="card text-center">
        <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full border border-white/10">
          <Image
            src="/images/profile.jpg"
            alt="David McDonald"
            fill
            className="object-cover"
            sizes="192px"
          />
        </div>
        <h3 className="mt-4 text-xl font-semibold">David McDonald</h3>
        <p className="text-white/60 text-sm">
          Host & Producer
        </p>
        <p className="text-white/70 text-sm mt-2">
          (Replace this photo by adding <code>public/images/David-Mcdonald-of-Deep-Drinks-Podcast_Profile.jpg</code>)
        </p>
      </div>
    </div>
  );
}
