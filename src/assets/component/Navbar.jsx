import React from "react";
import Logo from "./Logoo";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex md:flex-row w-full flex-col  md:p-[10px] justify-between items-center ">
      <Logo />
      <div className="flex  list-none  gap-5">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/manage-event">
          <li>Create Event</li>
        </Link>
        <li>Location</li>
      </div>
      <div className=" gap-5 flex flex-col md:flex-row items-center">
        <Link to="/sign-in">
          <div className="bg-white text-center w-full md:w-[100px] rounded-2xl ">
            <button>Log in</button>
          </div>
        </Link>
        <Link to="/sign-up">
          <div className=" bg-[#3366FF] w-full  md:w-[150px] text-white rounded-xl text-center p-[5px]">
            <button>Sign Up</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
