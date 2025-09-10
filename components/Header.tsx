import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-black/30">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-extrabold tracking-tight text-xl md:text-2xl">
          Deep<span className="text-white/60">Drinks</span>
        </Link>
        <nav className="flex gap-3">
          <Link className="btn-secondary" href="/about">About</Link>
          <Link className="btn" href="https://www.youtube.com/@DeepDrinks" target="_blank">Subscribe</Link>
        </nav>
      </div>
    </header>
  );
}
