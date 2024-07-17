import React from "react";
import Logo from "./Logoo";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center w-full">
      <Logo />
      <div className="flex list-none  gap-5">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/manage-event">
          <li>Create Event</li>
        </Link>
        <li>Location</li>
      </div>
      <div className="flex gap-5 w-[226px] items-center">
        <div className="bg-white rounded-2xl w-[169px]">
          <Link to="/Login">
            <button>Log in</button>
          </Link>
        </div>
        <div className=" bg-[#3366FF] text-white rounded-xl text-center p-[5px] w-[169px]">
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
