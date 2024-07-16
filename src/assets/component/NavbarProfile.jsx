import React from "react";
import Logo from "./Logoo";
import Profile from "../img/profile.png";

function NavbarProfile() {
  return (
    <div className="flex justify-between items-center w-full">
      <Logo />
      <div className="flex list-none  gap-5">
        <li>Home</li>
        <li>Create Event</li>
        <li>Location</li>
      </div>
      <div className="flex gap-5 w-[226px] items-center">
        <img src={Profile}></img>
        <div>Jhon Tomson</div>
      </div>
    </div>
  );
}
export default NavbarProfile;
