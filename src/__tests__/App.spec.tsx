import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("render sections", async () => {
    const getSectionByName = (name: string) => screen.getByRole("heading", {level: 2, name}); 

    render(<App />);
    expect(getSectionByName("section 1")).toBeInTheDocument();
    expect(getSectionByName("section 2")).toBeInTheDocument();
    expect(getSectionByName("La GOT Âme")).toBeInTheDocument();
    expect(getSectionByName("Projets en cours")).toBeInTheDocument();
    expect(getSectionByName("section 5")).toBeInTheDocument();
    expect(getSectionByName("section 6")).toBeInTheDocument();
    expect(getSectionByName("Ils racontent leur expérience")).toBeInTheDocument();
  });
});