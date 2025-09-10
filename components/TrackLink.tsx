"use client";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { track } from "@/lib/ga";

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
    <Link {...props} onClick={() => track(event, params || {})}>
      {children}
    </Link>
  );
}
