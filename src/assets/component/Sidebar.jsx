import React from "react";

import ProfileOne from "../img/profile.png";
import { FaUser } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { FaArrowRightFromBracket } from "react-icons/fa6";
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
        <Link>
          <div className="flex hover:text-blue-700 items-center  gap-[25px]">
            <div className="bg-[#C1C5D0] w-[40px]  p-[10px] justify-center  flex items-center rounded-full">
              <FaUser />
            </div>
            <div>Profile</div>
          </div>
        </Link>
        <div className="flex flex-col  ml-[49px] gap-[32px]">
          <div className="flex hover:text-blue-700 line-through relative items-center gap-[20px] ">
            <FaCreditCard />
            <div>Card</div>
          </div>
          <Link to="/profile">
            <div className="flex hover:text-blue-700  gap-[20px]">
              <FaPenToSquare />
              <div>Edit Profile</div>
            </div>
          </Link>
          <Link to="/change-password">
            <div className="flex hover:text-blue-700 gap-[20px]">
              <FaLock />
              <div>Change Password</div>
            </div>
          </Link>
        </div>
        <Link to="/manage-event">
          <div className="flex hover:text-blue-700  gap-[20px]">
            <FaCirclePlus />
            <div>Create Event</div>
          </div>
        </Link>
        <Link to="/my-booking">
          <div className="flex hover:text-blue-700  gap-[20px]">
            <FaListCheck />
            <div>My Booking</div>
          </div>
        </Link>
        <Link to="/my-wihslist">
          <div className="flex hover:text-blue-700  gap-[20px]">
            <FaHeart />
            <div>My Wishlist</div>
          </div>
        </Link>
        <div className="flex hover:text-blue-700  gap-[20px]">
          <FaGear />
          <div>Settings</div>
        </div>
        <div className="flex hover:text-red-700  gap-[20px]">
          <FaArrowRightFromBracket />
          <div>Logout</div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
