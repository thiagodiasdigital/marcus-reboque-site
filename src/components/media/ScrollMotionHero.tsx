"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

export function ScrollMotionHero({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = root.getBoundingClientRect();
      const travel = Math.max(rect.height * 0.75, 1);
      const progress = Math.min(Math.max(-rect.top / travel, 0), 1);
      root.style.setProperty("--hero-scroll", progress.toFixed(3));
    };

    const schedule = () => {
      if (raf === 0) {
        raf = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (raf !== 0) {
        window.cancelAnimationFrame(raf);
      }

      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div className="hero-motion" ref={rootRef}>
      {children}
    </div>
  );
}
