import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft, FiClock, FiUsers, FiTrendingUp } from "react-icons/fi";
import { cuisines } from "../data/cuisines";

function CuisineDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const cuisine = useMemo(
    () => cuisines.find((item) => item.id === id),
    [id]
  );

  if (!cuisine) {
    return (
      <div className="rounded-2xl border border-white/5 bg-white/5 p-8 text-center">
        <p className="text-lg font-semibold text-white">Cuisine not found.</p>
        <p className="text-muted">Try heading back and picking another dish.</p>
        <div className="mt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-slate-900"
          >
            <FiArrowLeft /> Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-muted transition hover:text-white"
      >
        <FiArrowLeft /> Back
      </button>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="overflow-hidden rounded-3xl border border-white/5 bg-white/5 shadow-xl shadow-black/40">
          <div className="relative h-80 w-full overflow-hidden">
            <img
              src={cuisine.imageUrl}
              alt={cuisine.name}
              className="h-full w-full object-cover"
            />
            <span className="absolute left-4 top-4 rounded-full bg-slate-950/80 px-4 py-2 text-xs font-semibold text-primary shadow">
              {cuisine.region}
            </span>
          </div>
          <div className="space-y-4 p-6">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-semibold text-white">{cuisine.name}</h1>
              <span className="rounded-full bg-primary/20 px-3 py-1 text-sm font-semibold text-primary">
                {cuisine.difficulty}
              </span>
            </div>
            <p className="text-lg text-muted">{cuisine.description}</p>
            <div className="flex flex-wrap gap-3 text-sm text-muted">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2">
                <FiClock className="text-primary" />
                Prep {cuisine.prepTimeMinutes}m
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2">
                <FiClock className="text-accent" />
                Cook {cuisine.cookTimeMinutes}m
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2">
                <FiClock />
                Total {cuisine.totalTimeMinutes}m
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2">
                <FiUsers />
                Serves {cuisine.servings}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2">
                <FiTrendingUp className="text-primary" />
                {cuisine.ingredients.length} ingredients
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/5 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Ingredients</h2>
            <ul className="mt-4 space-y-3 text-muted">
              {cuisine.ingredients.map((item, idx) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-white/5 px-3 py-2"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary/70" />
                  <p className="text-sm">{item}</p>
                  <span className="ml-auto text-xs text-muted/70">#{idx + 1}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Steps</h2>
            <ol className="mt-4 space-y-4 text-muted">
              {cuisine.steps.map((step, idx) => (
                <li key={idx} className="rounded-xl bg-white/5 p-4">
                  <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-primary">
                    <span>Step {idx + 1}</span>
                    <span className="h-px w-10 bg-primary/40" />
                  </div>
                  <p className="text-sm text-white">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CuisineDetailPage;
