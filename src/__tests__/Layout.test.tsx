import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "../components/Layout";

describe("Layout", () => {
  it("renders header and footer", () => {
    render(
      <MemoryRouter>
        <Layout>
          <div>Content</div>
        </Layout>
      </MemoryRouter>
    );

    expect(screen.getByText(/World Cuisines/i)).toBeInTheDocument();
    expect(screen.getByText(/Content/)).toBeInTheDocument();
    expect(
      screen.getByText(/Crafted for culinary exploration/i)
    ).toBeInTheDocument();
  });
});
