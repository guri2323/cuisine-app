import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactPage from "../pages/ContactPage";
import { TestRouter } from "./testUtils";
import { vi } from "vitest";

describe("ContactPage", () => {
  it("submits form and shows alert", async () => {
    const user = userEvent.setup();
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

    render(
      <TestRouter>
        <ContactPage />
      </TestRouter>
    );

    await act(async () => {
      await user.type(screen.getByLabelText(/Name/i), "Alex Chef");
      await user.type(screen.getByLabelText(/Email/i), "alex@example.com");
      await user.type(screen.getByLabelText(/Message/i), "Great app!");
      await user.click(screen.getByRole("button", { name: /Send message/i }));
    });

    expect(alertSpy).toHaveBeenCalled();
    alertSpy.mockRestore();
  });
});
