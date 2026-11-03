"use client";

import { useEffect, useRef } from "react";
import { useAnimate, useInView, useReducedMotion } from "motion/react";

export function ScrollReveal({ as: Tag = "div", delay = 0, className = "", children, ...props }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, amount: 0.1 });
  const reducedMotion = useReducedMotion();
  const hasRevealed = useRef(false);

  useEffect(() => {
    if (!isInView || hasRevealed.current) return;
    hasRevealed.current = true;
    if (reducedMotion) return;

    // Keep server-rendered content visible; only animate after entering the viewport.
    const controls = animate(scope.current, { opacity: [0, 1], y: [18, 0] }, {
      duration: 0.55,
      delay,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.complete();
  }, [animate, delay, isInView, reducedMotion, scope]);

  return (
    <Tag ref={scope} className={`scroll-reveal ${className}`} {...props}>
      {children}
    </Tag>
  );
}
