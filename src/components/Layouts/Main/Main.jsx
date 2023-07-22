import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";



const Main = () => {
  return (
    <div>
      <div className="mx-auto container">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-392px)]">
        <Outlet></Outlet>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
