import React from "react";
import Navbar from "../components/ui/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <br />
      <Outlet />
    </>
  );
};

export default Layout;
