import React from "react";
import NavbarProfile from "../component/NavbarProfile";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import { Link } from "react-router-dom";

function ChangePassword() {
  return (
    <div className="">
      <NavbarProfile />
      <div className="flex md:p-[50px] bg-[#F4F7FF]">
        <div className="flex w-[242px] h-[508px] w-[242px] h-[508px]">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full gap-[46px] h-auto p-[40px] bg-white rounded-[20px] ">
          <div className="font-bold text-[20px]">Change Password</div>
          <div className="w-full flex  md:flex gap-[40px]">
            <div className="md:flex hidden flex-col gap-[50px]">
              <label>Old Password</label>
              <label>New Password</label>
              <label>Confirm Password</label>
            </div>
            <div className="flex w-[619px] md:w-full flex-col gap-[33px] ">
              <label className="md:hidden">Old Password</label>
              <input
                placeholder="Input Old Password ..."
                className="border  md:w-[619px] p-[6px] rounded-[10px]"
              ></input>
              <label className="md:hidden">New Password</label>
              <input
                placeholder="input New Password"
                className="border md:w-[619px] p-[6px] rounded-[10px]"
              ></input>
              <label className="md:hidden">Confirm Password</label>
              <input
                placeholder="Input Confirm Password ..."
                className="border md:w-[619px] p-[6px] rounded-[10px]"
              ></input>
            </div>
          </div>
          <div className="bg-blue-500 text-white text-[20px] p-[10px] rounded-[10px] flex justify-center items-center">
            <button>Update</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:bg-[#F4F7FF] gap-[144px]">
        <Footer />
        <div>© 2020 Wetick All Rights Reserved</div>
      </div>
    </div>
  );
}
export default ChangePassword;
