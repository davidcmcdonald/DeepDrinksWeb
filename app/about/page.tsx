import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/site.config";
import TrackLink from "@/components/TrackLink";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Deep Drinks Podcast and host David McDonald — exploring religion, philosophy, science, and human rights.",
  alternates: { canonical: "/about" },
};

export default function About() {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "About", item: SITE.url + "/about" },
    ],
  };

  return (
    <div className="space-y-10">
      <JsonLd json={breadcrumbs} />

      <section className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-3xl font-extrabold">About Deep Drinks</h1>
          <p className="text-white/80">
            Deep Drinks is a long-form interview podcast hosted by David McDonald — exploring religion,
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

          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Support Deep Drinks</h3>
            <div className="flex flex-wrap gap-3">
              <TrackLink className="btn-secondary" href={SITE.socials.patreon} target="_blank" rel="noreferrer" event="support_click" params={{ type: "patreon" }}>
                Patreon
              </TrackLink>
              <TrackLink className="btn-secondary" href={SITE.socials.members} target="_blank" rel="noreferrer" event="support_click" params={{ type: "members" }}>
                Channel Members
              </TrackLink>
              <TrackLink className="btn-secondary" href={SITE.socials.merch} target="_blank" rel="noreferrer" event="support_click" params={{ type: "merch" }}>
                Merch
              </TrackLink>
            </div>
          </div>
        </div>

        <div className="card text-center">
          <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full border border-white/10">
            <Image
              src="/images/David-Mcdonald-of-Deep-Drinks-Podcast_Profile.jpg"
              alt="David McDonald"
              fill
              className="object-cover"
              sizes="192px"
            />
          </div>
          <h3 className="mt-4 text-xl font-semibold">David McDonald</h3>
          <p className="text-white/60 text-sm">Host & Producer</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">About David</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="font-semibold mb-2">Interview: My Journey</h3>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-xl border border-white/10"
                src="https://www.youtube.com/embed/_GkdkDvW_p4"
                title="About David - Interview 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-2">Why Deep Drinks</h3>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-xl border border-white/10"
                src="https://www.youtube.com/embed/JQcMJKOzm8o"
                title="About David - Interview 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
