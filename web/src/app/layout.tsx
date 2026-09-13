import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import { Footer } from "@/components/Footer";
import { LocaleProvider } from "@/components/LocaleProvider";
import { DomI18n } from "@/components/DomI18n";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "W1@Bangkoknoi Hotel & Wellness Resort | Bangkok Noi Canal",
    template: "%s | W1@Bangkoknoi",
  },
  description:
    "Luxury on the iconic Bangkok Noi Canal in Nonthaburi. Private wellness villas, Thai-modern rooms, signature dining, ballroom & events, kids club & bespoke experiences.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://w1bangkoknoi.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // data-scroll-behavior: Next 16 no longer overrides CSS `scroll-behavior:
  // smooth` during navigation by default, which made route changes animate a
  // slow scroll-to-top (and left the Home hero half-covered when the scroll
  // was interrupted). The attribute restores instant scroll on navigation.
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${montserrat.variable}`}
    >
      <body style={{ fontFamily: 'var(--font-montserrat), Montserrat, "Noto Sans Thai", "Noto Sans SC", sans-serif' }}>
        <LocaleProvider>
          <DomI18n />
          {children}
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
