"use client";

import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Container } from "@/components/ui/Container";
import { EditorialLabel } from "@/components/ui/EditorialLabel";
import { ImageFrame } from "@/components/ui/ImageFrame";

const rise = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function EditorialHero() {
  const reducedMotion = useReducedMotion();
  const transition = { duration: reducedMotion ? 0 : 0.5, ease: "easeOut" };

  return (
    <section className="overflow-hidden pb-20 pt-12 sm:pb-28 md:pt-18 lg:pb-36">
      <Container>
        <div className="grid grid-cols-4 gap-x-3 gap-y-10 md:grid-cols-12 md:gap-x-6 lg:gap-y-16">
          <motion.div
            initial={reducedMotion ? false : "hidden"}
            animate="visible"
            variants={rise}
            transition={transition}
            className="col-span-4 flex items-center justify-between border-y border-border-subtle py-3 md:col-span-5 md:col-start-1 md:justify-start md:gap-7"
          >
            <EditorialLabel>Late Summer / Issue 08</EditorialLabel>
            <span className="text-xs tracking-[0.08em] text-text-secondary">August 2026</span>
          </motion.div>

          <motion.p
            initial={reducedMotion ? false : "hidden"}
            animate="visible"
            variants={rise}
            transition={{ ...transition, delay: reducedMotion ? 0 : 0.08 }}
            className="col-span-4 text-sm leading-6 text-text-secondary md:col-span-3 md:col-start-2 md:row-start-2 lg:pt-12"
          >
            A journal for the meals, ingredients, and small rituals that make a kitchen feel alive.
          </motion.p>

          <motion.div
            initial={reducedMotion ? false : "hidden"}
            animate="visible"
            variants={rise}
            transition={{ ...transition, delay: reducedMotion ? 0 : 0.14 }}
            className="col-span-4 md:col-span-6 md:col-start-1 md:row-start-3"
          >
            <h1 className="max-w-[8ch] font-display text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.88] tracking-[-0.06em] text-ink">
              Eat what the season gives you.
            </h1>
            <Link
              href="#this-week"
              className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-ink pb-1 text-sm font-medium tracking-[0.03em] text-ink transition-colors duration-200 hover:border-olive hover:text-olive"
            >
              Find this week&apos;s table
              <ArrowDownRight size={17} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-4 md:col-span-6 md:col-start-7 md:row-span-3 md:row-start-1"
          >
            <ImageFrame
              src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1600&q=85"
              alt="A table set with seasonal vegetables, linen, and ceramic plates"
              width={1600}
              height={2000}
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="aspect-[4/5] md:aspect-[3/4]"
              style={{ objectFit: "cover" }}
            />
          </motion.div>

          <motion.p
            initial={reducedMotion ? false : "hidden"}
            animate="visible"
            variants={rise}
            transition={{ ...transition, delay: reducedMotion ? 0 : 0.2 }}
            className="col-span-4 border-l border-tomato pl-4 text-sm leading-6 text-text-secondary md:col-span-3 md:col-start-9 md:row-start-4"
          >
            This issue is an ode to the generous, imperfect middle of summer.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
