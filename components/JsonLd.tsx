// Server-component-safe JSON-LD injector
export default function JsonLd({ json }: { json: any }) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
