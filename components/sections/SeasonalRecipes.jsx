import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { featuredRecipes } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { EditorialLabel } from "@/components/ui/EditorialLabel";
import { ImageFrame } from "@/components/ui/ImageFrame";

export function SeasonalRecipes() {
  return (
    <section id="this-week" className="scroll-mt-8 py-20 sm:py-28 lg:py-36" aria-labelledby="this-week-title">
      <Container>
        <div className="grid grid-cols-4 gap-x-3 md:grid-cols-12 md:gap-x-6">
          <div className="col-span-4 flex items-end justify-between border-b border-border-subtle pb-5 md:col-span-8">
            <div>
              <EditorialLabel>This week</EditorialLabel>
              <h2 id="this-week-title" className="mt-3 font-display text-[clamp(2.5rem,4.3vw,4.5rem)] leading-[0.95] tracking-[-0.05em] text-ink">
                For the table now.
              </h2>
            </div>
            <span className="hidden text-xs tracking-[0.08em] text-text-secondary sm:block">03 recipes</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-4 gap-x-3 gap-y-12 md:mt-14 md:grid-cols-12 md:gap-x-6">
          {featuredRecipes.map((recipe) => (
            <article key={recipe.title} className={`col-span-4 ${recipe.layout}`}>
              <Link href="/recipes" className="group block">
                <ImageFrame
                  src={recipe.image}
                  alt={recipe.alt}
                  width={1200}
                  height={1500}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className={`${recipe.imageClass} relative`}
                  style={{ objectFit: "cover" }}
                />
                <div className="mt-4 flex items-start gap-4">
                  <span className="pt-1 text-xs tracking-[0.08em] text-tomato">{recipe.number}</span>
                  <div>
                    <h3 className="font-display text-[clamp(1.75rem,2.4vw,2.5rem)] leading-[0.98] tracking-[-0.04em] text-ink transition-colors duration-200 group-hover:text-olive">
                      {recipe.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-text-secondary">{recipe.description}</p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
