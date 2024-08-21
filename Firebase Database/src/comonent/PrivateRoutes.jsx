import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Service/Firebase";

const PrivateRoutes = ({ children }) => {
  const [user] = useAuthState(auth);
  console.log(user);
  if (!user) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default PrivateRoutes;
