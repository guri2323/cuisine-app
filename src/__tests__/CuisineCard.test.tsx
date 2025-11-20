import { render, screen } from "@testing-library/react";
import CuisineCard from "../components/CuisineCard";
import { cuisines } from "../data/cuisines";
import { TestRouter } from "./testUtils";

describe("CuisineCard", () => {
  const sample = cuisines[0];

  it("renders cuisine info and links to detail", () => {
    render(
      <TestRouter>
        <CuisineCard cuisine={sample} />
      </TestRouter>
    );

    expect(screen.getByText(sample.name)).toBeInTheDocument();
    expect(screen.getByText(sample.region)).toBeInTheDocument();
    expect(screen.getByText(sample.difficulty)).toBeInTheDocument();
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/cuisine/${sample.id}`);
  });
});
