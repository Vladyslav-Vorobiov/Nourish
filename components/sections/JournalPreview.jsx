import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { journalEntries } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { EditorialLabel } from "@/components/ui/EditorialLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function JournalPreview() {
  return (
    <section className="border-y border-border-subtle py-20 sm:py-28 lg:py-32" aria-labelledby="journal-title">
      <Container>
        <ScrollReveal className="grid grid-cols-4 gap-x-3 md:grid-cols-12 md:gap-x-6">
          <div className="col-span-4 md:col-span-12">
            <div>
              <EditorialLabel>Journal</EditorialLabel>
              <h2 id="journal-title" className="mt-3 font-display text-[clamp(2.5rem,4vw,4.25rem)] leading-none tracking-[-0.05em] text-ink">Things worth keeping.</h2>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal className="mt-10 grid grid-cols-1 border-t border-border-subtle md:mt-14 md:grid-cols-3">
          {journalEntries.map((entry) => (
            <article key={entry.title} className="border-b border-border-subtle md:border-b-0 md:border-r md:last:border-r-0">
              <Link href={entry.href ?? "/journal"} className="arrow-link group flex flex-col gap-8 p-5 transition-colors duration-200 hover:bg-surface focus-visible:bg-surface md:h-full md:min-h-72 md:justify-between md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <EditorialLabel>{entry.type}</EditorialLabel>
                  <span className="text-xs tracking-[0.08em] text-tomato">{entry.number}</span>
                </div>
                <div>
                  <h3 className="text-balance font-display text-3xl leading-[0.95] tracking-[-0.04em] text-ink transition-colors duration-200 group-hover:text-olive group-focus-visible:text-olive">{entry.title}</h3>
                  <ArrowUpRight className="link-arrow link-arrow-up-right mt-5 text-ink" size={18} strokeWidth={1.5} aria-hidden="true" />
                </div>
              </Link>
            </article>
          ))}
        </ScrollReveal>
      </Container>
    </section>
  );
}
