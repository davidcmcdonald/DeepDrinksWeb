import Link from "next/link";

export default function Subscribe() {
  return (
    <div className="card flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-between">
      <div>
        <h3 className="text-xl font-semibold">Never miss an episode</h3>
        <p className="text-white/70">Subscribe on your favourite platform.</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link className="btn-secondary" href="https://www.youtube.com/@DeepDrinks" target="_blank">YouTube</Link>
        <Link className="btn-secondary" href="https://open.spotify.com/show/4TjeHzFi4JqcHZ06zx4aHK" target="_blank">Spotify</Link>
        <Link className="btn-secondary" href="https://podcasts.apple.com/us/podcast/deep-drinks/id1633403813" target="_blank">Apple Podcasts</Link>
        <Link className="btn-secondary" href="https://linktr.ee/deepdrinks" target="_blank">More</Link>
      </div>
    </div>
  );
}
