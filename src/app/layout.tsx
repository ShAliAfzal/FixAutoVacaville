import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { LeadProvider } from "@/components/lead/LeadContext";
import { EstimateDrawer } from "@/components/lead/EstimateDrawer";
import { RevealObserver } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { localBusinessJsonLd } from "@/lib/seo";
import { SITE_URL, business } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Fix Auto Vacaville | Collision & Auto Body Repair",
    template: "%s | Fix Auto Vacaville",
  },
  description:
    "Collision repair and auto body shop in Vacaville, CA. Estimates, insurance claims handled, paintless dent repair, paint & glass. 70 Peabody Road · (707) 898-7313.",
  applicationName: business.name,
  keywords: [
    "collision repair Vacaville",
    "auto body shop Vacaville",
    "Fix Auto Vacaville",
    "paintless dent repair Vacaville",
    "car paint repair Vacaville",
  ],
  authors: [{ name: business.name }],
  creator: business.name,
  publisher: business.name,
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: business.name,
    title: "Fix Auto Vacaville | Collision & Auto Body Repair",
    description:
      "Collision repair and auto body shop in Vacaville, CA at 70 Peabody Road. Call (707) 898-7313.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix Auto Vacaville | Collision & Auto Body Repair",
    description:
      "Collision repair and auto body shop in Vacaville, CA at 70 Peabody Road.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1f3d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en" className={`${manrope.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-paper font-sans text-ink antialiased">
        <JsonLd data={localBusinessJsonLd()} />
        {gtmId ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
        ) : null}
        <LeadProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-navy-900"
          >
            Skip to content
          </a>
          <Header />
          <main id="main" className="flex-1 pb-20 md:pb-0">
            {children}
          </main>
          <Footer />
          <MobileCtaBar />
          <EstimateDrawer />
          <RevealObserver />
        </LeadProvider>
      </body>
    </html>
  );
}
