import Link from "next/link";
import Socials from "@/components/Socials";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-10 text-white/70">
      <div className="container flex flex-col md:flex-row items-center gap-4 md:gap-8 justify-between">
        <div className="flex items-center gap-6">
          <p>&copy; {new Date().getFullYear()} Deep Drinks Podcast</p>
          <p>Website by David</p>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="https://linktr.ee/deepdrinks" target="_blank" rel="noreferrer">Linktree</Link>
          <Socials />
        </div>
      </div>
    </footer>
  );
}
