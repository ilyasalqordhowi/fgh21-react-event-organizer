import React from "react";
import Logo from "./Logoo";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [navbar, setNavbar] = React.useState(true);
  function btnNav() {
    if (navbar === true) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  }
  return (
    <div className="flex md:flex-row  flex-col justify-between md:p-[10px]  ">
      <div className="flex items-center justify-between ">
        <Logo />
        <button className="md:hidden" type="button" onClick={btnNav}>
          <FaBars />
        </button>
      </div>
      <div className={navbar ? "hidden md:flex gap-[300px]" : ""}>
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
      <div className={navbar ? "hidden md:flex gap-[300px]" : ""}>
        <div className=" gap-5 md:flex w-full md:w-auto flex-col md:flex-row items-center">
          <Link to="/sign-in">
            <div className="bg-white text-center  md:w-[100px] md:rounded-2xl ">
              <button>Log in</button>
            </div>
          </Link>
          <Link to="/sign-up">
            <div className=" bg-[#3366FF] w-full  md:w-[150px] text-white rounded-2xl text-center p-[5px]">
              <button>Sign Up</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
