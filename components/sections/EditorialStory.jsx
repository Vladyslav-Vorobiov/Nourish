import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { EditorialLabel } from "@/components/ui/EditorialLabel";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function EditorialStory() {
  return (
    <section className="py-20 sm:py-28 lg:py-40" aria-labelledby="story-title">
      <Container>
        <div className="grid grid-cols-4 gap-x-3 gap-y-8 md:grid-cols-12 md:gap-x-6 md:gap-y-0">
          <ScrollReveal className="col-span-4 md:col-span-7 md:col-start-1">
            <ImageFrame
              src="/images/journal/august-market.png"
              alt="Eggplant, tomatoes, zucchini, plums, and fresh parsley beside an open paper bag on a sunlit wooden kitchen table."
              width={1600}
              height={1200}
              sizes="(min-width: 768px) 58vw, 100vw"
              className="aspect-[5/4]"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <p className="mt-3 text-[0.8125rem] tracking-[0.04em] text-text-secondary">A late-summer market haul, before dinner begins.</p>
          </ScrollReveal>
          <ScrollReveal className="col-span-4 md:col-span-4 md:col-start-9 md:pt-24">
            <EditorialLabel>From the journal</EditorialLabel>
            <h2 id="story-title" className="mt-4 font-display text-[clamp(3rem,5.2vw,5.6rem)] leading-[0.9] tracking-[-0.06em] text-ink md:text-[clamp(2.7rem,4.68vw,5.04rem)]">
              Why August tastes different.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-text-secondary">
              Market bags full, dinners unhurried. A few notes on late-summer produce, cooking with less effort, and letting the season lead.
            </p>
            <Link href="/journal" className="arrow-link mt-8 inline-flex min-h-11 items-center gap-2 border-b border-ink pb-1 text-sm font-medium tracking-[0.03em] text-ink transition-colors duration-200 hover:border-olive hover:text-olive focus-visible:border-olive focus-visible:text-olive">
              Read the story <ArrowUpRight className="link-arrow link-arrow-up-right" size={17} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
