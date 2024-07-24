import React from "react";
import { Link,NavLink } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Product from "./Product";
const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"#508C9B",padding:"10px 0px"}}>
      <NavLink to={"/"} style={({isActive})=>{return isActive ?{color:"white"}:{color:"blue"}}}>Home</NavLink>
      <NavLink to={"/product"} style={({isActive})=>{return isActive ?{color:"white"}:{color:"blue"}}} >Product</NavLink>
      <NavLink to={"/login"} style={({isActive})=>{return isActive ?{color:"white"}:{color:"blue"}}}>Login</NavLink>
      <NavLink to={"/addprduct"} style={({isActive})=>{return isActive ?{color:"white"}:{color:"blue"}}}>Add Product </NavLink>
    
    </div>
  );  
};

export default Navbar;
