import { SITE } from "@/site.config";
import TrackLink from "@/components/TrackLink";

export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-extrabold">Contact</h1>

      <div className="card space-y-2">
        <p>For bookings, collaborations, or general enquiries:</p>
        <p className="text-xl">
          <TrackLink
            className="underline"
            href={SITE.socials.email}
            event="contact_click"
            params={{ method: "email" }}
          >
            david@deepdrinks.com
          </TrackLink>
        </p>
      </div>

      <div className="card space-y-2">
        <h2 className="text-xl font-semibold">Support Deep Drinks</h2>
        <ul className="list-disc list-inside text-white/80 space-y-1">
          <li>
            <TrackLink
              className="underline"
              href={SITE.socials.patreon}
              target="_blank"
              rel="noreferrer"
              event="support_click"
              params={{ type: "patreon" }}
            >
              Patreon
            </TrackLink>
          </li>
          <li>
            <TrackLink
              className="underline"
              href={SITE.socials.members}
              target="_blank"
              rel="noreferrer"
              event="support_click"
              params={{ type: "members" }}
            >
              YouTube Channel Members
            </TrackLink>
          </li>
          <li>
            <TrackLink
              className="underline"
              href={SITE.socials.merch}
              target="_blank"
              rel="noreferrer"
              event="support_click"
              params={{ type: "merch" }}
            >
              Merch Store
            </TrackLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
