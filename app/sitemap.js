import { SITE_ORIGIN } from "@/lib/site";

export default function sitemap() {
  const paths = [
    "/",
    "/recipes/tomato-white-bean-toast",
    "/recipes/charred-peach-salad",
    "/recipes/basil-oil-pasta",
    "/journal/why-august-tastes-different",
    "/journal/how-to-build-a-better-pantry",
    "/journal/the-quiet-ritual-of-sunday-cooking",
    "/journal/what-to-buy-at-the-market-this-week",
  ];

  return paths.map((pathname) => ({ url: new URL(pathname, SITE_ORIGIN).href }));
}
