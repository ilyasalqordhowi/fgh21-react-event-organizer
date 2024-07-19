import React from "react";
import SidebarOne from "../img/sidebar1.png";
import SidebarTwo from "../img/sidebar2.png";
import SidebarThree from "../img/sidebar3.png";
import SidebarFour from "../img/sidebar4.png";
import SidebarFive from "../img/sidebar5.png";
import SidebarSix from "../img/sidebar6.png";
import SidebarSeven from "../img/sidebar7.png";
import SidebarEight from "../img/sidebar8.png";
import SidebarNine from "../img/sidebar9.png";
import ProfileOne from "../img/profile.png";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="md:flex flex-col hidden w-[242px] h-[508px] w-[242px] h-[508px]">
      <div className="flex text-center gap-[15px]">
        <img className="w-[55px] h-[55px]" src={ProfileOne}></img>
        <div>
          <h2>Jhon Tomson</h2>
          <p className="text-[12px] text-[#373A42BF]">Entrepreneur, ID</p>
        </div>
      </div>
      <div className="flex flex-col gap-[30px] mt-[50px]">
        <Link to="/profile">
          <div className="flex hover:text-blue-700  gap-[25px]">
            <img src={SidebarOne}></img>
            <div>Profile</div>
          </div>
        </Link>
        <div className="flex flex-col  ml-[49px] gap-[32px]">
          <div className="flex hover:text-blue-700 line-through relative items-center gap-[20px] ">
            <img src={SidebarTwo}></img>
            <div>Card</div>
          </div>
          <div className="flex hover:text-blue-700  gap-[20px]">
            <img src={SidebarThree}></img>
            <div className="text-blue-500">Edit Profile</div>
          </div>
          <Link to="/change-password">
            <div className="flex hover:text-blue-700 gap-[20px]">
              <img src={SidebarFour}></img>
              <div>Change Password</div>
            </div>
          </Link>
        </div>
        <Link to="/manage-event">
          <div className="flex hover:text-blue-700  gap-[20px]">
            <img src={SidebarNine}></img>
            <div>Create Event</div>
          </div>
        </Link>
        <Link to="/my-booking">
          <div className="flex hover:text-blue-700  gap-[20px]">
            <img src={SidebarFive}></img>
            <div>My Booking</div>
          </div>
        </Link>
        <Link to="/my-wihslist">
          <div className="flex hover:text-blue-700  gap-[20px]">
            <img src={SidebarSix}></img>
            <div>My Wishlist</div>
          </div>
        </Link>
        <div className="flex hover:text-blue-700  gap-[20px]">
          <img src={SidebarSeven}></img>
          <div>Settings</div>
        </div>
        <div className="flex hover:text-blue-700  gap-[20px]">
          <img src={SidebarEight}></img>
          <div className="text-red-500">Logout</div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
