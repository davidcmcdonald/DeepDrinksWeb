import Link from "next/link";
import { SITE } from "@/site.config";
import { fetchPlaylist } from "@/lib/playlist";
import VideoCard from "@/components/VideoCard";
import Subscribe from "@/components/Subscribe";

export default async function Home() {
  const vids = await fetchPlaylist(SITE.playlistId, { max: 24 });
  const [featured, ...rest] = vids;

  return (
    <div className="space-y-10">
      <section className="card relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(60rem_20rem_at_50%_-20%,white,transparent)]" />
        <div className="relative">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Deep Conversations over Deep Drinks
          </h1>
          <p className="text-white/70 mt-3 max-w-2xl">
            Religion, philosophy, science & human rights — long‑form chats with scholars, creators and everyday people.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href={SITE.youtubeChannel} target="_blank" className="btn">Watch on YouTube</Link>
            <Link href="/about" className="btn-secondary">About the show</Link>
          </div>
        </div>
      </section>

      {featured && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Latest episode</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <iframe
              className="w-full aspect-video rounded-2xl border border-white/10"
              src={`https://www.youtube.com/embed/${featured.id}`}
              title={featured.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="card">
              <h3 className="text-xl font-semibold">{featured.title}</h3>
              <p className="text-white/70 mt-2 line-clamp-6">{featured.description}</p>
              <div className="mt-4">
                <Link href={`/episode/${featured.id}`} className="btn-secondary">Episode page</Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Recent episodes</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map(v => <VideoCard key={v.id} v={v} />)}
        </div>
      </section>

      <Subscribe />
    </div>
  );
}
