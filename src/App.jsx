import { useState } from "react";
import "./App.css";
import Layout from "./Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Cards/Cards";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error";
import Home from "./components/Home/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home/> },
      { path: "contact", element: <Contact/> },
      { path: "about", element: <About/> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "*", element: <Error/> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  );
}

export default App;
