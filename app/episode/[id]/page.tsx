import { notFound } from "next/navigation";
import { SITE } from "@/site.config";
import { fetchOne } from "@/lib/playlist";
import { format } from "@/lib/utils";
import Link from "next/link";

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props) {
  const v = await fetchOne(SITE.playlistId, params.id);
  if (!v) return { title: "Episode not found" };
  return {
    title: v.title,
    description: v.description?.slice(0, 150)
  };
}

export default async function Page({ params }: Props) {
  const v = await fetchOne(SITE.playlistId, params.id);
  if (!v) return notFound();

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-extrabold">{v.title}</h1>
        <p className="text-white/60">{format(v.published)}</p>
      </header>
      <iframe
        className="w-full aspect-video rounded-2xl border border-white/10"
        src={`https://www.youtube.com/embed/${v.id}`}
        title={v.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <div className="card whitespace-pre-wrap text-white/80">{v.description}</div>
      <div className="flex gap-3">
        <Link className="btn-secondary" href="/">← Back</Link>
        <Link className="btn" href={v.link} target="_blank">Watch on YouTube</Link>
      </div>
    </article>
  );
}
