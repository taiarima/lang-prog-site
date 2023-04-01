import React from "react";
import MyLangsDropDown from "./MyLangsDropDown";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full h20 px-4 py-4 fixed bg-gray-800">
      <div className="flex items-center">
        <img src={logo} className="object-scale-down h-12 w-12"></img>
        <h1 className="text-4xl px-4 ml-15 text-white font-custom hidden md:flex">
          Lang Prog
        </h1>
      </div>
      <div className="text-white flex justify-between w-full pl-20">
        <h2>My Languages</h2>
        <h2>Calendar</h2>
        <h2>Settings</h2>
        <h2>Log in</h2>
      </div>
    </div>
  );
};

export default NavBar;
