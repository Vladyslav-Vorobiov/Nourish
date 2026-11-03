"use client";

import { useLayoutEffect } from "react";
import { useAnimate } from "motion/react";

export function RecipeCardReveals({ className, children }) {
  const [scope, animate] = useAnimate();

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 768px)");
    if (reducedMotion.matches || !window.IntersectionObserver) return;

    const grid = scope.current;
    const cards = Array.from(grid.children);
    const layers = cards.map((card) => card.firstElementChild);
    const pending = new Set();
    const isDesktop = desktop.matches;
    const controls = [];
    let observer;
    let finished = false;
    const finish = () => {
      finished = true;
      observer?.disconnect();
      controls.forEach((control) => control.complete());
      layers.forEach((layer) => {
        layer.style.opacity = "1";
        layer.style.transform = "none";
      });
      pending.clear();
    };

    const reveal = (card) => {
      if (!pending.delete(card)) return;
      controls.push(animate(card.firstElementChild, { opacity: 1, y: 0 }, {
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
      }));
    };

    // Measure stationary articles before preparing their inner animation wrappers.
    try {
      if (!cards.length) return;
      if (isDesktop) {
        const rect = cards[0].getBoundingClientRect();
        const visibleWidth = Math.max(0, Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0));
        const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
        const visibleRatio = rect.width * rect.height > 0
          ? (visibleWidth * visibleHeight) / (rect.width * rect.height)
          : 0;
        if (visibleRatio >= 0.2) return;
      }
      cards.forEach((card) => {
        if (!isDesktop && card.getBoundingClientRect().top < window.innerHeight) return;
        pending.add(card);
        card.firstElementChild.style.opacity = "0";
        card.firstElementChild.style.transform = isDesktop ? "translateX(-24px)" : "translateY(20px)";
      });
      if (pending.size === 0) return;

      observer = new IntersectionObserver((entries) => {
        if (finished) return;
        try {
          entries.forEach(({ target, isIntersecting, intersectionRatio }) => {
            if (!isIntersecting || intersectionRatio < (isDesktop ? 0.2 : 0.1)) return;
            observer.unobserve(target);
            if (isDesktop) {
              const sequence = cards.flatMap((card, index) => {
                if (!pending.delete(card)) return [];
                return [[card.firstElementChild, { opacity: 1, x: 0 }, {
                  at: index * 0.4,
                  duration: 1.6,
                  ease: [0.4, 0, 0.2, 1],
                }]];
              });
              if (sequence.length) controls.push(animate(sequence));
            } else {
              reveal(target);
            }
          });
        } catch {
          finish();
        }
      }, isDesktop
        ? { threshold: 0.2 }
        : { threshold: 0.1 });
      if (isDesktop) observer.observe(cards[0]);
      else pending.forEach((card) => observer.observe(card));
    } catch {
      finish();
      return;
    }

    reducedMotion.addEventListener("change", finish);
    desktop.addEventListener("change", finish);
    grid.addEventListener("focusin", finish);
    return () => {
      reducedMotion.removeEventListener("change", finish);
      desktop.removeEventListener("change", finish);
      grid.removeEventListener("focusin", finish);
      finish();
    };
  }, [animate, scope]);

  return <div ref={scope} className={className}>{children}</div>;
}
