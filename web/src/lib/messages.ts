import type { Locale } from "@/lib/site";
import { phraseTranslations } from "@/lib/phraseTranslations";

/** UI chrome strings (nav/footer/forms). Page body also covered via DomI18n + phrase dictionary. */
export const uiMessages: Record<Locale, Record<string, string>> = {
  en: {
    bookNow: "Book Now",
    sendEnquiry: "Send Enquiry →",
    thankYouTitle: "Thank you",
    thankYouBody: "We have received your enquiry and will respond shortly.",
  },
  th: {
    bookNow: phraseTranslations.th["Book Now"] || "จองเลย",
    sendEnquiry: phraseTranslations.th["Send Enquiry →"] || "ส่งข้อความ →",
    thankYouTitle: "ขอบคุณ",
    thankYouBody: "เราได้รับข้อความของคุณแล้ว และจะติดต่อกลับโดยเร็ว",
  },
  zh: {
    bookNow: phraseTranslations.zh["Book Now"] || "立即预订",
    sendEnquiry: phraseTranslations.zh["Send Enquiry →"] || "提交询价 →",
    thankYouTitle: "谢谢",
    thankYouBody: "我们已收到您的询价，将尽快回复。",
  },
};

/** Look up an English source phrase in the legacy TH/ZH dictionary. */
export function translatePhrase(locale: Locale, english: string): string {
  if (locale === "en") return english;
  const dict = phraseTranslations[locale] as Record<string, string>;
  return dict[english] ?? english;
}
