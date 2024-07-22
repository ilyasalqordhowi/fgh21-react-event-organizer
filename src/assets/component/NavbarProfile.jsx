import React from "react";
import Logo from "./Logoo";
import { FaBars } from "react-icons/fa";
import Profile from "../img/profile.png";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function NavbarProfile() {
  const [navbar, setNavbar] = React.useState(true);
  function btnNav() {
    if (navbar === true) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  }

  return (
    <div className="flex md:flex-row bg-white flex-col justify-between md:p-[10px]  ">
      <div className="flex items-center justify-between ">
        <Logo />
        <button className="md:hidden" type="button" onClick={btnNav}>
          <FaBars />
        </button>
      </div>
      <div className={navbar ? "hidden md:flex   " : ""}>
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
      </div>
      <div className={navbar ? "hidden md:flex  " : ""}>
        <div className="flex  justify-between">
          <Link to="/profile">
            <div className="flex gap-5 w-[226px] items-center">
              <img src={Profile}></img>
              <div>Jhon Tomson</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NavbarProfile;
