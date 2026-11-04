"use client";

import { useLayoutEffect, useRef } from "react";
import { useAnimate } from "motion/react";

export function ArticleEntrance({ children, ...props }) {
  const scope = useRef(null);
  const [, animate] = useAnimate();

  useLayoutEffect(() => {
    // Let Next suppress smooth scrolling for route transitions, while leaving
    // hash scrolling and the router's history restoration in control.
    const html = document.documentElement;
    const previousScrollBehavior = html.getAttribute("data-scroll-behavior");
    html.setAttribute("data-scroll-behavior", "smooth");
    const restoreScrollBehavior = () => {
      if (previousScrollBehavior === null) html.removeAttribute("data-scroll-behavior");
      else html.setAttribute("data-scroll-behavior", previousScrollBehavior);
    };

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return restoreScrollBehavior;

    const article = scope.current;
    let controls;
    const finish = () => {
      controls?.complete();
      article.style.opacity = "1";
      article.style.transform = "none";
    };
    const onMotionChange = () => {
      if (reducedMotion.matches) finish();
    };

    try {
      // Apply the first frame synchronously, before Motion's scheduled update.
      article.style.opacity = "0";
      article.style.transform = "translateY(8px)";
      controls = animate(article, { opacity: [0, 1], y: [8, 0] }, {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      });
      reducedMotion.addEventListener("change", onMotionChange);
    } catch {
      finish();
    }

    return () => {
      reducedMotion.removeEventListener("change", onMotionChange);
      finish();
      restoreScrollBehavior();
    };
  }, [animate, scope]);

  return <article ref={scope} {...props}>{children}</article>;
}
