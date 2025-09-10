export const SITE = {
  title: "Deep Drinks Podcast",
  description: "Deep conversations over deep drinks — Religion, Philosophy & Human Rights.",
  url: "https://www.deepdrinks.com",
  youtubeChannel: "https://www.youtube.com/@DeepDrinks",
  subscribeUrl: "https://www.youtube.com/@DeepDrinks?sub_confirmation=1",
  // Primary playlist used for the homepage "Recent episodes"
  playlistId: process.env.NEXT_PUBLIC_PLAYLIST_ID || "PLLZG9iqwGS3M0_VyN7aGNEpsk9kWI7Zhg",
  // Your channel handle (for playlist discovery)
  channelHandle: process.env.NEXT_PUBLIC_YT_HANDLE || "DeepDrinks",
  socials: {
    youtube: "https://www.youtube.com/@DeepDrinks",
    spotify: "https://open.spotify.com/show/4TjeHzFi4JqcHZ06zx4aHK",
    apple: "https://podcasts.apple.com/us/podcast/deep-drinks/id1633403813",
    linktree: "https://linktr.ee/deepdrinks",
    patreon: "https://patreon.com/deepdrinks",
    merch: "https://www.deepdrinksstore.com/",
    members: "https://www.youtube.com/@DeepDrinks/join",
    email: "mailto:david@deepdrinks.com"
  }
};
