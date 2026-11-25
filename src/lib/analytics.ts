/**
 * Integration-ready conversion tracking.
 * Events are pushed to `window.dataLayer` (Google Tag Manager / GA4 convention).
 * Nothing is sent anywhere until a tag manager or GA4 snippet is installed via
 * NEXT_PUBLIC_GTM_ID in the root layout.
 */
export type ConversionEvent =
  | "phone_click"
  | "estimate_cta_click"
  | "estimate_form_start"
  | "estimate_form_submit"
  | "estimate_form_error"
  | "directions_click"
  | "email_click"
  | "reviews_link_click"
  | "service_cta_click";

type Payload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function track(event: ConversionEvent, payload: Payload = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...payload, ts: Date.now() });
  if (process.env.NODE_ENV === "development") {
    console.debug("[track]", event, payload);
  }
}
