import CuisineCard from "../components/CuisineCard";
import { cuisines } from "../data/cuisines";

function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-r from-slate-900/90 via-slate-900 to-slate-950 p-8 shadow-xl shadow-black/40">
        <div className="grid gap-6 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div className="space-y-4">
            <p className="inline-flex items-center rounded-full bg-primary/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Curated Tastes
            </p>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">
              Explore bold cuisines from around the world.
              <span className="text-primary"> Cook once, crave forever.</span>
            </h1>
            <p className="text-lg text-muted">
              Browse signature dishes, ingredient lists, and step-by-step guides. Tap a
              cuisine card to dive into details and start cooking with confidence.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-muted">
              <span className="rounded-full bg-white/5 px-3 py-1">Time-savvy picks</span>
              <span className="rounded-full bg-white/5 px-3 py-1">Feeds 3-6</span>
              <span className="rounded-full bg-white/5 px-3 py-1">Globally inspired</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -right-10 bottom-2 h-28 w-28 rounded-full bg-accent/25 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-slate-950/50 p-6 shadow-lg">
              <p className="text-sm uppercase tracking-[0.3em] text-muted">Featured</p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                Chef-picked flavor routes
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li>• Truffle-kissed pasta with herbaceous finish</li>
                <li>• Charred tacos layered with bright salsa verde</li>
                <li>• Slow-braised tagine with saffron depth</li>
              </ul>
              <p className="mt-5 text-xs text-primary">Tap a card to start.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted">Cuisines</p>
            <h2 className="text-2xl font-semibold text-white">Pick a destination</h2>
          </div>
          <p className="text-sm text-muted">{cuisines.length} curated dishes</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cuisines.map((cuisine) => (
            <CuisineCard key={cuisine.id} cuisine={cuisine} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
