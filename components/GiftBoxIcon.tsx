export default function GiftBoxIcon() {
  return (
    <svg
      viewBox="0 0 140 130"
      width="112"
      height="104"
      className="mx-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="giftbox-box" x1="20" y1="70" x2="120" y2="130" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC876" />
          <stop offset="1" stopColor="#FF9A3C" />
        </linearGradient>
        <linearGradient id="giftbox-glow" x1="70" y1="10" x2="70" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="#FFEFE0" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* glow burst */}
      <path d="M40 80C40 55 55 40 70 40C85 40 100 55 100 80Z" fill="url(#giftbox-glow)" />

      {/* confetti */}
      <circle cx="55" cy="55" r="5" fill="#FF7979" />
      <circle cx="70" cy="42" r="4" fill="#FF7979" />
      <circle cx="85" cy="58" r="5" fill="#FF7979" />
      <circle cx="62" cy="70" r="3.5" fill="#FF7979" />

      <g stroke="#FFC93C" strokeWidth="2.5" strokeLinecap="round">
        <path d="M30 45L38 50" />
        <path d="M28 30L34 40" />
        <path d="M45 22L46 32" />
        <path d="M95 22L94 32" />
        <path d="M112 30L106 40" />
        <path d="M110 45L102 50" />
      </g>
      <g fill="#FFC93C">
        <path d="M40 36l2 6 6 2-6 2-2 6-2-6-6-2 6-2Z" />
        <path d="M100 36l2 6 6 2-6 2-2 6-2-6-6-2 6-2Z" />
      </g>
      <circle cx="50" cy="30" r="1.6" fill="#111111" />
      <circle cx="90" cy="30" r="1.6" fill="#111111" />
      <circle cx="70" cy="26" r="1.6" fill="#30235B" />

      {/* box */}
      <path d="M22 78L70 68L118 78V80H22V78Z" fill="#FFDDAA" />
      <path d="M18 82H122L114 128H26L18 82Z" fill="url(#giftbox-box)" />
      <path d="M18 82L70 92L122 82" stroke="#F0810C" strokeWidth="2" fill="none" />
    </svg>
  );
}
