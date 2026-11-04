import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { featuredRecipes } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { EditorialLabel } from "@/components/ui/EditorialLabel";
import { RecipeCardReveals } from "@/components/ui/RecipeCardReveals";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function SeasonalRecipes() {
  return (
    <section
      id="this-week"
      className="scroll-mt-8 py-20 sm:py-28 lg:py-36"
      aria-labelledby="this-week-title"
    >
      <Container>
        <ScrollReveal className="grid grid-cols-4 gap-x-3 md:grid-cols-12 md:gap-x-6">
          <div className="col-span-4 flex items-end justify-between border-b border-border-subtle pb-5 md:col-span-12">
            <div>
              <EditorialLabel>This week</EditorialLabel>
              <h2
                id="this-week-title"
                className="mt-3 font-display text-[clamp(2.5rem,4.3vw,4.5rem)] leading-[0.95] tracking-tighter text-ink"
              >
                For the table now.
              </h2>
            </div>
            <span className="hidden text-xs tracking-[0.08em] text-text-secondary sm:block">
              03 recipes
            </span>
          </div>
        </ScrollReveal>

        <RecipeCardReveals className="mt-10 grid grid-cols-4 gap-x-3 gap-y-12 md:mt-14 md:grid-cols-12 md:gap-x-6">
          {featuredRecipes.map((recipe) => (
            <article
              key={recipe.title}
              className={`col-span-4 ${recipe.layout}`}
            >
              <Link href={recipe.href ?? "/recipes"} className="group block">
                <figure className={`relative overflow-hidden bg-surface-2 ${recipe.imageClass}`}>
                    <Image
                      src={recipe.image}
                      alt={recipe.alt}
                      width={1200}
                      height={1500}
                      loading="eager"
                      sizes={recipe.imageSizes}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                </figure>
                <div className="mt-4 flex items-start gap-4">
                  <span className="pt-1 text-xs tracking-[0.08em] text-tomato">
                    {recipe.number}
                  </span>
                  <div>
                    <h3 className="font-display text-[clamp(1.75rem,2.4vw,2.5rem)] leading-[0.98] tracking-[-0.04em] text-ink transition-colors duration-200 group-hover:text-olive group-focus-visible:text-olive">
                      {recipe.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-base leading-6 text-text-secondary">
                      {recipe.description}
                    </p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </RecipeCardReveals>
      </Container>
    </section>
  );
}
