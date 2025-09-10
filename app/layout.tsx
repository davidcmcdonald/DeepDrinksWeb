import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/site.config";

export const metadata: Metadata = {
  title: {
    default: SITE.title,
    template: "%s • " + SITE.title
  },
  description: SITE.description,
  metadataBase: new URL("https://deepdrinks.example.com"),
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    type: "website",
    url: "https://deepdrinks.example.com"
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
