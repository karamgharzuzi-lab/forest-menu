"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Dish } from "@/data/menu";

const BLUR_DATA =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAADElEQVQI12P4z8BQDwADhQGAWjR9awAAAABJRU5ErkJggg==";

function CameraIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="#A08060" strokeWidth="1.3" />
      <circle cx="8.5" cy="10.5" r="1.5" stroke="#A08060" strokeWidth="1.3" />
      <path d="M3 16l4-4 3 3 3-3 5 5" stroke="#A08060" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type Props = { dish: Dish; priority?: boolean };

export default function DishRow({ dish, priority = false }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(priority);

  useEffect(() => {
    if (priority) return;
    const el = rowRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [priority]);

  return (
    <div
      ref={rowRef}
      className={`flex items-center gap-3 py-3 border-b border-charcoal/10 last:border-0 transition-all duration-500 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
      dir="rtl"
    >
      {/* Image — RIGHT in RTL */}
      <div
        className="flex-shrink-0 rounded-lg overflow-hidden flex items-center justify-center"
        style={{ width: 96, height: 96, minWidth: 96, background: "#E8DCC4" }}
      >
        {dish.image ? (
          <Image
            src={dish.image}
            alt={dish.name}
            width={96}
            height={96}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
            placeholder="blur"
            blurDataURL={BLUR_DATA}
            loading={priority ? "eager" : "lazy"}
          />
        ) : (
          <CameraIcon />
        )}
      </div>

      {/* Text row: name+desc on right, dotted leader, price on left */}
      <div className="flex-1 flex items-end gap-2 min-w-0 pb-0.5">
        {/* Name + description */}
        <div className="flex flex-col min-w-0 flex-shrink-0" style={{ maxWidth: "58%" }}>
          <span className="font-heebo font-bold text-charcoal text-[14px] sm:text-[15px] leading-snug">
            {dish.name}
          </span>
          {dish.description && (
            <span className="font-heebo text-charcoal/55 text-[12px] sm:text-[13px] leading-snug mt-0.5">
              {dish.description}
            </span>
          )}
        </div>

        {/* Dotted leader */}
        <span
          className="flex-1 self-end mb-[4px] min-w-2"
          style={{ borderBottom: "2px dotted rgba(31,26,20,0.18)" }}
          aria-hidden="true"
        />

        {/* Price — LEFT in RTL */}
        <span className="font-heebo font-bold text-charcoal text-[14px] sm:text-[15px] flex-shrink-0 tabular-nums">
          ₪{dish.price}
        </span>
      </div>
    </div>
  );
}
