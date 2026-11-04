import { SITE_ORIGIN } from "@/lib/site";

export function createSharingMetadata({ title, description, image, alt, type, pathname }) {
  const url = new URL(pathname, SITE_ORIGIN).href;

  return {
    alternates: { canonical: url },
    openGraph: {
      url,
      title,
      description,
      siteName: "Nourish",
      locale: "en_US",
      type,
      images: [{ url: image, width: 1200, height: 630, alt, type: "image/jpeg" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image, alt }],
    },
  };
}
