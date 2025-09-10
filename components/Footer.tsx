import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10 text-white/70">
      <div className="container flex flex-col md:flex-row items-center gap-4 md:gap-8 justify-between">
        <p>&copy; {new Date().getFullYear()} Deep Drinks Podcast</p>
        <div className="flex gap-4">
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="https://linktr.ee/deepdrinks" target="_blank" rel="noreferrer">Links</Link>
        </div>
      </div>
    </footer>
  );
}
