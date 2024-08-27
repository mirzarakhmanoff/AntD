import { useStateValue } from "@/context";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  const [{ token }] = useStateValue();
  console.log(token);
  console.log(token);
  return token ? <Outlet /> : <Navigate replace to={"/login"} />;
};

export default Auth;
