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
  const [sidebar, setSidebar] = React.useState(true);
  function btnsidebar() {
    if (sidebar === true) {
      setSidebar(false);
    } else {
      setSidebar(true);
    }
  }
  return (
    <div className="flex md:flex-row bg-white flex-col md:gap-[500px] md:p-[10px]  ">
      <div className="flex items-center justify-between ">
        <Logo />
        <button className="md:hidden" type="button" onClick={btnNav}>
          <FaBars />
        </button>
      </div>
      <div className={navbar ? "hidden md:flex  gap-[350px] " : ""}>
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
        <div className="flex  justify-between">
          <Link to="/profile">
            <div className="flex gap-5 w-[226px] items-center">
              <img src={Profile}></img>
              <div>Jhon Tomson</div>
            </div>
          </Link>
          <button className="md:hidden" type="button" onClick={btnsidebar}>
            <FaBars />
          </button>
        </div>
      </div>
    </div>
  );
}
export default NavbarProfile;
