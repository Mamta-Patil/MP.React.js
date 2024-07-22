import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Login from "./Login";
import Privetpage from "./Privetpage";
import About from "./About";
import Descriptionpage from "./Descriptionpage";
import Addproduct from "./Addproduct";
import Edit from "./Edit";
export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route
        path="/product" 
        element={
          <Privetpage>
            <Product />
          </Privetpage>
        }
      ></Route>
     
      {/* <Addproduct /> */}
      <Route path="/login" element={<Login />}></Route>
      <Route path="/descriptionpage/:id" element={<Descriptionpage />}></Route>
      <Route path="/addprduct" element={<Addproduct />}></Route>
      <Route path="/edit/:id" element={<Edit/>}></Route>

    </Routes>
  );
};

// export default Allroutes;
