import { render, screen } from "@testing-library/react";
import { TestRouter } from "./testUtils";
import AboutPage from "../pages/AboutPage";

describe("AboutPage", () => {
  it("renders about copy", () => {
    render(
      <TestRouter>
        <AboutPage />
      </TestRouter>
    );

    expect(screen.getByText(/World Cuisines Explorer/i)).toBeInTheDocument();
    expect(screen.getByText(/curates signature dishes/i)).toBeInTheDocument();
  });
});
