import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
  it("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    //Assersation
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");
    //Assersation
    expect(button).toBeInTheDocument();
  });

  it("should load button inside contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");
    //Assersation
    expect(inputName).toBeInTheDocument();
  });

  it("should load input boxes in contact component", () => {
    render(<Contact />);

    //querying
    const inputBoxes = screen.getAllByRole("textbox"); //mutiple items use ALL.

    //Assertation
    expect(inputBoxes.length).toBe(2);
  });
});
