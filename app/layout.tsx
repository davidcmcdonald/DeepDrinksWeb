// app/layout.tsx
import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { SITE } from "@/site.config";
import JsonLd from "@/components/JsonLd";

const ogImage = "/opengraph-image.png"; // 1200×630 image in /app or /public

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s | Deep Drinks Podcast",
  },
  description: SITE.description,
  applicationName: "Deep Drinks Podcast",
  keywords: [
    "Deep Drinks",
    "David McDonald",
    "podcast",
    "religion",
    "philosophy",
    "science",
    "human rights",
    "theology",
    "debate",
    "YouTube podcast",
  ],
  authors: [{ name: "David McDonald" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.title,
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Deep Drinks Podcast" }],
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Site-wide JSON-LD
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Deep Drinks Podcast",
    url: SITE.url,
    logo: SITE.logo?.startsWith("/") ? SITE.url + SITE.logo : SITE.logo,
    sameAs: [
      SITE.socials.youtube,
      SITE.socials.spotify,
      SITE.socials.apple,
      SITE.socials.linktree,
      SITE.socials.patreon,
      SITE.socials.merch,
      SITE.socials.members,
    ].filter(Boolean),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.title,
    url: SITE.url,
  };

  return (
    <html lang="en">
      <body>
        <Header />

        {/* Any client component that uses usePathname/useSearchParams must be inside Suspense */}
        <Suspense fallback={null}>
          <Analytics />
          {/* If you also use a RouteAnalytics component, keep it inside Suspense too */}
          {/* <RouteAnalytics /> */}
        </Suspense>

        {/* Global JSON-LD */}
        <JsonLd json={org} />
        <JsonLd json={website} />

        <main className="container py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
