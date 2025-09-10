"use client";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type Props = LinkProps & {
  className?: string;
  children: ReactNode;
  event: string;
  params?: Record<string, any>;
  target?: string;
  rel?: string;
};

export default function TrackLink({ event, params, children, ...props }: Props) {
  return (
    <Link
      {...props}
      onClick={() => {
        if (typeof window !== "undefined") {
          (window as any).gtag?.("event", event, params || {});
        }
      }}
    >
      {children}
    </Link>
  );
}
