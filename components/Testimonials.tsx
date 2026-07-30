import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="#FEA250" {...props}>
      <path d="M14.1891 5.51739L10.2219 4.94083L8.44844 1.34551C8.4 1.24708 8.32031 1.16739 8.22187 1.11895C7.975 0.997076 7.675 1.09864 7.55156 1.34551L5.77812 4.94083L1.81094 5.51739C1.70156 5.53301 1.60156 5.58458 1.525 5.6627C1.43244 5.75784 1.38143 5.88583 1.38319 6.01855C1.38495 6.15127 1.43933 6.27786 1.53437 6.37051L4.40469 9.16895L3.72656 13.1205C3.71066 13.2124 3.72083 13.307 3.75592 13.3934C3.79102 13.4798 3.84963 13.5547 3.92511 13.6095C4.00059 13.6644 4.08992 13.6969 4.18297 13.7036C4.27602 13.7102 4.36907 13.6906 4.45156 13.6471L8 11.7815L11.5484 13.6471C11.6453 13.6986 11.7578 13.7158 11.8656 13.6971C12.1375 13.6502 12.3203 13.3924 12.2734 13.1205L11.5953 9.16895L14.4656 6.37051C14.5437 6.29395 14.5953 6.19395 14.6109 6.08458C14.6531 5.81114 14.4625 5.55801 14.1891 5.51739Z" />
    </svg>
  );
}

const TESTIMONIALS = [
  {
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    quote:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
    avatar: "/Ellipse175.png",
    highlighted: true,
  },
  {
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: "4.5",
    quote:
      "I like it because I like to travel far and still can connect with high speed.",
    avatar: "/Ellipse175(1).png",
    highlighted: false,
  },
  {
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: "4.5",
    quote:
      "This is very unusual for my business that currently requires a virtual private network that has high security.",
    avatar: "/Ellipse175(2).png",
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
        <p className="mt-5 text-base leading-[30px] text-muted">
          These are the stories of our customers who have joined us with
          great pleasure when using this crazy feature.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className={`rounded-[10px] border-2 bg-white p-8 ${
              t.highlighted ? "border-brand" : "border-[#DDD]"
            }`}
          >
            <div className="flex items-center gap-3">
              <Image
                src={t.avatar}
                alt={t.name}
                width={50}
                height={50}
                className="h-[50px] w-[50px] shrink-0 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="font-medium text-navy">{t.name}</p>
                <p className="text-sm text-muted">{t.location}</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-navy">{t.rating}</span>
                <StarIcon className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-6 leading-[30px] text-navy">
              &ldquo;{t.quote}&rdquo;
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-8 rounded-full bg-brand" />
          <span className="h-2 w-2 rounded-full bg-[#DDE0E4]" />
          <span className="h-2 w-2 rounded-full bg-[#DDE0E4]" />
          <span className="h-2 w-2 rounded-full bg-[#DDE0E4]" />
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
