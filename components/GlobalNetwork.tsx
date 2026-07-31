import WorldMap from "./WorldMap";

export default function GlobalNetwork() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
          Huge Global Network of Fast VPN
        </h2>
        <p className="mt-5 text-base font-medium leading-[30px] text-muted">
          See LaslesVPN everywhere to make it easier for you when you move
          locations.
        </p>
      </div>

      <div className="mt-16">
        <WorldMap />
      </div>
    </section>
  );
}
