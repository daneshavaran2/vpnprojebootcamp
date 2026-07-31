import Illustration1 from "./Illustration1";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-8 pb-16 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pt-16">
      <div className="max-w-xl">
        <h1 className="text-4xl font-extrabold leading-tight text-navy sm:text-5xl">
          Want anything to be easy with <span>LaslesVPN.</span>
        </h1>
        <p className="mt-6 text-base leading-[30px] text-muted">
          Provide a network for all your needs with ease and fun using
          LaslesVPN discover interesting features from us.
        </p>
        <a
          href="#pricing"
          className="mt-8 inline-block rounded-2xl bg-brand px-8 py-4 font-bold text-white shadow-lg shadow-brand/30 transition-transform hover:scale-[1.03]"
        >
          Get Started
        </a>
      </div>

      <div className="flex justify-center overflow-visible lg:justify-end">
        <div className="h-[194px] w-[300px] sm:h-[271px] sm:w-[420px] lg:h-[400px] lg:w-[620px]">
          <div className="origin-top-left scale-[0.484] sm:scale-[0.677] lg:scale-100">
            <Illustration1 />
          </div>
        </div>
      </div>
    </section>
  );
}
