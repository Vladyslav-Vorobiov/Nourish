"use client";

import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { EditorialLabel } from "@/components/ui/EditorialLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Newsletter() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const emailInput = event.currentTarget.elements.namedItem("email");

    setIsSubmitted(false);
    if (!emailInput.validity.valid) {
      setError(
        emailInput.validity.valueMissing
          ? "Please enter your email address."
          : "Please enter a valid email address, such as name@example.com.",
      );
      emailInput.focus();
      return;
    }

    setError("");
    setIsSubmitted(true);
  }

  return (
    <section
      className="bg-surface-dark py-20 text-text-inverse sm:py-28 lg:py-36"
      aria-labelledby="newsletter-title"
    >
      <Container>
        <div className="grid grid-cols-4 gap-x-3 md:grid-cols-12 md:gap-x-6">
          <ScrollReveal className="col-span-4 md:col-span-6 md:col-start-2">
            <EditorialLabel tone="inverse">A quiet subscription</EditorialLabel>
            <h2
              id="newsletter-title"
              className="mt-4 font-display text-[clamp(3rem,5vw,5.5rem)] leading-[0.9] tracking-[-0.06em]"
            >
              Letters from the pantry.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-surface-2">
              A considered note on what to cook, keep, and notice - sent when
              there is something worth sharing.
            </p>
          </ScrollReveal>
          <ScrollReveal className="col-span-4 mt-10 md:col-span-4 md:col-start-9 md:mt-16">
            <form
              noValidate
              onSubmit={handleSubmit}
              className="border-t border-surface-2 pt-4"
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                aria-invalid={error ? true : undefined}
                aria-describedby="newsletter-error"
                onChange={() => {
                  setError("");
                  setIsSubmitted(false);
                }}
                placeholder="Your email address"
                className="h-12 w-full border-b border-surface-2/40 bg-transparent px-0 pb-px text-base text-text-inverse placeholder:text-surface-2 focus:border-b-2 focus:border-surface focus:pb-0"
              />
              <p
                id="newsletter-error"
                role="alert"
                aria-atomic="true"
                className={error ? "mt-3 text-sm leading-6 text-surface-2" : ""}
              >
                {error}
              </p>
              <Button
                type="submit"
                variant="inverse"
                className="mt-5 min-h-12 w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-saffron"
              >
                Join the letters
              </Button>
              <p
                role="status"
                aria-atomic="true"
                className={
                  isSubmitted ? "mt-4 text-sm leading-6 text-surface-2" : ""
                }
              >
                {isSubmitted
                  ? "This is a portfolio demo. No subscription has been created."
                  : ""}
              </p>
            </form>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
