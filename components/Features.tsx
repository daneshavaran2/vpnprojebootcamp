import { Check } from "lucide-react";
import IllustrationFeatures from "./IllustrationFeatures";

const FEATURES = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits.",
];

export default function Features() {
  return (
    <section
      id="features"
      className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24"
    >
      <IllustrationFeatures />

      <div className="max-w-xl">
        <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
          We Provide Many Features You Can Use
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-gray-500">
          You can explore the features that we provide with fun and have
          their own functions each feature.
        </p>
        <ul className="mt-8 space-y-5">
          {FEATURES.map((feature) => (
            <li key={feature} className="flex items-center gap-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint">
                <Check className="h-4 w-4 text-white" strokeWidth={3} />
              </span>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
