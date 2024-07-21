import React from "react";
import Logo from "./Logoo";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex md:flex-row  flex-col gap-[20px] md:p-[10px] justify-between  ">
      <div className="flex items-center  justify-between">
        <Logo />
        <button className="md:hidden">
          <FaBars />
        </button>
      </div>
      <div className="md:flex md:flex-row list-none flex flex-col items-center gap-5">
        <Link to="/">
          <li className="hover:text-blue-400 hover:underline flex gap-[10px]">
            Home
          </li>
        </Link>
        <Link to="/manage-event">
          <li className="hover:text-blue-400 hover:underline flex gap-[10px]">
            Create Event
          </li>
        </Link>
        <li className="hover:text-blue-400 hover:underline flex gap-[10px]">
          Location
        </li>
      </div>
      <div className=" gap-5 md:flex w-full md:w-auto flex-col md:flex-row items-center">
        <Link to="/sign-in">
          <div className="bg-white text-center  md:w-[100px] md:rounded-2xl ">
            <button>Log in</button>
          </div>
        </Link>
        <Link to="/sign-up">
          <div className=" bg-[#3366FF] w-full  md:w-[150px] text-white rounded-[5px] text-center p-[5px]">
            <button>Sign Up</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
