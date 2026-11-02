"use client";

import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";

import { Container } from "@/components/ui/Container";

const navigation = [
  ["Recipes", "/recipes"],
  ["Pantry", "/pantry"],
  ["Seasonal", "/seasonal"],
  ["Journal", "/journal"],
  ["About", "/about"],
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="border-b border-border-subtle bg-canvas">
      <Container className="relative">
        <div className="flex h-18 items-center justify-between gap-6 md:h-20">
          <Link
            href="/"
            className="font-display text-[2rem] leading-none tracking-[-0.045em] text-ink sm:text-[2.25rem]"
            onClick={closeMenu}
          >
            Nourish
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
            {navigation.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-sm tracking-[0.015em] text-text-primary transition-colors duration-200 hover:text-olive"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-3">
            <Link
              href="/search"
              className="inline-flex size-11 items-center justify-center text-ink transition-colors duration-200 hover:text-olive"
              aria-label="Search"
            >
              <Search size={19} strokeWidth={1.5} aria-hidden="true" />
            </Link>
            <Link
              href="/saved"
              className="hidden text-sm tracking-[0.015em] text-text-primary transition-colors duration-200 hover:text-olive lg:inline"
            >
              Saved
            </Link>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center text-ink lg:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? (
                <X size={22} strokeWidth={1.5} aria-hidden="true" />
              ) : (
                <Menu size={23} strokeWidth={1.5} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isMenuOpen && (
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={reducedMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: reducedMotion ? 0 : 0.2, ease: "easeOut" }}
              className="absolute inset-x-0 top-full z-20 border-b border-border-subtle bg-canvas lg:hidden"
            >
              <div className="flex flex-col px-5 py-6 md:px-8">
                {navigation.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={closeMenu}
                    className="border-t border-border-subtle py-4 font-display text-3xl tracking-[-0.03em] text-ink transition-colors duration-200 hover:text-olive"
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/saved"
                  onClick={closeMenu}
                  className="border-y border-border-subtle py-4 text-sm uppercase tracking-[0.12em] text-text-secondary transition-colors duration-200 hover:text-olive"
                >
                  Saved recipes
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
