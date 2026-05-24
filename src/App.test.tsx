import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders the dashboard and toggles theme", async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByRole("heading", { name: /generate readme/i })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /switch to dark mode/i }));
    expect(document.documentElement.dataset.theme).toBe("dark");
  });

  it("shows optional link fields", () => {
    render(<App />);

    expect(screen.getByRole("textbox", { name: /live demo link \(optional\)/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /video demo link \(optional\)/i })).toBeInTheDocument();
  });
});

