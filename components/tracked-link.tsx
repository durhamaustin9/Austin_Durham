"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import posthog from "posthog-js";

type EventProperty = string | number | boolean;

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  eventName: string;
  eventProperties?: Record<string, EventProperty>;
  href: string;
};

export function TrackedLink({
  children,
  eventName,
  eventProperties,
  href,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      {...props}
      href={href}
      onClick={(event) => {
        posthog.capture(eventName, eventProperties);
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
