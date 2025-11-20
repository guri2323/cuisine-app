import CuisineCard from "../components/CuisineCard";
import { Cuisine } from "../data/cuisines";

interface FavoritesPageProps {
  cuisines: Cuisine[];
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
}

function FavoritesPage({ cuisines, favoriteIds, onToggleFavorite }: FavoritesPageProps) {
  const favoriteCuisines = cuisines.filter((c) => favoriteIds.includes(c.id));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted">Favorites</p>
          <h1 className="text-3xl font-semibold text-white">Your saved cuisines</h1>
        </div>
        <p className="text-sm text-muted">{favoriteCuisines.length} saved</p>
      </div>

      {favoriteCuisines.length === 0 ? (
        <div className="rounded-2xl border border-white/5 bg-white/5 p-8 text-center text-muted">
          No favorites yet. Browse cuisines and tap “Add to favorites”.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favoriteCuisines.map((cuisine) => (
            <CuisineCard
              key={cuisine.id}
              cuisine={cuisine}
              isFavorite
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
