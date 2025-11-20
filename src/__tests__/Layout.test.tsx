import { render, screen } from "@testing-library/react";
import Layout from "../components/Layout";
import { TestRouter } from "./testUtils";

describe("Layout", () => {
  it("renders header and footer", () => {
    render(
      <TestRouter>
        <Layout>
          <div>Content</div>
        </Layout>
      </TestRouter>
    );

    expect(screen.getByText(/World Cuisines/i)).toBeInTheDocument();
    expect(screen.getByText(/Content/)).toBeInTheDocument();
    expect(
      screen.getByText(/Crafted for culinary exploration/i)
    ).toBeInTheDocument();
  });
});
