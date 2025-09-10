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
  const res = await fetch(feedUrl, { next: { revalidate: 3600 } }); // revalidate every hour
  if (!res.ok) {
    console.error("Failed to fetch playlist RSS", res.status, res.statusText);
    return [];
  }
  const xml = await res.text();
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_"
  });
  const data = parser.parse(xml);
  const entries = data.feed?.entry ?? [];
  const videos: Video[] = entries.slice(0, max).map((e: any) => {
    // e.id is like 'yt:video:VIDEO_ID'
    const id = String(e.id || "").split(":").pop();
    const link = Array.isArray(e.link) ? e.link[0]["@_href"] : e.link?.["@_href"] || `https://www.youtube.com/watch?v=${id}`;
    const title = e.title || "";
    const published = e.published || "";
    const author = e.author?.name || undefined;
    const media = e["media:group"] || {};
    const description = media["media:description"] || "";
    // Thumbnail: https://i.ytimg.com/vi/ID/hqdefault.jpg
    const thumbnail = id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : "";
    return { id, title, link, published, author, description, thumbnail };
  });
  return videos;
}

export async function fetchOne(playlistId: string, id: string): Promise<Video | null> {
  const list = await fetchPlaylist(playlistId, { max: 100 });
  return list.find(v => v.id === id) ?? null;
}
