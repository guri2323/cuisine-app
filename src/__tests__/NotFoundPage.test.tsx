import { render, screen } from "@testing-library/react";
import NotFoundPage from "../pages/NotFoundPage";
import { TestRouter } from "./testUtils";

describe("NotFoundPage", () => {
  it("displays 404 message and link home", () => {
    render(
      <TestRouter>
        <NotFoundPage />
      </TestRouter>
    );

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Go home/i })).toBeInTheDocument();
  });
});
