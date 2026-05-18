type Props = {
  title: string;
};

export default function CategoryHeader({ title }: Props) {
  return (
    <div className="flex items-center gap-3 my-8" dir="rtl">
      {/* Left flourish */}
      <div className="flex-1 flex items-center gap-1 justify-end">
        <span className="flex-1 h-px bg-tan-dark/50" />
        <svg width="28" height="16" viewBox="0 0 28 16" fill="none" aria-hidden="true">
          <path d="M2 14 Q8 4 14 8 Q20 12 26 2" stroke="#8B7355" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7" />
          <g stroke="#6B5B3E" strokeWidth="0.8" strokeLinecap="round" opacity="0.6">
            <line x1="10" y1="9" x2="6" y2="4" />
            <line x1="10" y1="9" x2="5" y2="9" />
            <line x1="10" y1="9" x2="14" y2="5" />
            <line x1="19" y1="7" x2="17" y2="2" />
            <line x1="19" y1="7" x2="23" y2="4" />
          </g>
        </svg>
      </div>

      {/* Title pill */}
      <div
        className="px-6 py-2 rounded-full font-cormorant font-bold text-lg md:text-xl text-charcoal tracking-wide whitespace-nowrap flex-shrink-0"
        style={{ background: "#E8DCC4" }}
        dir="rtl"
      >
        {title}
      </div>

      {/* Right flourish */}
      <div className="flex-1 flex items-center gap-1 justify-start">
        <svg width="28" height="16" viewBox="0 0 28 16" fill="none" aria-hidden="true" style={{ transform: "scaleX(-1)" }}>
          <path d="M2 14 Q8 4 14 8 Q20 12 26 2" stroke="#8B7355" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7" />
          <g stroke="#6B5B3E" strokeWidth="0.8" strokeLinecap="round" opacity="0.6">
            <line x1="10" y1="9" x2="6" y2="4" />
            <line x1="10" y1="9" x2="5" y2="9" />
            <line x1="10" y1="9" x2="14" y2="5" />
            <line x1="19" y1="7" x2="17" y2="2" />
            <line x1="19" y1="7" x2="23" y2="4" />
          </g>
        </svg>
        <span className="flex-1 h-px bg-tan-dark/50" />
      </div>
    </div>
  );
}
