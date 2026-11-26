"use client";

import Image from "next/image";
import { useCallback, useId, useRef, useState } from "react";
import { Section, SectionHeading } from "@/components/ui/Section";

/**
 * Interactive wipe of a real Fix Auto Vacaville RAM 3500 repair.
 * Before/after are the same driver-side three-quarter angle, cropped
 * to register the front fascia for a clean comparison.
 */
export function BeforeAfter() {
  const id = useId();
  const [pos, setPos] = useState(50);
  const frameRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(4, Math.min(96, next)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <Section tone="mist" labelledBy="compare-heading">
      <div className="container-x">
        <SectionHeading
          id="compare-heading"
          align="center"
          eyebrow="Real Vacaville repair"
          title="Same truck. Stripped front end to finished chrome."
          lede="Drag the handle to compare this white RAM 3500 before and after front-end collision repair at Fix Auto Vacaville - bumper and grille off the vehicle, then restored to a clean factory finish."
        />

        <div
          ref={frameRef}
          className="compare-handle relative mx-auto mt-12 aspect-[16/10] max-w-5xl overflow-hidden rounded-2xl bg-navy-900 shadow-lift select-none"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <Image
            src="/images/compare-after-v5.jpg"
            alt="White RAM 3500 after collision repair with restored chrome grille, bumper, headlight, and gloss finish"
            fill
            sizes="(max-width: 1024px) 100vw, 64rem"
            className="object-cover object-center"
            draggable={false}
          />

          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <Image
              src="/images/compare-before-v5.jpg"
              alt="White RAM 3500 with front bumper, grille, and headlight removed during collision repair"
              fill
              sizes="(max-width: 1024px) 100vw, 64rem"
              className="object-cover object-center"
              draggable={false}
            />
          </div>

          <div
            className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_0_1px_rgb(10_31_61_/_0.2)]"
            style={{ left: `${pos}%` }}
            aria-hidden="true"
          >
            <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-navy-900 text-white shadow-lift">
              <span className="text-xs font-bold tracking-tight">↔</span>
            </span>
          </div>

          <span className="pointer-events-none absolute top-4 left-4 rounded-md bg-navy-950/70 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            Before
          </span>
          <span className="pointer-events-none absolute top-4 right-4 rounded-md bg-navy-950/70 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            After
          </span>

          <label htmlFor={id} className="sr-only">
            Compare before and after collision repair on a white RAM truck
          </label>
          <input
            id={id}
            type="range"
            min={4}
            max={96}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            className="compare-range absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
            aria-valuemin={4}
            aria-valuemax={96}
            aria-valuenow={Math.round(pos)}
            aria-valuetext={`${Math.round(pos)} percent revealing the before repair photo`}
          />
        </div>
      </div>
    </Section>
  );
}
