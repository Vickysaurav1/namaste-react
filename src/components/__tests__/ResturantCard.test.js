import { render, screen } from "@testing-library/react";
import ResturantCard from "../ResturantCard";
import MOCK_DATA from "../Mocks/ResCardMock.json";
import "@testing-library/jest-dom";

it("should render ResturantCard coponent with props data", () => {
  render(<ResturantCard resName={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});
