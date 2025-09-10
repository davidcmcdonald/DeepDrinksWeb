import Image from "next/image";
import type { Video } from "@/lib/playlist";
import { format } from "@/lib/utils";

export default function VideoCard({ v }: { v: Video }) {
  return (
    <a
      href={v.link}
      target="_blank"
      rel="noreferrer"
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
    >
      <div className="relative aspect-video">
        {v.thumbnail && (
          <Image
            src={v.thumbnail}
            alt={v.title}
            fill
            className="object-cover transition group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false}
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold leading-snug">{v.title}</h3>
        <p className="text-white/60 text-sm mt-1">{format(v.published)}</p>
      </div>
    </a>
  );
}
