import React from "react";
import { Link,NavLink } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Product from "./Product";
const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
      <NavLink to={"/"} style={({isActive})=>{return isActive ?{color:"red"}:{color:"blue"}}}>Home</NavLink>
      <NavLink to={"/about"} style={({isActive})=>{return isActive ?{color:"red"}:{color:"blue"}}}>About</NavLink>
      <NavLink to={"/product"} style={({isActive})=>{return isActive ?{color:"red"}:{color:"blue"}}} >Product</NavLink>
      <NavLink to={"/login"} style={({isActive})=>{return isActive ?{color:"red"}:{color:"blue"}}}>Login</NavLink>
    </div>
  );
};

export default Navbar;
