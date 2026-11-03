import { pantryEntries } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { EditorialLabel } from "@/components/ui/EditorialLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function PantryIndex() {
  return (
    <section id="pantry-index" className="bg-surface-2 py-20 sm:py-28 lg:py-36" aria-labelledby="pantry-index-title">
      <Container>
        <ScrollReveal className="grid grid-cols-4 gap-x-3 md:grid-cols-12 md:gap-x-6">
          <div className="col-span-4 md:col-span-4">
            <EditorialLabel>The reference shelf</EditorialLabel>
            <h2 id="pantry-index-title" className="mt-3 font-display text-[clamp(2.75rem,4.8vw,5rem)] leading-[0.9] tracking-[-0.055em] text-ink">
              <span className="block whitespace-nowrap">The Pantry</span>
              <span className="block">Index</span>
            </h2>
          </div>
          <p className="col-span-4 mt-7 max-w-xs text-sm leading-6 text-text-secondary md:col-span-3 md:col-start-6 md:mt-12">
            A small, useful catalogue of what is at its best right now — and how long it lasts once it reaches your kitchen.
          </p>
        </ScrollReveal>

        <ScrollReveal as="ol" role="list" className="mt-12 grid grid-cols-1 border-t border-border-strong md:mt-16 md:grid-cols-2 md:gap-x-12 md:border-t-0">
          {pantryEntries.map(([ingredient, peak, keeps], index) => (
            <li
              key={ingredient}
              className="grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-3 gap-y-2 border-b border-border-strong py-6 sm:grid-cols-[3.5rem_1fr_auto] sm:gap-y-3 sm:px-3 sm:py-5 md:[&:nth-child(-n+2)]:border-t"
            >
              <span className="text-xs tracking-[0.08em] text-tomato">{String(index + 1).padStart(2, "0")}</span>
              <span className="font-display text-3xl leading-none tracking-[-0.04em] text-ink sm:text-4xl">{ingredient}</span>
              <span className="hidden text-right text-[0.8125rem] leading-5 tracking-[0.04em] text-text-secondary sm:block">
                {peak}<br />{keeps}
              </span>
              <span className="col-start-2 row-start-2 min-w-0 text-[0.8125rem] leading-5 text-text-secondary sm:hidden">
                {peak} · {keeps}
              </span>
            </li>
          ))}
        </ScrollReveal>
      </Container>
    </section>
  );
}
