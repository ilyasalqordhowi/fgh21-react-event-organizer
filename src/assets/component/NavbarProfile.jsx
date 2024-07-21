import React from "react";
import Logo from "./Logoo";
import { FaBars } from "react-icons/fa";
import Profile from "../img/profile.png";
import { Link } from "react-router-dom";

function NavbarProfile() {
  return (
    <div className="flex  md:flex-row bg-white flex-col w-full gap-[20px] md:p-[10px] items-center md:justify-between  ">
      <div className="flex  md:w-auto md:flex-row items-center w-full justify-between">
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
      <Link to="/profile">
        <div className="flex gap-5 w-[226px] items-center">
          <img src={Profile}></img>
          <div>Jhon Tomson</div>
        </div>
      </Link>
    </div>
  );
}
export default NavbarProfile;
