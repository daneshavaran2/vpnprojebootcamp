import Image from "next/image";

const BRANDS = [
  { src: "/Image17.png", alt: "Netflix", width: 164, height: 44 },
  { src: "/Image18.png", alt: "reddit", width: 156, height: 51 },
  { src: "/Image19.png", alt: "amazon", width: 153, height: 46 },
  { src: "/Image21.png", alt: "Discord", width: 171, height: 48 },
  { src: "/Image20.png", alt: "Spotify", width: 169, height: 51 },
];

export default function TrustedBrands() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
        {BRANDS.map((brand) => (
          <Image
            key={brand.alt}
            src={brand.src}
            alt={brand.alt}
            width={brand.width}
            height={brand.height}
            className="h-8 w-auto object-contain opacity-40 grayscale transition-all hover:opacity-70 hover:grayscale-0"
          />
        ))}
      </div>
    </div>
  );
}
