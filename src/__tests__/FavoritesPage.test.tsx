import { render, screen } from "@testing-library/react";
import { TestRouter } from "./testUtils";
import FavoritesPage from "../pages/FavoritesPage";
import { cuisines } from "../data/cuisines";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

describe("FavoritesPage", () => {
  const sample = cuisines.slice(0, 2);

  it("shows saved cuisines and count", () => {
    render(
      <TestRouter>
        <FavoritesPage
          cuisines={sample}
          favoriteIds={[sample[0].id]}
          onToggleFavorite={vi.fn()}
        />
      </TestRouter>
    );

    expect(screen.getByText(/Your saved cuisines/i)).toBeInTheDocument();
    expect(screen.getByText(/1 saved/i)).toBeInTheDocument();
    expect(screen.getByText(sample[0].name)).toBeInTheDocument();
    expect(screen.getByText(/Favorited/i)).toBeInTheDocument();
  });

  it("displays empty state when no favorites", () => {
    render(
      <TestRouter>
        <FavoritesPage cuisines={sample} favoriteIds={[]} onToggleFavorite={vi.fn()} />
      </TestRouter>
    );

    expect(
      screen.getByText(/No favorites yet. Browse cuisines and tap “Add to favorites”./i)
    ).toBeInTheDocument();
  });

  it("toggles favorite via button", async () => {
    const user = userEvent.setup();
    const toggleMock = vi.fn();
    render(
      <TestRouter>
        <FavoritesPage cuisines={sample} favoriteIds={[sample[0].id]} onToggleFavorite={toggleMock} />
      </TestRouter>
    );

    await user.click(screen.getByRole("button", { name: /Favorited/i }));
    expect(toggleMock).toHaveBeenCalledWith(sample[0].id);
  });
});
