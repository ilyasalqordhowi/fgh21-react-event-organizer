import React, { useEffect } from "react";
import Logo from "./Logoo";
import { FaBars } from "react-icons/fa";
import { Link, ScrollRestoration } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/reducers/auth";

import User from "../img/user.png";
import Sidebar from "./Sidebar";

function Navbar() {
  const [navbar, setNavbar] = React.useState(true);
  const [sideBar, setSideBar] = React.useState(true);
  const profile = useSelector((state) => state.profile.data);
  const token = useSelector((state) => state.auth.token);
  function btnNav() {
    if (navbar === true) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  }
  function btnSideBar() {
    if (sideBar === true) {
      setSideBar(false);
    } else {
      setSideBar(true);
    }
  }

  return (
    <div className="flex md:flex-row text-[#E4F1FF] bg-[#9400FF] flex-col justify-between md:p-[10px]  ">
      <div className="flex items-center justify-between ">
        <Logo />
        <button className="md:hidden" type="button" onClick={btnNav}>
          <FaBars />
        </button>
      </div>
      <div className={navbar ? "hidden md:flex" : ""}>
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
      <div className="flex">
        {token === null ? (
          <div className=" gap-5 md:flex w-full  flex-col md:flex-row items-center">
            <Link to="/sign-in">
              <div className="bg-[#FFFBF5] text-center text-black font-bold p-[10px]  md:w-[100px] md:rounded-2xl ">
                <button>Log in</button>
              </div>
            </Link>
            <Link to="/sign-up">
              <div className=" bg-[#3366FF] w-full  md:w-[150px] font-bold  text-white md:rounded-2xl text-center p-[10px]">
                <button>Sign Up</button>
              </div>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col justify-between w-full pl-2">
            <div className="flex items-center justify-between w-full ">
              <div className="flex  items-center pr-12">
                <Link to="/editProfile">
                  <div className="flex gap-5 justify-start items-center">
                    <img
                      className="w-20 rounded-full border-blue-950 border-[5px]"
                      src={
                        profile.profile?.picture === null
                          ? User
                          : profile.profile?.picture
                      }
                    ></img>
                    <div>{profile.profile?.full_name}</div>
                  </div>
                </Link>
              </div>
              <button className="md:hidden" type="button" onClick={btnSideBar}>
                <FaBars />
              </button>
            </div>
            <div className="md:hidden">
              <div className={sideBar ? "hidden md:hidden" : ""}>
                <Sidebar />
              </div>
            </div>
          </div>
        )}
      </div>
      <ScrollRestoration />
    </div>
  );
}
export default Navbar;
