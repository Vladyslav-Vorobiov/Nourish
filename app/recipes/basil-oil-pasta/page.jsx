import { createSharingMetadata } from "@/lib/sharing-metadata";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { featuredRecipes } from "@/data/home";
import { ArticleEntrance } from "@/components/ui/ArticleEntrance";
import { Container } from "@/components/ui/Container";
import { EditorialLabel } from "@/components/ui/EditorialLabel";
import { ImageFrame } from "@/components/ui/ImageFrame";

const recipe = featuredRecipes.find(
  ({ href }) => href === "/recipes/basil-oil-pasta",
);

const introduction =
  "A handful of basil, good olive oil, and a little pasta water make a glossy sauce that settles into every ripple. Parmesan brings depth, while lemon zest keeps it bright.";

const ingredients = [
  "200 g mafaldine or another ribbon-shaped pasta",
  "30 g fresh basil leaves, plus a few to finish",
  "4 tbsp extra virgin olive oil",
  "½ small garlic clove",
  "40 g finely grated parmesan, plus extra to serve",
  "Finely grated zest of ½ lemon",
  "Salt and freshly ground black pepper",
];

const steps = [
  {
    title: "Make the basil oil.",
    text: "Wash the basil and pat it thoroughly dry. Blend with the olive oil, garlic, and a small pinch of salt until the leaves are finely broken down.",
  },
  {
    title: "Cook the pasta.",
    text: "Bring a large pot of salted water to the boil. Cook the pasta until al dente, following the packet instructions. Reserve a mug of cooking water before draining.",
  },
  {
    title: "Bring it together.",
    text: "Let the drained pasta stand for a minute, then return it to the pot off the heat. Add the basil oil, parmesan, lemon zest, and 2 tablespoons of pasta water. Toss well, adding more water a splash at a time until glossy.",
  },
  {
    title: "Finish and serve.",
    text: "Divide between warm bowls. Finish with extra parmesan, black pepper, and a few basil leaves. Serve straight away.",
  },
];

export const metadata = {
  title: recipe.title,
  description: recipe.description,
  ...createSharingMetadata({
    pathname: "/recipes/basil-oil-pasta",
    title: recipe.title,
    description: recipe.description,
    image: "/images/sharing/basil-oil-pasta.jpg",
    alt: "Pasta coated in basil oil with grated Parmesan and fresh basil in a ceramic bowl.",
    type: "article",
  }),
};

export default function BasilOilPastaPage() {
  return (
    <main id="main-content" className="pb-20 pt-6 sm:pb-28 md:pt-10 lg:pb-36">
      <Container>
        <Link
          href="/#this-week"
          className="nav-link arrow-link inline-flex min-h-11 items-center gap-2 pb-[5px] text-sm font-medium tracking-[0.02em] text-ink transition-colors duration-200 hover:text-olive focus-visible:text-olive"
        >
          <ArrowLeft
            className="link-arrow link-arrow-left"
            size={17}
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <span className="nav-link-label">Back to this week’s recipes</span>
        </Link>

        <ArticleEntrance
          aria-labelledby="recipe-title"
          className="mt-8 md:mt-12"
        >
          <div className="grid grid-cols-4 gap-x-3 gap-y-8 md:grid-cols-12 md:gap-x-6">
            <header className="col-span-4 min-w-0 pt-[17px] md:col-span-5 md:self-center md:pt-[33px] md:pb-8">
              <EditorialLabel>Seasonal recipe</EditorialLabel>
              <h1
                id="recipe-title"
                className="mt-4 font-display text-[clamp(3rem,6.5vw,6rem)] leading-[0.95] tracking-[-0.045em] text-ink"
              >
                {recipe.title}
              </h1>
              <p className="mt-6 max-w-md text-base leading-7 text-text-secondary">
                {recipe.description}
              </p>
              <p className="mt-4 max-w-md text-base leading-7 text-text-secondary">
                {introduction}
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border-subtle pt-5 text-sm">
                <div>
                  <dt className="text-text-secondary">Total time</dt>
                  <dd className="mt-1 font-medium text-ink">25 minutes</dd>
                </div>
                <div>
                  <dt className="text-text-secondary">Serves</dt>
                  <dd className="mt-1 font-medium text-ink">2</dd>
                </div>
              </dl>
            </header>

            <ImageFrame
              src={recipe.image}
              alt={recipe.alt}
              width={1122}
              height={1402}
              loading="eager"
              sizes="(min-width: 1440px) 660px, (min-width: 768px) 50vw, 100vw"
              className="col-span-4 aspect-4/5 md:col-span-6 md:col-start-7 md:aspect-5/6"
            />
          </div>

          <div className="mt-20 grid grid-cols-4 gap-x-3 gap-y-12 border-t border-border-subtle pt-8 md:mt-28 md:grid-cols-12 md:gap-x-6 md:pt-10">
            <section aria-labelledby="ingredients-title" className="col-span-4">
              <h2
                id="ingredients-title"
                className="font-display text-4xl leading-none tracking-[-0.04em] text-ink"
              >
                Ingredients
              </h2>
              <ul
                role="list"
                className="mt-6 divide-y divide-border-subtle border-y border-border-subtle text-base leading-7 text-text-secondary"
              >
                {ingredients.map((ingredient) => (
                  <li key={ingredient} className="py-3">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </section>

            <section
              aria-labelledby="method-title"
              className="col-span-4 md:col-span-7 md:col-start-6"
            >
              <h2
                id="method-title"
                className="font-display text-4xl leading-none tracking-[-0.04em] text-ink"
              >
                Method
              </h2>
              <ol role="list" className="mt-6 space-y-8">
                {steps.map((step, index) => (
                  <li
                    key={step.title}
                    className="grid grid-cols-[2rem_1fr] items-baseline gap-3 md:gap-4"
                  >
                    <span
                      className="shrink-0 text-lg font-normal leading-none tracking-[0.08em] text-tomato"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl leading-tight tracking-[-0.03em] text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-[60ch] text-base leading-7 text-text-secondary">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <section
            aria-labelledby="kitchen-note-title"
            className="mt-16 border-t border-border-subtle pt-6 md:mt-20"
          >
            <h2
              id="kitchen-note-title"
              className="font-display text-2xl tracking-[-0.03em] text-ink"
            >
              Kitchen note
            </h2>
            <p className="mt-3 max-w-[60ch] text-base leading-7 text-text-secondary">
              Keep the basil oil away from direct heat to preserve its fresh
              flavour and colour. Grate the parmesan finely so it melts smoothly
              into the sauce, and add pasta water gradually-the sauce should
              coat the folds without pooling underneath.
            </p>
          </section>
        </ArticleEntrance>
      </Container>
    </main>
  );
}
