import React from "react";
import Logo from "./Logoo";
import Profile from "../img/profile.png";
import { Link } from "react-router-dom";

function NavbarProfile() {
  return (
    <div className="flex justify-between items-center w-full">
      <Logo />
      <div className="flex list-none  gap-5">
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Create Event</li>
        <li>Location</li>
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
