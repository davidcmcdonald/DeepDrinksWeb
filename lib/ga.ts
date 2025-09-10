// lib/ga.ts
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export function track(event: string, params: Record<string, any> = {}) {
  if (!GA_ID || typeof window === "undefined" || !(window as any).gtag) return;
  (window as any).gtag("event", event, params);
}
