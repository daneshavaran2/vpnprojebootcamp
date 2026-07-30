export default function Subscribe() {
  return (
    <section className="bg-[#FAFAFA] px-6 pb-24 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 rounded-3xl bg-white p-10 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.1)] sm:flex-row sm:p-14">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
            Subscribe Now for Get Special Features!
          </h2>
          <p className="mt-3 text-muted">
            Let&apos;s subscribe with us and find the fun.
          </p>
        </div>
        <button className="shrink-0 rounded-2xl bg-brand px-8 py-4 font-bold text-white shadow-lg shadow-brand/30 transition-transform hover:scale-[1.03]">
          Subscribe Now
        </button>
      </div>
    </section>
  );
}
