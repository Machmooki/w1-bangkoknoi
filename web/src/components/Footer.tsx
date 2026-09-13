"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BOOK_DIRECT_URL, SITE } from "@/lib/site";
import { useLocale } from "@/components/LocaleProvider";
import { translatePhrase } from "@/lib/messages";

export function Footer() {
  const pathname = usePathname();
  const { locale } = useLocale();
  if (pathname?.startsWith("/studio")) return null;

  const tr = (phrase: string) => translatePhrase(locale, phrase);

  return (
    <footer data-i18n-skip>
      <div className="footer-top">
        <div className="footer-brand">
          <h3>
            W1<span>@</span>Bangkoknoi
          </h3>
          <div className="sub">{tr("Hotel & Wellness Resort · Nonthaburi, Thailand")}</div>
          <p>
            {tr(
              "A canal-side sanctuary for discerning travellers seeking immersive stays, signature dining, wellness, and memorable gatherings on the Bangkok Noi Canal."
            )}
          </p>
          <div className="footer-contact">
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
            <a href={`tel:${SITE.phoneDirect.replace(/\s/g, "")}`}>{SITE.phoneDirect}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
        </div>
        <div className="footer-col">
          <h4>{tr("The Hotel")}</h4>
          <Link href="/">{tr("Our Story")}</Link>
          <Link href="/accommodations">{tr("Accommodations")}</Link>
          <Link href="/wellness">{tr("Palace Wellness")}</Link>
          <Link href="/dining">{tr("Dining & Bar")}</Link>
        </div>
        <div className="footer-col">
          <h4>{tr("Experiences")}</h4>
          <Link href="/experiences">{tr("Boat Journeys")}</Link>
          <Link href="/weddings">{tr("Weddings")}</Link>
          <Link href="/events">{tr("Events")}</Link>
          <Link href="/contact">{tr("Contact Us")}</Link>
        </div>
        <div className="footer-col">
          <h4>{tr("Plan Your Stay")}</h4>
          <a href={BOOK_DIRECT_URL} target="_blank" rel="noopener noreferrer">
            {tr("Book Now")}
          </a>
          <Link href="/wellness#packages">{tr("Wellness Packages")}</Link>
          <Link href="/reserve-table">{tr("Reserve a Table")}</Link>
          <Link href="/book-treatment">{tr("Book a Treatment")}</Link>
          <Link href="/privacy">{tr("Privacy Policy")}</Link>
          <Link href="/terms">{tr("Terms")}</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{tr("© 2026 W1@Bangkoknoi Hotel & Wellness Resort · All Rights Reserved")}</p>
        <a
          href={BOOK_DIRECT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
          style={{ fontSize: 9, padding: "10px 20px" }}
        >
          {tr("Book Now")}
        </a>
      </div>
    </footer>
  );
}
