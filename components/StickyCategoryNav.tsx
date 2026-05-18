"use client";

import { useEffect, useRef, useState } from "react";
import type { Category } from "@/data/menu";

type Props = {
  categories: Category[];
  heroHeight: number;
};

export default function StickyCategoryNav({ categories, heroHeight }: Props) {
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > heroHeight * 0.8);

      // Determine active category by which section is near top
      let current = "";
      for (const cat of categories) {
        const el = document.getElementById(`section-${cat.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = cat.id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [categories, heroHeight]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(`section-${id}`);
    if (el) {
      const navH = navRef.current?.offsetHeight ?? 64;
      const top = el.getBoundingClientRect().top + window.scrollY - navH - 8;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  if (!visible) return null;

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-1 px-3 py-2 shadow-md"
      style={{ background: "#F7F1E8", borderBottom: "1px solid #E8DCC4" }}
      dir="rtl"
      aria-label="ניווט בתפריט"
    >
      <div className="flex gap-1 overflow-x-auto scrollbar-hide max-w-full pb-0.5">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => scrollTo(cat.id)}
            className={`px-3 py-1.5 rounded-full text-sm font-heebo whitespace-nowrap transition-colors focus:outline-none focus:ring-2 focus:ring-charcoal/40 min-h-[36px] ${
              activeId === cat.id
                ? "bg-charcoal text-cream font-bold"
                : "text-charcoal/70 hover:bg-tan"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>
    </nav>
  );
}
