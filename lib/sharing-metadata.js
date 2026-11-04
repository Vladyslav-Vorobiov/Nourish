// Keep image paths relative until the permanent origin is configured in metadataBase.
export function createSharingMetadata({ title, description, image, alt, type }) {
  return {
    openGraph: {
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
