type Props = {
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  size?: number;
  className?: string;
};

export default function BotanicalCorner({
  position = "top-right",
  size = 120,
  className = "",
}: Props) {
  const transforms: Record<string, string> = {
    "top-right": "scale(1,1)",
    "top-left": "scale(-1,1)",
    "bottom-right": "scale(1,-1)",
    "bottom-left": "scale(-1,-1)",
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ transform: transforms[position], transformOrigin: "center" }}
    >
      {/* Main branch curving from corner */}
      <path
        d="M10 110 Q30 80 55 55 Q75 35 100 15"
        stroke="#8B7355"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      {/* Secondary branch left */}
      <path
        d="M30 90 Q20 70 15 50"
        stroke="#8B7355"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.45"
      />
      {/* Secondary branch right */}
      <path
        d="M65 48 Q80 40 90 28"
        stroke="#8B7355"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.45"
      />
      {/* Pine needle clusters along main branch */}
      <g opacity="0.55" stroke="#6B5B3E" strokeWidth="0.8" strokeLinecap="round">
        {/* Cluster 1 around (38,73) */}
        <line x1="38" y1="73" x2="30" y2="62" />
        <line x1="38" y1="73" x2="27" y2="68" />
        <line x1="38" y1="73" x2="28" y2="76" />
        <line x1="38" y1="73" x2="47" y2="63" />
        <line x1="38" y1="73" x2="49" y2="70" />
        {/* Cluster 2 around (57,53) */}
        <line x1="57" y1="53" x2="48" y2="44" />
        <line x1="57" y1="53" x2="46" y2="50" />
        <line x1="57" y1="53" x2="50" y2="58" />
        <line x1="57" y1="53" x2="67" y2="45" />
        <line x1="57" y1="53" x2="67" y2="51" />
        {/* Cluster 3 around (78,35) */}
        <line x1="78" y1="35" x2="70" y2="26" />
        <line x1="78" y1="35" x2="68" y2="32" />
        <line x1="78" y1="35" x2="70" y2="40" />
        <line x1="78" y1="35" x2="87" y2="27" />
        <line x1="78" y1="35" x2="88" y2="33" />
      </g>
      {/* Small pine cone at top of main branch */}
      <ellipse cx="98" cy="18" rx="4" ry="6" fill="#A08060" opacity="0.5" />
      <ellipse cx="98" cy="15" rx="3.5" ry="2.5" fill="#8B7050" opacity="0.45" />
      <ellipse cx="98" cy="18" rx="3.5" ry="2.5" fill="#8B7050" opacity="0.45" />
      <ellipse cx="98" cy="21" rx="3.5" ry="2.5" fill="#8B7050" opacity="0.45" />
      {/* Small leaves scattered */}
      <ellipse cx="20" cy="60" rx="5" ry="3" fill="#7A8C5E" opacity="0.35" transform="rotate(-30 20 60)" />
      <ellipse cx="47" cy="85" rx="5" ry="3" fill="#7A8C5E" opacity="0.35" transform="rotate(20 47 85)" />
      <ellipse cx="70" cy="42" rx="4" ry="2.5" fill="#7A8C5E" opacity="0.35" transform="rotate(-45 70 42)" />
    </svg>
  );
}
