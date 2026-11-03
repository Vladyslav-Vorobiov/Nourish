import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { featuredRecipes } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { EditorialLabel } from "@/components/ui/EditorialLabel";
import { ImageFrame } from "@/components/ui/ImageFrame";

const recipe = featuredRecipes.find(
  ({ href }) => href === "/recipes/charred-peach-salad",
);

const introduction =
  "Warm, lightly charred peaches, creamy goat cheese, and peppery leaves. A simple summer salad finished with toasted walnuts and a sharp balsamic dressing.";

const ingredients = [
  "2 ripe but firm peaches, halved and pitted",
  "80 g rocket",
  "75 g soft goat cheese",
  "30 g walnuts",
  "2 tbsp extra-virgin olive oil, divided",
  "1 tbsp balsamic vinegar",
  "1 tsp honey",
  "Sea salt and freshly ground black pepper",
];

const steps = [
  {
    title: "Toast the walnuts.",
    text: "Toast the walnuts in a dry pan over medium heat until fragrant, tossing frequently. Let cool, then roughly chop.",
  },
  {
    title: "Grill the peaches.",
    text: "Heat a grill pan over medium-high heat. Lightly brush the cut sides of the peaches with a little of the olive oil. Grill cut-side down for 2–3 minutes, until marked and lightly softened. Let cool slightly, then slice into wedges.",
  },
  {
    title: "Make the dressing.",
    text: "Whisk the remaining olive oil with the balsamic vinegar, honey, salt, and black pepper.",
  },
  {
    title: "Assemble and serve.",
    text: "Lightly dress the rocket and divide between two plates. Add the peaches, crumble over the goat cheese, and scatter with walnuts. Spoon over the remaining dressing and serve immediately.",
  },
];

export const metadata = {
  title: recipe.title,
  description: introduction,
};

export default function CharredPeachSaladPage() {
  return (
    <main id="main-content" className="pb-20 pt-6 sm:pb-28 md:pt-10 lg:pb-36">
      <Container>
        <Link
          href="/#this-week"
          className="arrow-link inline-flex min-h-11 items-center gap-2 border-b border-ink pb-1 text-sm font-medium tracking-[0.02em] text-ink transition-colors duration-200 hover:border-olive hover:text-olive focus-visible:border-olive focus-visible:text-olive"
        >
          <ArrowLeft
            className="link-arrow link-arrow-left"
            size={17}
            strokeWidth={1.5}
            aria-hidden="true"
          />
          Back to this week’s recipes
        </Link>

        <article aria-labelledby="recipe-title" className="mt-8 md:mt-12">
          <div className="grid grid-cols-4 gap-x-3 gap-y-8 md:grid-cols-12 md:gap-x-6">
            <header className="col-span-4 min-w-0 border-t border-border-strong pt-4 md:col-span-5 md:self-center md:py-8">
              <EditorialLabel>Seasonal recipe</EditorialLabel>
              <h1
                id="recipe-title"
                className="mt-4 font-display text-[clamp(3rem,6.5vw,6rem)] leading-[0.95] tracking-[-0.045em] text-ink"
              >
                {recipe.title}
              </h1>
              <p className="mt-6 max-w-md text-base leading-7 text-text-secondary">
                {introduction}
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border-subtle pt-5 text-sm">
                <div>
                  <dt className="text-text-secondary">Total time</dt>
                  <dd className="mt-1 font-medium text-ink">20 minutes</dd>
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
              width={1536}
              height={1024}
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
                    className="grid grid-cols-[2rem_1fr] gap-3 md:gap-6"
                  >
                    <span
                      className="pt-1 text-xs tracking-[0.08em] text-tomato"
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
              Choose peaches that smell fragrant but still feel firm. Very soft
              fruit can collapse on the grill. Let the grilled peaches cool
              slightly before adding them to the leaves.
            </p>
          </section>
        </article>
      </Container>
    </main>
  );
}
