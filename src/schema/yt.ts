import z from "zod";

export const YoutubeResponseSchema = z.object({
  items: z.array(
    z.object({
      id: z.object({
        kind: z.enum(["youtube#video", "youtube#playlist"]),
        videoId: z.string().optional(),
        playlistId: z.string().optional(),
      }),
      snippet: z.object({
        publishedAt: z.string(),
        channelId: z.string(),
        title: z.string(),
        description: z.string(),
        thumbnails: z.object({
          default: z.object({
            url: z.string(),
            width: z.number(),
            height: z.number(),
          }),
          medium: z.object({
            url: z.string(),
            width: z.number(),
            height: z.number(),
          }),
          high: z.object({
            url: z.string(),
            width: z.number(),
            height: z.number(),
          }),
        }),
        channelTitle: z.string(),
        liveBroadcastContent: z.enum(["none", "upcoming"]),
        publishTime: z.string(),
      }),
    })
  ),
});
