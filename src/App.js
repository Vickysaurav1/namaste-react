import React, {lazy, Suspense} from "react";
// import {createRoot, ReactDOM} from 'react-dom/client';
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import ResMenu from "./components/ResMenu";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";

const Grocery = lazy(()=> import("./components/Grocery"))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

//router.
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <ResMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); //Rendering the component in the DOM</s
