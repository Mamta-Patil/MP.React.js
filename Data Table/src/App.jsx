import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./component/style.css"
// import Navbar from './component/Navbar'
// import Allroutes from './component/Allroutes'
// import {Product} from './component/Product'
import Navbar from "./component/Navbar";
import {Allroutes} from "./component/Allroutes";
import  Product  from "./component/Product";
function App() {
  return (
    <>
      <Navbar />
      <Allroutes />
    </>
  );
}

export default App;
