import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import { cuisines } from "../data/cuisines";

const renderRoute = (initialPath: string) =>
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>
  );

describe("App routing", () => {
  it("renders home page by default", () => {
    renderRoute("/");
    expect(screen.getByText(/Explore bold cuisines/i)).toBeInTheDocument();
  });

  it("renders cuisine detail route", () => {
    const sample = cuisines[0];
    renderRoute(`/cuisine/${sample.id}`);
    expect(screen.getByText(sample.name)).toBeInTheDocument();
  });

  it("renders not found for unknown routes", () => {
    renderRoute("/some/missing/path");
    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });
});
