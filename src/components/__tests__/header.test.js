import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/AppStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render header component with login button", () => {
  //Querying
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Assert
  const loginButton = screen.getByRole("button", { name: "Login" }); //it is using getByRole

  //const loginButton = screen.getByText("Login"); //it is using getByText
  expect(loginButton).toBeInTheDocument();
});

it("Should render header component with cart items - 0", () => {
    //Querying
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
 
    //Assert
    const cartItems = screen.getByText("Cart-(0 items)"); //it is using getByRole
  
    //const loginButton = screen.getByText("Login"); //it is using getByText
    expect(cartItems).toBeInTheDocument();
  });
  
