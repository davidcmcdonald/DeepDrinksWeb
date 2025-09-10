import Link from "next/link";
import type { Metadata } from "next";
import { SITE } from "@/site.config";
import { fetchPlaylist } from "@/lib/playlist";
import VideoCard from "@/components/VideoCard";
import Subscribe from "@/components/Subscribe";
import { fetchChannelPlaylists } from "@/lib/channel";
import JsonLd from "@/components/JsonLd";
import TrackLink from "@/components/TrackLink";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Deep conversations over deep drinks. Religion, philosophy, science & human rights — long-form chats with scholars, creators and everyday people.",
  alternates: { canonical: "/" },
};

export default async function Home() {
  const vids = await fetchPlaylist(SITE.playlistId, { max: 9 });
  const playlists = await fetchChannelPlaylists(SITE.channelHandle, { limit: 6 });

  // VideoObject JSON-LD for the 9 visible videos
  const videoObjects = vids.map(v => ({
    "@type": "VideoObject",
    name: v.title,
    description: v.description?.slice(0, 500) || v.title,
    thumbnailUrl: v.thumbnail ? [v.thumbnail] : undefined,
    uploadDate: v.published,
    url: v.link,
    embedUrl: `https://www.youtube.com/embed/${v.id}`,
    publisher: { "@type": "Organization", name: "Deep Drinks Podcast", url: SITE.url },
  }));

  const homepageLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Deep Drinks Podcast — Recent Episodes",
    url: SITE.url,
    hasPart: videoObjects,
  };

  return (
    <div className="space-y-10">
      <JsonLd json={homepageLd} />

      <section className="card relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(60rem_20rem_at_50%_-20%,white,transparent)]" />
        <div className="relative">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Deep Conversations over Deep Drinks
          </h1>
          <p className="text-white/70 mt-3 max-w-2xl">
            Religion, philosophy, science & human rights — long-form chats with scholars, creators and everyday people.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href={SITE.youtubeChannel} target="_blank" className="btn">Watch on YouTube</Link>
            <Link href="/about" className="btn-secondary">About the show</Link>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Recent episodes</h2>
          <TrackLink
            href={`https://www.youtube.com/playlist?list=${SITE.playlistId}`}
            className="btn-secondary"
            target="_blank"
            rel="noreferrer"
            event="more_episodes_click"
          >
            More episodes →
          </TrackLink>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vids.map(v => <VideoCard key={v.id} v={v} />)}
        </div>
      </section>

      {playlists.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Other playlists</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {playlists.map(p => (
              <a key={p.id} href={p.url} target="_blank" rel="noreferrer" className="card hover:bg-white/10 transition">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-white/60 text-sm mt-1">View on YouTube</p>
              </a>
            ))}
          </div>
          <p className="text-white/60 text-sm">
            (This section updates automatically — if a playlist is removed from the channel, it disappears here after the next refresh.)
          </p>
        </section>
      )}

      <Subscribe />
    </div>
  );
}
