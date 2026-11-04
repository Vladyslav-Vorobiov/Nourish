import { createSharingMetadata } from "@/lib/sharing-metadata";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { featuredRecipes } from "@/data/home";
import { ArticleEntrance } from "@/components/ui/ArticleEntrance";
import { Container } from "@/components/ui/Container";
import { EditorialLabel } from "@/components/ui/EditorialLabel";

const title = "Why August tastes different.";
const lead =
  "August asks very little of the cook. When tomatoes are ripe and peaches give gently beneath your thumb, most of the work is already done.";

const sections = [
  {
    id: "let-the-season-lead",
    title: "Let the season lead",
    paragraphs: [
      "A good late-summer meal often begins before you reach the kitchen. It starts with the smell of a tomato, the weight of a peach, or a bunch of basil that makes everything around it smell green.",
      "Choose what looks ready to eat rather than what fits a precise plan. Tomatoes can be uneven and a little soft. Peaches should smell like peaches. Basil leaves need no more than a gentle rinse and time to dry.",
      "These small decisions shape the meal. A particularly sweet tomato might need only salt and olive oil. A firmer peach can take a moment on a hot grill. When the ingredients have something to say, leave enough space to taste them.",
    ],
  },
  {
    id: "do-a-little-less",
    title: "Do a little less",
    paragraphs: [
      "Simple cooking still asks for attention. Toast the bread until its edges are crisp but its centre has a little give. Salt tomatoes before serving so their juices can gather. Keep a cup of pasta water close by.",
      "Think about contrast: warm beans against juicy tomatoes, a charred peach beside cool cheese, ribbons of pasta with fragrant basil oil. A handful of ingredients can feel generous when each brings a different texture or flavour.",
      "Taste before adding more. Sometimes the missing thing is a squeeze of lemon; sometimes it is salt. Sometimes the dish needs nothing at all. The aim is to give each ingredient enough room while making the whole plate satisfying.",
    ],
  },
  {
    id: "bring-it-to-the-table",
    title: "Bring it to the table",
    paragraphs: [
      "There is no need to turn a late-summer lunch into an occasion with rules. Put the toast on a shared plate. Bring the salad to the table in the bowl you dressed it in. Serve the pasta while it is glossy and warm.",
      "A meal can come together in small stages: bread toasting while beans warm, peaches resting while leaves are washed, water coming to the boil as parmesan is grated. Leave yourself a little room to sit down, too.",
      "The recipes gathered here follow that rhythm. They use familiar ingredients, a few useful techniques, and the kind of finishing touches that make you want another bite. Make one for lunch or share a couple over a longer evening. Let what is ripe decide where you begin.",
    ],
  },
];

export const metadata = {
  title,
  description: lead,
  ...createSharingMetadata({
    title,
    description: lead,
    image: "/images/sharing/why-august-tastes-different.jpg",
    alt: "Eggplant, tomatoes, zucchini, plums, and fresh parsley beside an open paper bag on a sunlit wooden kitchen table.",
    type: "article",
  }),
};

export default function WhyAugustTastesDifferentPage() {
  return (
    <main id="main-content" className="pb-20 pt-6 sm:pb-28 md:pt-10 lg:pb-36">
      <Container>
        <Link
          href="/#story-title"
          className="nav-link arrow-link inline-flex min-h-11 items-center gap-2 pb-[5px] text-sm font-medium tracking-[0.02em] text-ink transition-colors duration-200 hover:text-olive focus-visible:text-olive"
        >
          <ArrowLeft
            className="link-arrow link-arrow-left"
            size={17}
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <span className="nav-link-label">Back to the journal</span>
        </Link>

        <ArticleEntrance aria-labelledby="article-title" className="mt-8 md:mt-12">
          <header className="mx-auto max-w-[60ch] pt-[17px]">
            <EditorialLabel>Journal</EditorialLabel>
            <h1
              id="article-title"
              className="mt-4 font-display text-[clamp(3rem,6.5vw,6rem)] leading-[0.95] tracking-[-0.045em] text-ink"
            >
              {title}
            </h1>
            <p className="mt-6 text-base leading-7 text-text-secondary">
              {lead}
            </p>
          </header>

          <figure className="mx-auto mt-10 max-w-[1120px] md:mt-14">
            <div className="relative aspect-5/4 overflow-hidden bg-surface-2 md:aspect-3/2">
              <Image
                src="/images/journal/august-market.png"
                alt="Eggplant, tomatoes, zucchini, plums, and fresh parsley beside an open paper bag on a sunlit wooden kitchen table."
                fill
                loading="eager"
                sizes="(min-width: 1184px) 1120px, (min-width: 768px) calc(100vw - 64px), calc(100vw - 40px)"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="mt-3 pt-[13px] text-[0.8125rem] leading-5 tracking-[0.04em] text-text-secondary">
              Eggplant, tomatoes, zucchini, plums, and parsley on a wooden kitchen table.
            </figcaption>
          </figure>

          <div className="mx-auto mt-12 max-w-[60ch] space-y-12 md:mt-16 md:space-y-16">
            {sections.map((section) => (
              <section key={section.id} aria-labelledby={section.id}>
                <h2
                  id={section.id}
                  className="font-display text-3xl leading-none tracking-[-0.04em] text-ink sm:text-4xl"
                >
                  {section.title}
                </h2>
                <div className="mt-6 space-y-5 text-base leading-7 text-text-primary">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            <section aria-labelledby="from-this-kitchen" className="border-t border-border-subtle pt-6">
              <h2
                id="from-this-kitchen"
                className="font-display text-3xl leading-none tracking-[-0.04em] text-ink sm:text-4xl"
              >
                From this kitchen
              </h2>
              <ul role="list" className="mt-6 space-y-2">
                {featuredRecipes.map((recipe) => (
                  <li key={recipe.href}>
                    <Link
                      href={recipe.href}
                      className="nav-link inline-flex min-h-11 items-center pb-[5px] text-sm font-medium tracking-[0.02em] text-ink transition-colors duration-200 hover:text-olive focus-visible:text-olive"
                    >
                      <span className="nav-link-label">{recipe.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </ArticleEntrance>
      </Container>
    </main>
  );
}
