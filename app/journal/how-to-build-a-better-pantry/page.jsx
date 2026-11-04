import { createSharingMetadata } from "@/lib/sharing-metadata";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { ArticleEntrance } from "@/components/ui/ArticleEntrance";
import { Container } from "@/components/ui/Container";
import { EditorialLabel } from "@/components/ui/EditorialLabel";
import { PantryIcon } from "./PantryIcon";

const title = "How to build a better pantry";
const lead =
  "A few dependable ingredients can make everyday cooking feel easier. Start with the food you enjoy, leave room for discovery, and build a pantry that earns its place in your kitchen.";

const sections = [
  {
    id: "beans-and-lentils",
    icon: "bean-pod",
    title: "Beans & lentils",
    paragraphs: [
      "A tin of white beans can become lunch in minutes: warmed with garlic, folded into a salad, or mashed onto toast. Chickpeas bring substance to roasted vegetables, while lentils make a generous base for soups and bowls.",
      "Choose two or three varieties you already like. Tinned beans are useful for quick meals; dried lentils suit days when you have a little more time. There is room for both.",
    ],
    beginning: "white beans, chickpeas, green or red lentils.",
  },
  {
    id: "grains-and-pasta",
    icon: "wheat",
    title: "Grains & pasta",
    paragraphs: [
      "These are the ingredients that give a handful of vegetables somewhere to land. Rice catches a sauce, couscous comes together quickly, and a favourite pasta shape can turn a modest collection of leftovers into dinner.",
      "Keep quantities in step with how often you cook them. One grain you use every week is more useful than several open bags you rarely touch. Finish an open packet before adding another variety.",
    ],
    beginning: "rice, couscous or bulgur, one favourite pasta shape.",
  },
  {
    id: "tomatoes-and-jarred-vegetables",
    icon: "tomato",
    title: "Tomatoes & jarred vegetables",
    paragraphs: [
      "Tinned tomatoes offer a starting point for sauces, soups, and gently simmered beans. Tomato paste adds depth in small amounts. A jar of roasted peppers can become a dressing, a sandwich filling, or something to serve beside bread and cheese.",
      "Choose a few ingredients with different uses. Once opened, follow the label’s storage instructions and plan where the remainder will go. A little tomato paste can enrich the next pot of beans.",
    ],
    beginning: "tinned tomatoes, tomato paste, roasted peppers.",
  },
  {
    id: "oils-and-something-sharp",
    icon: "olive-oil",
    title: "Oils & something sharp",
    paragraphs: [
      "Olive oil and a little acidity can bring a simple meal into focus. Vinegar brightens lentils, balances a rich sauce, and turns oil into a dressing. Lemons, when you have them, offer both juice and fragrant zest.",
      "Start with an olive oil you enjoy and one versatile vinegar. Learn what they bring to your cooking before making room for more bottles.",
    ],
    beginning: "olive oil, red wine or cider vinegar, lemons in the fresh shop.",
  },
  {
    id: "spices-and-finishing-touches",
    icon: "herb",
    title: "Spices & finishing touches",
    paragraphs: [
      "A small collection of seasonings can take the same ingredients in several directions. Cumin brings warmth to chickpeas. Smoked paprika deepens tomato sauces. Chilli flakes add a little heat to greens and pasta.",
      "Buy modest amounts and choose flavours you look forward to using. Capers or olives are useful additions if you enjoy their salty sharpness. Try a small spoonful with beans or vegetables before adding more.",
    ],
    beginning: "black pepper, cumin, smoked paprika, chilli flakes.",
  },
];

export const metadata = {
  title,
  description: lead,
  ...createSharingMetadata({
    title,
    description: lead,
    image: "/images/sharing/how-to-build-a-better-pantry.jpg",
    alt: "Glass jars of white beans, lentils, rigatoni and flour on a wooden pantry shelf beside olive oil and ceramic bowls.",
    type: "article",
  }),
};

export default function BetterPantryPage() {
  return (
    <main id="main-content" className="pb-12 pt-6 sm:pb-16 md:pt-10">
      <Container>
        <div className="mx-auto max-w-[1160px]">
          <Link
            href="/#journal-title"
            className="nav-link arrow-link inline-flex min-h-11 items-center gap-2 pb-[5px] text-sm font-medium tracking-[0.02em] text-ink transition-colors duration-200 hover:text-olive focus-visible:text-olive"
          >
            <ArrowLeft className="link-arrow link-arrow-left" size={17} strokeWidth={1.5} aria-hidden="true" />
            <span className="nav-link-label">Back to journal</span>
          </Link>

          <ArticleEntrance aria-labelledby="article-title" className="mt-8 space-y-10 lg:mt-10 lg:space-y-12">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-x-12">
              <header className="min-w-0 lg:col-start-1 lg:row-start-1">
                <EditorialLabel>Pantry guide</EditorialLabel>
                <h1 id="article-title" className="mt-4 font-display text-[clamp(2.5rem,4.2vw,3.75rem)] leading-[1.02] tracking-[-0.045em] text-ink">
                  {title}
                </h1>
                <p className="mt-6 max-w-[55ch] text-base leading-7 text-text-secondary">
                  {lead}
                </p>
              </header>
              <div className="overflow-hidden bg-surface-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-8 lg:aspect-[5/4]">
                <Image
                  src="/images/journal/better-pantry.png"
                  alt="Glass jars of white beans, lentils, rigatoni and flour on a wooden pantry shelf beside olive oil and ceramic bowls."
                  width={1536}
                  height={1024}
                  sizes="(min-width: 1224px) 556px, (min-width: 1024px) calc((100vw - 112px) / 2), (min-width: 768px) calc(100vw - 64px), calc(100vw - 40px)"
                  className="h-auto w-full lg:h-full lg:object-cover lg:object-[85%_50%]"
                />
              </div>

              <section aria-labelledby="start-with-your-own-table" className="min-w-0 max-w-[55ch] lg:col-start-1 lg:row-start-2">
                <h2 id="start-with-your-own-table" className="font-display text-2xl leading-tight tracking-[-0.03em] text-ink">
                  Start with your own table
                </h2>
                <p className="mt-4 text-base leading-7">
                  Think about the meals you return to when the day has been long: pasta with something green, beans on toast, or rice with vegetables and a sharp dressing. Before buying anything, look through your cupboards. Bring forgotten ingredients forward and notice what you reach for most often. Build around those habits, adding a little at a time. A good pantry should help you see the beginnings of dinner.
                </p>
              </section>
            </div>

            <div className="grid max-w-[70ch] grid-cols-1 items-start gap-x-12 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-12">
              {sections.map((section) => (
                <section key={section.id} aria-labelledby={section.id} className="min-w-0 border-t border-border-subtle pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <h2 id={section.id} className="min-w-0 font-display text-3xl leading-tight tracking-[-0.04em] text-ink">
                      {section.title}
                    </h2>
                    <PantryIcon subject={section.icon} />
                  </div>
                  <div className="mt-5 space-y-4 text-base leading-7">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    <p><strong className="font-semibold text-ink">A useful beginning:</strong> {section.beginning}</p>
                  </div>
                </section>
              ))}

              <section aria-labelledby="keep-it-useful" className="min-w-0 bg-olive/15 p-6 text-text-primary sm:p-8">
                <h2 id="keep-it-useful" className="font-display text-3xl leading-tight tracking-[-0.04em] text-ink">Keep it useful</h2>
                <div className="mt-5 space-y-4 text-base leading-7">
                  <p>Store dry ingredients somewhere cool and dry, with opened packets sealed. Keep labels and cooking instructions; if you decant something, transfer the relevant details too.</p>
                  <p>Before shopping, check the shelf. Bring older ingredients forward, replace the things you have enjoyed, and let the rest guide a meal. Your pantry will change with your habits and the season. Give it time to become your own.</p>
                </div>
              </section>
            </div>

            <section aria-labelledby="put-the-shelf-to-work">
              <p id="put-the-shelf-to-work" className="text-sm text-text-secondary">Put the shelf to work</p>
              <Link href="/recipes/tomato-white-bean-toast" className="nav-link arrow-link mt-1 inline-flex min-h-11 max-w-full items-center gap-2 pb-[5px] text-sm font-medium tracking-[0.02em] text-ink transition-colors duration-200 hover:text-olive focus-visible:text-olive">
                <span className="nav-link-label">Tomato &amp; White Bean Toast</span>
                <ArrowUpRight className="link-arrow link-arrow-up-right shrink-0" size={17} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </section>
          </ArticleEntrance>
        </div>
      </Container>
    </main>
  );
}
