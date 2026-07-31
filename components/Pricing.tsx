import { Check } from "lucide-react";
import GiftBoxIcon from "./GiftBoxIcon";

const PLANS = [
  {
    name: "Free Plan",
    price: "Free",
    priceSuffix: "",
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
    highlighted: false,
  },
  {
    name: "Standard Plan",
    price: "$9",
    priceSuffix: "/ mo",
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
    ],
    highlighted: false,
  },
  {
    name: "Premium Plan",
    price: "$12",
    priceSuffix: "/ mo",
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
      "Get New Features",
    ],
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#F8F8F8] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mt-5 text-base leading-[30px] text-muted">
            Let&apos;s choose the package that is best for you and explore it
            happily and cheerfully.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-[10px] border-2 bg-white p-10 text-center ${
                plan.highlighted
                  ? "border-brand shadow-xl shadow-brand/10"
                  : "border-[#DDD]"
              }`}
            >
              <GiftBoxIcon />
              <h3 className="mt-6 text-xl font-bold text-navy">
                {plan.name}
              </h3>
              <ul className="mt-8 flex-1 space-y-4 text-left">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 shrink-0 text-mint" strokeWidth={2.5} />
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-10 text-2xl font-extrabold text-navy">
                {plan.price}{" "}
                {plan.priceSuffix && (
                  <span className="text-base font-medium text-muted">
                    {plan.priceSuffix}
                  </span>
                )}
              </p>
              <button
                className={`mt-6 rounded-full px-8 py-3 font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-brand text-white shadow-lg shadow-brand/30 hover:bg-brand-dark"
                    : "border border-brand text-brand hover:bg-brand hover:text-white"
                }`}
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
