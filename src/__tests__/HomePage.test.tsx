import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { cuisines } from "../data/cuisines";

describe("HomePage", () => {
  it("shows cuisine count and cards", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(
      screen.getByText(`Showing ${cuisines.length} of ${cuisines.length} curated dishes`)
    ).toBeInTheDocument();
    expect(screen.getAllByRole("link").length).toBeGreaterThanOrEqual(
      cuisines.length
    );
  });

  it("filters cuisines by search term", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText(/Search cuisines/i);
    fireEvent.change(input, { target: { value: cuisines[0].name } });
    expect(screen.getAllByRole("link").length).toBeGreaterThanOrEqual(1);

    fireEvent.change(input, { target: { value: "zzz-unmatched-term" } });
    expect(
      screen.getByText(/No cuisines found. Try a different search./i)
    ).toBeInTheDocument();
  });
});
