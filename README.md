# Deep Drinks Podcast — Next.js Site

A fast, modern site for **Deep Drinks Podcast**, built with **Next.js 14** (App Router) and **Tailwind CSS**.  
It auto-updates from a **YouTube playlist** (via RSS, no API key) using **Incremental Static Regeneration**.

## ✨ Features
- **Auto-updating Episodes:** Pulls the latest videos from a YouTube playlist RSS feed every hour.
- **Home / Episode / About / Disclaimer** pages.
- **Episode pages** with YouTube embeds and descriptions.
- **Beautiful design** with Tailwind and subtle effects.
- **No secrets required** — works out of the box on Vercel/GitHub.

## 🔧 Quick Start (Local)
```bash
npm i
npm run dev   # http://localhost:3000
```

## 🚀 Deploy to Vercel
1. Push this project to your GitHub as a new repository (e.g. `deepdrinks-site`).
2. In Vercel, **Import Project** → select your repo → deploy.
3. (Optional) Set an env var to point at a different playlist:
   - `NEXT_PUBLIC_PLAYLIST_ID=YOUR_PLAYLIST_ID`

> Default playlist is the main "Deep Drinks Podcast" playlist.

## 🔁 How "auto-update" works
- The site fetches the **playlist RSS** and caches the result.  
- With ISR (`revalidate: 3600`), pages are **regenerated in the background** at most once per hour.  
- To refresh faster, reduce the `revalidate` number in `lib/playlist.ts`.

## 🖼️ Add your photo
Place a square headshot at: `public/images/profile.jpg` (e.g., 1200×1200).  
It's used on the About page.

## 🧰 Customise
- `site.config.ts` — site title, description, social links, playlist id.
- `styles/globals.css` — theme & styles.
- `app/**` — pages.
- `components/**` — UI components.

## 📝 Notes
- The site uses **fast-xml-parser** to parse the YouTube RSS feed.  
- Thumbnails use `https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg`.
- For a custom domain on Vercel, add your DNS and set `metadataBase` in `app/layout.tsx` to your final URL.

---

Made for David McDonald / Deep Drinks Podcast.
