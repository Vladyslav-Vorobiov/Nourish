"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { EditorialLabel } from "@/components/ui/EditorialLabel";

export function Newsletter() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <section className="bg-surface-dark py-20 text-text-inverse sm:py-28 lg:py-36" aria-labelledby="newsletter-title">
      <Container>
        <div className="grid grid-cols-4 gap-x-3 md:grid-cols-12 md:gap-x-6">
          <div className="col-span-4 md:col-span-6 md:col-start-2">
            <EditorialLabel className="text-surface-2">A quiet subscription</EditorialLabel>
            <h2 id="newsletter-title" className="mt-4 font-display text-[clamp(3rem,5vw,5.5rem)] leading-[0.9] tracking-[-0.06em]">
              Letters from the pantry.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-surface-2">
              A considered note on what to cook, keep, and notice — sent when there is something worth sharing.
            </p>
          </div>
          <div className="col-span-4 mt-10 md:col-span-4 md:col-start-9 md:mt-16">
            {isSubmitted ? (
              <p className="border-y border-surface-2 py-5 text-sm leading-6 text-surface-2" role="status">
                Thank you. The next letter will find you at the table.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="border-t border-surface-2 pt-4">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Your email address"
                  className="h-12 w-full border-b border-surface-2 bg-transparent px-0 text-base text-text-inverse placeholder:text-surface-2 focus:outline-none"
                />
                <Button type="submit" className="mt-5 min-h-12 w-full bg-surface text-ink hover:bg-surface-2 focus-visible:bg-surface-2">
                  Join the letters
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
