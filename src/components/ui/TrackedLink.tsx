"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { track, type ConversionEvent } from "@/lib/analytics";

type Props = ComponentProps<typeof Link> & {
  event: ConversionEvent;
  payload?: Record<string, string | number | boolean | undefined>;
};

/** Link that pushes a conversion event to the dataLayer on click. */
export function TrackedLink({ event, payload, onClick, ...rest }: Props) {
  return (
    <Link
      {...rest}
      onClick={(e) => {
        track(event, payload);
        onClick?.(e);
      }}
    />
  );
}

type AProps = ComponentProps<"a"> & {
  event: ConversionEvent;
  payload?: Record<string, string | number | boolean | undefined>;
};

/** Plain anchor (tel:, mailto:, external) with tracking. */
export function TrackedA({ event, payload, onClick, ...rest }: AProps) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        track(event, payload);
        onClick?.(e);
      }}
    />
  );
}
