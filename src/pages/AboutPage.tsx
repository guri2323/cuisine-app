function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 rounded-3xl border border-white/5 bg-white/5 p-8 shadow-lg shadow-black/40">
      <p className="text-sm uppercase tracking-[0.2em] text-muted">About</p>
      <h1 className="text-3xl font-semibold text-white">World Cuisines Explorer</h1>
      <p className="text-muted">
        This app curates signature dishes from around the globe with beautiful imagery,
        ingredient lists, and clear steps. Browse, search, and save your favorites to plan
        your next cooking adventure.
      </p>
      <p className="text-muted">
        Built as a single-page experience with fast navigation, it is designed to help home
        cooks discover new flavors and cook with confidence.
      </p>
    </div>
  );
}

export default AboutPage;
