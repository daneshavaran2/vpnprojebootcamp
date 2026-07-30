function Sparkle({
  className,
  size = 14,
  color = "#FFC93C",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill={color}
    >
      <path d="M12 0C12.5 6 18 11.5 24 12C18 12.5 12.5 18 12 24C11.5 18 6 12.5 0 12C6 11.5 11.5 6 12 0Z" />
    </svg>
  );
}

function Heart({
  className,
  size = 16,
  color = "#FF9F81",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
      <path
        d="M12 21s-7.5-4.6-10-9.3C0.4 8.6 2 5 5.6 5c2 0 3.4 1 4.4 2.6C11 6 12.4 5 14.4 5 18 5 19.6 8.6 22 11.7 19.5 16.4 12 21 12 21Z"
        fill={color}
      />
    </svg>
  );
}

export default function IllustrationFeatures() {
  return (
    <div className="relative mx-auto h-[400px] w-[420px] max-w-full">
      {/* decorative sparkles / hearts */}
      <Heart className="absolute left-[40%] top-0" size={14} color="#FFC2C2" />
      <Heart className="absolute left-[55%] top-6" size={20} color="#FF9F9F" />
      <Heart className="absolute left-[47%] top-14" size={16} color="#FFC2C2" />

      <Sparkle className="absolute left-2 top-24" size={18} color="#FFC93C" />
      <Sparkle className="absolute left-10 top-44" size={12} color="#FFC93C" />
      <Sparkle className="absolute left-0 top-60" size={22} color="#FFC93C" />
      <span className="absolute left-16 top-32 h-1.5 w-1.5 rounded-full bg-purple" />
      <span className="absolute left-6 top-16 h-1.5 w-1.5 rounded-full bg-brand" />
      <svg
        className="absolute left-10 top-8 h-10 w-16 text-brand/60"
        viewBox="0 0 60 40"
        fill="none"
      >
        <path
          d="M2 30C15 32 25 10 55 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <Sparkle className="absolute right-4 top-24" size={20} color="#FFC93C" />
      <Sparkle className="absolute right-14 top-44" size={12} color="#FFC93C" />
      <Sparkle className="absolute right-0 top-60" size={16} color="#FFC93C" />
      <span className="absolute right-16 top-36 h-1.5 w-1.5 rounded-full bg-purple" />
      <span className="absolute right-6 top-16 h-1.5 w-1.5 rounded-full bg-mint" />
      <svg
        className="absolute right-10 top-8 h-10 w-16 text-brand/60"
        viewBox="0 0 60 40"
        fill="none"
      >
        <path
          d="M58 30C45 32 35 10 5 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* character */}
      <svg
        viewBox="0 0 320 340"
        className="absolute left-1/2 top-16 h-[320px] w-[300px] -translate-x-1/2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="feat-shirt" x1="60" y1="150" x2="260" y2="340" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF9F81" />
            <stop offset="1" stopColor="#F53838" />
          </linearGradient>
          <linearGradient id="feat-skin" x1="160" y1="40" x2="160" y2="220" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFEFE0" />
            <stop offset="1" stopColor="#FFBE99" />
          </linearGradient>
        </defs>

        {/* raised arm */}
        <path
          d="M232 180C258 168 278 130 286 96"
          stroke="url(#feat-skin)"
          strokeWidth="30"
          strokeLinecap="round"
        />
        <circle cx="288" cy="90" r="17" fill="url(#feat-skin)" />

        {/* body */}
        <path
          d="M70 340V230C70 176 110 150 160 150C210 150 250 176 250 230V340H70Z"
          fill="url(#feat-shirt)"
        />

        {/* extended arm pointing to laptop */}
        <path
          d="M96 210C60 218 30 232 8 244"
          stroke="url(#feat-skin)"
          strokeWidth="26"
          strokeLinecap="round"
        />

        {/* neck + collar */}
        <rect x="138" y="120" width="44" height="46" rx="16" fill="url(#feat-skin)" />
        <path
          d="M132 156C132 175 186 175 186 156"
          stroke="#F53838"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* head */}
        <circle cx="160" cy="86" r="58" fill="url(#feat-skin)" />

        {/* hair */}
        <path
          d="M100 78C96 34 126 8 160 8C198 8 226 34 222 78C214 62 198 70 190 60C176 74 138 74 128 58C118 70 106 62 100 78Z"
          fill="#30235B"
        />

        {/* headset band */}
        <path
          d="M92 66C92 26 122 4 160 4C198 4 228 26 228 66"
          stroke="white"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
        />
        <rect x="80" y="60" width="24" height="34" rx="12" fill="white" />
        <circle cx="92" cy="77" r="8" fill="#3CB07B" />
        <rect x="216" y="60" width="24" height="34" rx="12" fill="white" />
        <circle cx="228" cy="77" r="8" fill="#3CB07B" />

        {/* glasses */}
        <rect x="118" y="88" width="38" height="26" rx="10" stroke="#111111" strokeWidth="5" />
        <rect x="164" y="88" width="38" height="26" rx="10" stroke="#111111" strokeWidth="5" />
        <path d="M156 98H164" stroke="#111111" strokeWidth="5" />

        {/* laptop */}
        <path d="M0 250L18 320H130L112 250H0Z" fill="#E4E4E4" />
        <rect x="0" y="248" width="112" height="6" rx="3" fill="#CFCFCF" />
      </svg>
    </div>
  );
}
