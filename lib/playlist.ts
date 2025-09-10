import { XMLParser } from "fast-xml-parser";

export type Video = {
  id: string;
  title: string;
  link: string;
  published: string;
  author?: string;
  description?: string;
  thumbnail: string;
};

export async function fetchPlaylist(playlistId: string, { max = 24 }: { max?: number } = {}): Promise<Video[]> {
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`;
  const res = await fetch(feedUrl, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  const xml = await res.text();
  const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_" });
  const data = parser.parse(xml);
  const entries = data.feed?.entry ?? [];
  const videos: Video[] = entries.slice(0, max).map((e: any) => {
    const id = String(e.id || "").split(":").pop();
    const link = Array.isArray(e.link) ? e.link[0]["@_href"] : e.link?.["@_href"] || `https://www.youtube.com/watch?v=${id}`;
    const title = e.title || "";
    const published = e.published || "";
    const author = e.author?.name || undefined;
    const media = e["media:group"] || {};
    const description = media["media:description"] || "";
    const thumbnail = id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : "";
    return { id, title, link, published, author, description, thumbnail };
  });
  return videos;
}

export async function fetchPlaylistTitle(playlistId: string): Promise<string> {
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`;
  const res = await fetch(feedUrl, { next: { revalidate: 86400 } });
  if (!res.ok) return "Playlist";
  const xml = await res.text();
  const parser = new XMLParser({ ignoreAttributes: false });
  const data = parser.parse(xml);
  return data.feed?.title || "Playlist";
}
