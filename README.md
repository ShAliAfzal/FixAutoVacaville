# Fix Auto Vacaville

Premium lead-generation website for **Fix Auto Vacaville** - collision repair and auto body shop at 70 Peabody Road, Vacaville, CA.

Stack: **Next.js App Router**, TypeScript, Tailwind CSS v4, Lucide icons.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site origin (default `https://fixautovacaville.com`) |
| `NEXT_PUBLIC_GTM_ID` | Optional Google Tag Manager container ID |
| `ESTIMATE_WEBHOOK_URL` | Optional HTTPS endpoint that receives estimate form JSON |

Without `ESTIMATE_WEBHOOK_URL`, estimate submissions validate and log server-side but are **not** delivered to a CRM. Connect a webhook (Zapier, Make, Resend, HubSpot, etc.) before launch.

Conversion events always push to `window.dataLayer` via `src/lib/analytics.ts`.

## Verified business facts

- **Name:** Fix Auto Vacaville (formerly Peabody Auto Body)
- **Address:** 70 Peabody Road, Vacaville, CA 95687
- **Phone:** (707) 898-7313
- **Email:** vacaville@fixautousa.com
- **Hours:** Mon-Fri 9:00 AM - 5:00 PM (closed Sat/Sun)
- **Google:** 4.7★ / 112 reviews (as listed on fixautousa.com)

Update `src/lib/site.ts` if the Google Business Profile changes.

## Remaining launch tasks

1. Set production `NEXT_PUBLIC_SITE_URL`
2. Connect `ESTIMATE_WEBHOOK_URL` (or email/CRM)
3. Add `NEXT_PUBLIC_GTM_ID` / GA4 and verify conversion events
4. Submit sitemap in Google Search Console
5. Align NAP with Google Business Profile
6. Optional: Google Places API for live review feed
