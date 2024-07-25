import React from "react";
// import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Product from "./ProductList";
import Login from "./Login";
import Privetpage from "./Privetpage";
import Descriptionpage from "./ProductDetails";
import Addproduct from "./Addproduct";
import Edit from "./EditProduct";
export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/product"
        element={
          <Privetpage>
            <Product />
          </Privetpage>
        }
      ></Route>

      <Route path="/login" element={<Login />}></Route>
      <Route path="/descriptionpage/:id" element={<Descriptionpage />}></Route>
      <Route path="/addproduct" element={<Addproduct />}></Route>
      <Route path="/edit/:id" element={<Edit />}></Route>
    </Routes>
  );
};
