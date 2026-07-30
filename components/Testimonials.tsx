import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    quote:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
    initials: "VR",
    color: "bg-orange-200 text-orange-700",
    highlighted: true,
  },
  {
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: "4.5",
    quote:
      "I like it because I like to travel far and still can connect with high speed.",
    initials: "YC",
    color: "bg-pink-200 text-pink-700",
    highlighted: false,
  },
  {
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: "4.5",
    quote:
      "This is very unusual for my business that currently requires a virtual private network that has high security.",
    initials: "KJ",
    color: "bg-purple-200 text-purple-700",
    highlighted: false,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
          Trusted by Thousands of Happy Customer
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-gray-500">
          These are the stories of our customers who have joined us with
          great pleasure when using this crazy feature.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className={`rounded-2xl border bg-white p-8 ${
              t.highlighted ? "border-2 border-brand" : "border-gray-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold ${t.color}`}
              >
                {t.initials}
              </span>
              <div className="flex-1">
                <p className="font-bold text-navy">{t.name}</p>
                <p className="text-sm text-gray-400">{t.location}</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-semibold text-navy">{t.rating}</span>
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              </div>
            </div>
            <p className="mt-6 leading-relaxed text-gray-600">
              &ldquo;{t.quote}&rdquo;
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-8 rounded-full bg-brand" />
          <span className="h-2 w-2 rounded-full bg-gray-200" />
          <span className="h-2 w-2 rounded-full bg-gray-200" />
          <span className="h-2 w-2 rounded-full bg-gray-200" />
        </div>
        <div className="flex items-center gap-3">
          <button
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-brand text-brand transition-colors hover:bg-brand hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/30"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
