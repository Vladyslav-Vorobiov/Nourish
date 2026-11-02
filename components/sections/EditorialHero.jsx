"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { EditorialLabel } from "@/components/ui/EditorialLabel";

export function EditorialHero() {
  return (
    <section aria-labelledby="cover-title" className="nourish-cover pb-10 pt-6 md:pb-16 md:pt-10">
      <Container>
        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-12 md:gap-x-6">
          <div className="contents md:col-span-5 md:flex md:flex-col md:justify-center md:pr-6 md:py-8 lg:pr-10">
            <div className="order-1 flex items-center justify-between gap-3 border-t border-border-strong pt-3 md:order-none">
              <EditorialLabel>Late summer / <span className="text-tomato">Issue 08</span></EditorialLabel>
              <time dateTime="2026-08" className="text-[0.6875rem] tracking-[0.06em] text-text-secondary">August 2026</time>
            </div>

            <h1
              id="cover-title"
              className="order-2 font-display text-[clamp(3rem,13.3vw,4.5rem)] leading-[0.95] tracking-[-0.045em] text-ink md:order-none md:mt-10 md:text-[clamp(3rem,6.5vw,6rem)]"
            >
              <span className="block">Eat what</span>{" "}
              <span className="block">the season</span>{" "}
              <span className="block">gives you.</span>
            </h1>

            <p className="order-4 max-w-[34ch] text-sm leading-6 text-text-secondary md:order-none md:mt-7 lg:text-base lg:leading-7">
              Ripe tomatoes, generous greens, and the pleasure of a little less cooking. A late-summer issue for the meals and rituals that bring us to the table.
            </p>

            <div className="order-5 md:order-none md:mt-6">
              <Link
                href="#this-week"
                className="inline-flex min-h-11 items-center gap-4 border-b border-ink pb-1 text-sm font-medium tracking-[0.02em] text-ink transition-colors duration-200 hover:border-tomato hover:text-tomato"
              >
                Explore the August table
                <ArrowDownRight size={17} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <figure className="order-3 min-w-0 md:order-none md:col-span-7">
            <div className="relative aspect-[6/5] overflow-hidden bg-surface-2">
              <Image
                src="/images/hero-august-table.png"
                alt="Heirloom tomatoes and basil on a ceramic plate beside linen and olive oil in warm sunlight"
                fill
                preload
                sizes="(min-width: 1440px) 772px, (min-width: 768px) 58vw, 100vw"
                className="object-cover object-[60%_50%]"
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-4 border-t border-border-subtle pt-3 text-[0.6875rem] leading-5 tracking-[0.03em] text-text-secondary">
              <span><span className="mr-3 text-tomato">08 /</span>The August Table</span>
              <span className="text-right">A season of plenty.</span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
