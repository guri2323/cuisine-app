import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CuisineCard from "../components/CuisineCard";
import { cuisines } from "../data/cuisines";

describe("CuisineCard", () => {
  const sample = cuisines[0];

  it("renders cuisine info and links to detail", () => {
    render(
      <MemoryRouter>
        <CuisineCard cuisine={sample} />
      </MemoryRouter>
    );

    expect(screen.getByText(sample.name)).toBeInTheDocument();
    expect(screen.getByText(sample.region)).toBeInTheDocument();
    expect(screen.getByText(sample.difficulty)).toBeInTheDocument();
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/cuisine/${sample.id}`);
  });
});
