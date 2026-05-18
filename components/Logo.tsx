// SVG has its own coordinate system — always left-to-right regardless of page dir.
// No need for direction:ltr overrides. Just center via flex on the wrapper.
export default function Logo({ size = "lg" }: { size?: "sm" | "md" | "lg" }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <svg
        viewBox="0 0 400 155"
        style={{ width: "min(380px, 82vw)", height: "auto", display: "block" }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="FOREST"
        role="img"
      >
        {/* Arching pine branch over the word */}
        <path
          d="M28 90 Q100 20 200 13 Q300 6 372 58"
          stroke="#8B7355"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />

        {/* Pine needles — left cluster */}
        <g stroke="#6B5B3E" strokeWidth="0.9" strokeLinecap="round" opacity="0.65">
          <line x1="77" y1="47" x2="69" y2="35" />
          <line x1="77" y1="47" x2="66" y2="43" />
          <line x1="77" y1="47" x2="71" y2="54" />
          <line x1="77" y1="47" x2="86" y2="39" />
          <line x1="77" y1="47" x2="87" y2="46" />
        </g>

        {/* Pine needles — right cluster */}
        <g stroke="#6B5B3E" strokeWidth="0.9" strokeLinecap="round" opacity="0.65">
          <line x1="323" y1="36" x2="315" y2="24" />
          <line x1="323" y1="36" x2="313" y2="32" />
          <line x1="323" y1="36" x2="316" y2="43" />
          <line x1="323" y1="36" x2="332" y2="27" />
          <line x1="323" y1="36" x2="333" y2="35" />
        </g>

        {/* Pine cone at arch peak */}
        <ellipse cx="200" cy="15" rx="5.5" ry="8" fill="#A08060" opacity="0.6" />
        <ellipse cx="200" cy="10" rx="5" ry="3" fill="#8B7050" opacity="0.55" />
        <ellipse cx="200" cy="15" rx="5" ry="3" fill="#8B7050" opacity="0.55" />
        <ellipse cx="200" cy="20" rx="5" ry="3" fill="#8B7050" opacity="0.55" />

        {/* FOREST — single centered text element; textAnchor handles alignment */}
        <text
          x="200"
          y="122"
          textAnchor="middle"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontSize="70"
          fontWeight="600"
          letterSpacing="14"
          fill="#1F1A14"
        >
          FOREST
        </text>

        {/*
          Pine cone inside the O — 2nd character.
          With textAnchor="middle" at x=200, fontSize=70, letterSpacing=14:
          Total text width ≈ 300px, starts ≈ x=50.
          F ≈ 33px wide + 14 gap → O starts ≈ 97, O ≈ 48px wide → O center ≈ 121.
        */}
        <ellipse cx="120" cy="91" rx="6" ry="10" fill="#A08060" opacity="0.48" />
        <ellipse cx="120" cy="84" rx="5.5" ry="3.3" fill="#8B7050" opacity="0.45" />
        <ellipse cx="120" cy="91" rx="5.5" ry="3.3" fill="#8B7050" opacity="0.45" />
        <ellipse cx="120" cy="98" rx="5.5" ry="3.3" fill="#8B7050" opacity="0.45" />
      </svg>
    </div>
  );
}
