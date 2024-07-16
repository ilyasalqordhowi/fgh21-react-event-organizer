import React from "react";
import Logo from "./Logoo";

function Navbar() {
  return (
    <div className="flex justify-between items-center w-full">
      <Logo />
      <div className="flex list-none  gap-5">
        <li>Home</li>
        <li>Create Event</li>
        <li>Location</li>
      </div>
      <div className="flex gap-5 w-[226px] items-center">
        <div className="bg-white rounded-2xl w-[169px]">
          <button>Log in</button>
        </div>
        <div className=" bg-[#3366FF] text-white rounded-xl text-center p-[5px] w-[169px]">
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
