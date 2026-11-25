"use client";

import { useEffect } from "react";

/**
 * Lightweight scroll-reveal. Marks <html class="js"> so CSS only hides elements
 * when JS is running, then toggles .is-visible via IntersectionObserver.
 * Elements opt in with data-reveal (and optional style="--reveal-delay: 120ms").
 */
export function RevealObserver() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (reduce || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    nodes.forEach((n) => io.observe(n));

    // Observe nodes added after navigation (App Router keeps this mounted in layout)
    const mo = new MutationObserver((muts) => {
      for (const m of muts) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          const targets = node.matches("[data-reveal]")
            ? [node]
            : Array.from(node.querySelectorAll<HTMLElement>("[data-reveal]"));
          targets.forEach((t) => !t.classList.contains("is-visible") && io.observe(t));
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
  return null;
}
