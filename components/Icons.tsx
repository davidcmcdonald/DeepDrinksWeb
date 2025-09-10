import React from "react";

/** All icons inherit color via `currentColor` so you can style with Tailwind `text-*` classes. */
type Props = React.SVGProps<SVGSVGElement>;

export function YouTubeIcon({ className, ...rest }: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor" {...rest}>
      {/* Simple Icons: YouTube */}
      <path d="M23.498 6.186a2.997 2.997 0 0 0-2.114-2.12C19.537 3.5 12 3.5 12 3.5s-7.537 0-9.384.566A2.997 2.997 0 0 0 .502 6.186 31.94 31.94 0 0 0 0 12a31.94 31.94 0 0 0 .502 5.814 2.997 2.997 0 0 0 2.114 2.12C4.463 20.5 12 20.5 12 20.5s7.537 0 9.384-.566a2.997 2.997 0 0 0 2.114-2.12A31.94 31.94 0 0 0 24 12a31.94 31.94 0 0 0-.502-5.814ZM9.75 15.02v-6.04L15.5 12l-5.75 3.02Z"/>
    </svg>
  );
}

export function SpotifyIcon({ className, ...rest }: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor" {...rest}>
      {/* Simple Icons: Spotify */}
      <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm5.3 17.1a.8.8 0 0 1-1.1.3c-3.2-2-7.2-2.4-11.9-1.1a.8.8 0 1 1-.4-1.6c5.1-1.4 9.5-1 13 1.2.4.2.6.7.4 1.2Zm1.6-3.6a.9.9 0 0 1-1.2.3c-3.6-2.2-9.1-2.8-13.3-1.3a.9.9 0 0 1-.6-1.7c4.8-1.6 10.9-1 15 1.5.5.3.7.9.3 1.2Zm.1-3.7a1 1 0 0 1-1.3.3c-4-2.4-10.8-2.6-14.6-1.2a1 1 0 1 1-.7-1.9c4.2-1.5 12.4-1.3 16.9 1.5.6.3.8 1 .4 1.3Z"/>
    </svg>
  );
}

export function AppleIcon({ className, ...rest }: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor" {...rest}>
      {/* Simple Icons: Apple */}
      <path d="M16.7 13.4c0 3.5 3.2 4.7 3.2 4.7s-2.5 7-7.1 7c-1.5 0-2.6-.5-3.6-.5s-2.7.5-3.7.5C1.9 25 .1 18.7.1 15.2.1 11.9 2 10 4.1 10c1.1 0 2 .5 2.7.5s1.8-.6 3.1-.6c1 0 3.1.5 4.3 2.4-1.5 1-1.8 2.9-1.8 3.9Zm-3.6-7.8c.9-1.1 1.6-2.6 1.4-4.1-1.4.1-2.9.9-3.9 2s-1.7 2.5-1.6 4c1.6.1 3.1-.8 4.1-1.9Z"/>
    </svg>
  );
}

export function LinktreeIcon({ className, ...rest }: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor" {...rest}>
      {/* Simple Icons-ish: Linktree (cleaned brand mark) */}
      <path d="M12 2 6.2 7.8l1.6 1.6L11 6.2V22h2V6.2l3.2 3.2 1.6-1.6L12 2Zm-6 8.5L3.4 8.9.9 11.4l1.6 1.6L6 10.5Zm18.1 0-2.6-2.6-1.6 1.6 2.6 2.6 1.6-1.6Z"/>
    </svg>
  );
}
