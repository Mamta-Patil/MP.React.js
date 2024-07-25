import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./component/style.css"
import Navbar from "./component/Navbar";
import {Allroutes} from "./component/Allroutes";
import Addproduct from "./component/Addproduct";
function App() {
  return (
    <>
      <Navbar />
      <Allroutes />
    </>
  );
}

export default App;
