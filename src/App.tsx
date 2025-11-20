import { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import CuisineDetailPage from "./pages/CuisineDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FavoritesPage from "./pages/FavoritesPage";
import NotFoundPage from "./pages/NotFoundPage";
import { cuisines as cuisinesData } from "./data/cuisines";

function App() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const cuisines = useMemo(() => cuisinesData, []);

  const toggleFavorite = (id: string) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <Layout favoritesCount={favoriteIds.length}>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              cuisines={cuisines}
              favoriteIds={favoriteIds}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="/cuisine/:id"
          element={
            <CuisineDetailPage
              cuisines={cuisines}
              favoriteIds={favoriteIds}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              cuisines={cuisines}
              favoriteIds={favoriteIds}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
