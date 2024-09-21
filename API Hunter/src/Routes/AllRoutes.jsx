import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Dashboard from "./Dashboard"
import SingleProductPage from "./SingleProductPage";
import PrivateRoute from "../Components/PrivateRoute";

function AllRoutes() {
  return (
    // <div>
<Routes>
  <Route path={"/"} element={<Home />}></Route>
  <Route path={"/login"} element={<Login />}></Route>
  <Route path={"/dashboard"} element={
    <PrivateRoute>
       <Dashboard />
    </PrivateRoute>
  } ></Route>  
  <Route path={"/products/:id"} element={
    <PrivateRoute>
       <SingleProductPage />
  </PrivateRoute>
} ></Route>
</Routes>
    // </div>
  );
}
export default AllRoutes;