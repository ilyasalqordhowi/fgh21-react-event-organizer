import React from "react";
import NavbarProfile from "../component/NavbarProfile";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import { Link } from "react-router-dom";

function ChangePassword() {
  return (
    <div className="">
      <NavbarProfile />
      <div className="flex   p-[50px] bg-[#F4F7FF]">
        <div className="flex w-[242px] h-[508px] w-[242px] h-[508px]">
          <Sidebar />
        </div>
        <div className="flex w-full gap-[46px] h-auto p-[100px] bg-white rounded-[20px] ">
          <div className="font-bold text-[30px]">Change Password</div>
        </div>
      </div>
      <div className="flex flex-col bg-[#F4F7FF] gap-[144px]">
        <Footer />
        <div>© 2020 Wetick All Rights Reserved</div>
      </div>
    </div>
  );
}
export default ChangePassword;
