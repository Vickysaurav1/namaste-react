import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { json } from "react-router-dom";
import MOCK_DATA from "../Mocks/mockResList.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render Body Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchBtn = screen.getByRole("button", { name: "search" });

  const searchInput = screen.getByPlaceholderText("search...");

  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);
  expect(searchBtn).toBeInTheDocument();
});

it("should filter top rated resturant", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const filterButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(filterButton);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  console.log("cardsAfterFilter",cardsAfterFilter)
  expect(cardsAfterFilter.length).toBe(4);
});
