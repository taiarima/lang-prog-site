import React from "react";

const BottomBar = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full h20 px-4 py-4 z-50 bg-gray-800 absolute bottom-0">
      <div className="text-white flex justify-between w-full pl-20">
        <h2>About</h2>
        <h2>Contact</h2>
        <h2>Privacy Policy</h2>
        <h2>Copyright Tai Arima 2023</h2>
      </div>
    </div>
  );
};

export default BottomBar;
