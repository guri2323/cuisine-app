import { render, screen } from "@testing-library/react";
import { Route, Routes } from "react-router-dom";
import CuisineDetailPage from "../pages/CuisineDetailPage";
import { cuisines } from "../data/cuisines";
import { TestRouter } from "./testUtils";

const renderWithRoute = (path: string) =>
  render(
    <TestRouter initialEntries={[path]}>
      <Routes>
        <Route path="/cuisine/:id" element={<CuisineDetailPage />} />
      </Routes>
    </TestRouter>
  );

describe("CuisineDetailPage", () => {
  it("renders selected cuisine data", () => {
    const sample = cuisines[1];
    renderWithRoute(`/cuisine/${sample.id}`);
    expect(screen.getByText(sample.name)).toBeInTheDocument();
    expect(screen.getByText(sample.description)).toBeInTheDocument();
    expect(screen.getByText(`Serves ${sample.servings}`)).toBeInTheDocument();
  });

  it("shows fallback when cuisine is not found", () => {
    renderWithRoute("/cuisine/unknown-id");
    expect(screen.getByText(/Cuisine not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Back to home/i)).toBeInTheDocument();
  });
});
