import React from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full h20 px-4 py-4 fixed bg-gray-800">
      <div className="flex items-center">
        <img src={logo} className="object-scale-down h-12 w-12"></img>
        <h1 className="text-4xl px-4 ml-15 text-white font-custom">
          Lang Prog
        </h1>
      </div>
      <div>
        <h2 className="text-white">Log in</h2>
      </div>
    </div>
  );
};

export default NavBar;
