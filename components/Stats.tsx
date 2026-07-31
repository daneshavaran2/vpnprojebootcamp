import { MapPin, Server, User } from "lucide-react";

const STATS = [
  { icon: User, value: "90+", label: "Users" },
  { icon: MapPin, value: "30+", label: "Locations" },
  { icon: Server, value: "50+", label: "Servers" },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <div className="relative">
        <div
          aria-hidden
          className="absolute inset-x-[3%] top-1/4 bottom-[-20%] -z-10 rounded-[10px] bg-[#0D1025] opacity-[0.06] blur-2xl"
        />
        <div className="grid grid-cols-1 divide-y divide-gray-100 rounded-[10px] bg-white p-10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-4 py-6 first:pt-0 sm:py-0"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-soft">
                <Icon className="h-6 w-6 text-brand" strokeWidth={2.25} />
              </span>
              <div>
                <p className="text-2xl font-extrabold text-navy">{value}</p>
                <p className="text-muted">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
