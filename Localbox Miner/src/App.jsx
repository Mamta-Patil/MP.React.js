import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { themeContext } from "./context/Themecontext";
import Theme from "./component/Theme";

export function App() {
  const { setthemefuntion, theme } = useContext(themeContext);
  return (
    <>
      <div style={{padding:"5%", backgroundColor: theme == "light" ? "black" : "white" ,color:theme=="light"?"white":"black"}}>
        <Theme />
        <button
          onClick={setthemefuntion}
          style={{ backgroundColor: theme == "light" ? "black" : "white",color:theme=="light"?"white":"black"}}
        >
          Change Theme
        </button>
      </div>
    </>
  );
}
