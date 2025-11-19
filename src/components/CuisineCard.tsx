import { Link } from "react-router-dom";
import { FiClock, FiTrendingUp } from "react-icons/fi";
import { Cuisine } from "../data/cuisines";

interface CuisineCardProps {
  cuisine: Cuisine;
}

function CuisineCard({ cuisine }: CuisineCardProps) {
  return (
    <Link
      to={`/cuisine/${cuisine.id}`}
      className="group overflow-hidden rounded-2xl border border-white/5 bg-white/5 shadow-lg shadow-black/40 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={cuisine.imageUrl}
          alt={cuisine.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-semibold text-primary shadow">
          {cuisine.region}
        </span>
        <span className="absolute right-3 bottom-3 inline-flex items-center gap-2 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-semibold text-white">
          <FiClock />
          {cuisine.totalTimeMinutes} min
        </span>
      </div>
      <div className="flex flex-col gap-3 px-4 py-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{cuisine.name}</h3>
            <p className="text-sm text-muted">{cuisine.shortDescription}</p>
          </div>
          <span className="rounded-lg bg-primary/15 px-2 py-1 text-xs font-semibold text-primary">
            {cuisine.difficulty}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted">
          <FiTrendingUp className="text-primary" />
          <span>{cuisine.ingredients.length} ingredients</span>
          <span className="h-3 w-px bg-white/10" />
          <span>{cuisine.servings} servings</span>
        </div>
      </div>
    </Link>
  );
}

export default CuisineCard;
