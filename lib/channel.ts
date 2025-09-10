import { fetchPlaylistTitle } from "@/lib/playlist";

export type PlaylistMeta = {
  id: string;
  title: string;
  url: string;
};

// Discover playlists by scraping the channel's /playlists page and finding playlist IDs.
// If a playlist is removed from the channel, it won't be returned on the next refresh.
export async function fetchChannelPlaylists(handle: string, { limit = 6 }: { limit?: number } = {}): Promise<PlaylistMeta[]> {
  const url = `https://www.youtube.com/@${handle}/playlists`;
  try {
    const res = await fetch(url, { next: { revalidate: 86400 }, headers: { "accept-language": "en-US,en;q=0.9" } });
    if (!res.ok) return [];
    const html = await res.text();
    // Regex for playlist IDs e.g., PLxxxx
    const ids = new Set<string>();
    const regex = /playlist\?list=(PL[\w-]+)/g;
    let m: RegExpExecArray | null;
    while ((m = regex.exec(html)) !== null) {
      if (m[1]) ids.add(m[1]);
    }
    const jsonIds = html.match(/"playlistId":"(PL[\w-]+)"/g) || [];
    for (const str of jsonIds) {
      const id = str.split(':"')[1].replace('"', "");
      ids.add(id);
    }
    const unique = Array.from(ids).slice(0, limit + 3);
    const metas: PlaylistMeta[] = [];
    for (const id of unique) {
      const title = await fetchPlaylistTitle(id);
      metas.push({ id, title, url: `https://www.youtube.com/playlist?list=${id}` });
      if (metas.length >= limit) break;
    }
    return metas;
  } catch {
    return [];
  }
}
