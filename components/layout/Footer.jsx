import Link from "next/link";

import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <Container>
        <div className="flex min-h-24 flex-col justify-center gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="font-display text-2xl tracking-[-0.04em] text-ink">
            Nourish
          </Link>
          <p className="text-xs tracking-[0.04em] text-text-secondary">
            A modern pantry journal.
          </p>
        </div>
      </Container>
    </footer>
  );
}
