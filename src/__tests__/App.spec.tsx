import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("render sections", async () => {
    const getSectionByName = (name: string) => screen.getByRole("heading", {level: 2, name}); 

    render(<App />);
    expect(getSectionByName("section 1")).toBeInTheDocument();
    expect(getSectionByName("section 2")).toBeInTheDocument();
    expect(getSectionByName("section 3")).toBeInTheDocument();
    expect(getSectionByName("section 4")).toBeInTheDocument();
    expect(getSectionByName("section 5")).toBeInTheDocument();
    expect(getSectionByName("section 6")).toBeInTheDocument();
    expect(getSectionByName("section 7")).toBeInTheDocument();
  });
});