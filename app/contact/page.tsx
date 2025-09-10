import { SITE } from "@/site.config";

export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-extrabold">Contact</h1>
      <div className="card space-y-2">
        <p>For bookings, collaborations, or general enquiries:</p>
        <p className="text-xl"><a className="underline" href={SITE.socials.email}>david@deepdrinks.com</a></p>
      </div>
      <div className="card space-y-2">
        <h2 className="text-xl font-semibold">Support Deep Drinks</h2>
        <ul className="list-disc list-inside text-white/80">
          <li><a className="underline" target="_blank" href={SITE.socials.patreon}>Patreon</a></li>
          <li><a className="underline" target="_blank" href={SITE.socials.members}>YouTube Channel Members</a></li>
          <li><a className="underline" target="_blank" href={SITE.socials.merch}>Merch Store</a></li>
        </ul>
      </div>
    </div>
  );
}
