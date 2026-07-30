import { Circle } from "lucide-react";

const BRANDS = ["Netflix", "reddit", "amazon", "Discord", "Spotify"];

export default function TrustedBrands() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8 opacity-40 grayscale">
        {BRANDS.map((brand) => (
          <span
            key={brand}
            className="flex items-center gap-2 text-2xl font-bold tracking-tight text-gray-400"
          >
            {brand === "reddit" && <Circle className="h-6 w-6 fill-gray-400" />}
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}
