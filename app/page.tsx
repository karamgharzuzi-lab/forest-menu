"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "@/components/Hero";
import CategoryHeader from "@/components/CategoryHeader";
import DishRow from "@/components/DishRow";
import StickyCategoryNav from "@/components/StickyCategoryNav";
import BotanicalCorner from "@/components/BotanicalCorner";
import { menuData } from "@/data/menu";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroHeight, setHeroHeight] = useState(600);

  useEffect(() => {
    const measure = () => {
      if (heroRef.current) {
        setHeroHeight(heroRef.current.offsetHeight);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Right column (DOM-first = rightmost in RTL): starters only — large section.
  // Left column: everything else in scroll order (grilled → fish → kids → drinks).
  // This makes the page scroll in the exact same order as the sticky nav tabs.
  const rightColIds = ["starters"];
  const leftColIds = ["grilled-meats", "fish", "kids", "drinks"];

  const rightCol = menuData.filter((c) => rightColIds.includes(c.id));
  const leftCol = menuData.filter((c) => leftColIds.includes(c.id));

  return (
    <>
      {/* Sticky navigation */}
      <StickyCategoryNav categories={menuData} heroHeight={heroHeight} />

      {/* Hero */}
      <div ref={heroRef}>
        <Hero />
      </div>

      {/* Menu */}
      <main
        id="menu"
        className="relative max-w-6xl mx-auto px-4 md:px-8 py-12"
        dir="rtl"
      >
        {/* Botanical corner decorations for menu section */}
        <BotanicalCorner
          position="top-right"
          size={90}
          className="absolute top-4 right-2 opacity-40 pointer-events-none hidden md:block"
        />
        <BotanicalCorner
          position="top-left"
          size={90}
          className="absolute top-4 left-2 opacity-40 pointer-events-none hidden md:block"
        />

        {/* Desktop: two-column grid | Mobile: single column */}
        <div className="md:grid md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
          {/* RIGHT column (RTL: rendered first, shown on right) */}
          <div>
            {rightCol.map((category, catIdx) => (
              <section
                key={category.id}
                id={`section-${category.id}`}
                aria-labelledby={`heading-${category.id}`}
              >
                <CategoryHeader title={category.title} />
                <div>
                  {category.dishes.map((dish, dishIdx) => (
                    <DishRow
                      key={dish.id}
                      dish={dish}
                      priority={catIdx === 0 && dishIdx < 4}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* LEFT column */}
          <div>
            {leftCol.map((category, catIdx) => (
              <section
                key={category.id}
                id={`section-${category.id}`}
                aria-labelledby={`heading-${category.id}`}
              >
                <CategoryHeader title={category.title} />
                <div>
                  {category.dishes.map((dish, dishIdx) => (
                    <DishRow
                      key={dish.id}
                      dish={dish}
                      priority={catIdx === 0 && dishIdx < 4}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Footer divider */}
        <div className="mt-16 flex flex-col items-center gap-4 pb-8">
          <div className="flex items-center gap-4 w-full max-w-xs">
            <div className="flex-1 h-px bg-tan-dark/40" />
            <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
              <ellipse cx="16" cy="16" rx="6" ry="10" fill="#A08060" opacity="0.45" />
              <ellipse cx="16" cy="10" rx="5.5" ry="3.5" fill="#8B7050" opacity="0.4" />
              <ellipse cx="16" cy="16" rx="5.5" ry="3.5" fill="#8B7050" opacity="0.4" />
              <ellipse cx="16" cy="22" rx="5.5" ry="3.5" fill="#8B7050" opacity="0.4" />
            </svg>
            <div className="flex-1 h-px bg-tan-dark/40" />
          </div>
          <p className="font-cormorant text-charcoal/40 text-sm tracking-widest">
            FOREST
          </p>
        </div>
      </main>
    </>
  );
}
