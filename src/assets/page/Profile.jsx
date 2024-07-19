import React from "react";
import { Link } from "react-router-dom";
import NavbarProfile from "../component/NavbarProfile";
import ProfilePhoto from "../img/profile-photo.png";
import Sidebar from "../component/Sidebar";
import Footer from "../component/Footer";
import { FaChevronDown } from "react-icons/fa6";

function Profile() {
  return (
    <div className="">
      <NavbarProfile />
      <div className="flex  md:p-[50px] bg-[#F4F7FF]">
        <div className="md:flex md:w-[242px] h-[508px] h-[508px]">
          <Sidebar />
        </div>
        <div className="md:flex md:flex-row flex-row-reverse  justify-center flex w-full gap-[46px] h-auto md:p-[100px] bg-white rounded-[20px] ">
          <div className="w-[60%]   md:pt-[0]  pt-[50px] gap-[10px]">
            <h1 className="font-bold  text-[30px]">Profile</h1>
            <div className="md:hidden justify-center  flex gap-[200px]">
              <img src={ProfilePhoto}></img>
            </div>
            <div className="flex flex-col gap-[50px] mt-[50px]">
              <div className="md:flex w-[70%] justify-between">
                <div>Name</div>
                <input
                  placeholder="Jhon Tomson"
                  type="name"
                  className="border border-[#C1C5D0] p-[5px] rounded-[5px]"
                ></input>
              </div>
              <div className="md:flex w-[70%]  justify-between">
                <div>Username</div>
                <div className="flex items-start">
                  <div className="flex gap-[15px]">
                    <div>@jhont0</div>
                    <div className="text-blue-400">Edit</div>
                  </div>
                </div>
              </div>
              <div className="md:flex w-[70%]  justify-between">
                <div>Email</div>
                <div className="flex items-start">
                  <div className="flex gap-[15px]">
                    <div>jhont0@mail.com</div>
                    <div className="text-blue-400">Edit</div>
                  </div>
                </div>
              </div>
              <div className="md:flex w-[70%]  justify-between">
                <div>Phone Number</div>
                <div className="flex items-start">
                  <div className="flex gap-[15px]">
                    <div>081234567890</div>
                    <div className="text-blue-400">Edit</div>
                  </div>
                </div>
              </div>
              <div className="md:flex w-[70%] justify-between">
                <div>Gender</div>
                <div className="flex gap-[40px]">
                  <div className="flex">
                    <input type="radio"></input>
                    <div>Male</div>
                  </div>
                  <div className="flex">
                    <input type="radio"></input>
                    <div>Female</div>
                  </div>
                </div>
              </div>
              <div className="md:flex w-[70%] justify-between">
                <div>Profession</div>
                <div className=" flex  items-center justify-end p-[30p] ">
                  <input
                    type=""
                    className="border border-[#C1C5D0] rounded-[5px] p-[5px]"
                    placeholder="Entrepreneur"
                  ></input>
                  <FaChevronDown className="text-gray-400" />
                </div>
              </div>
              <div className="md:flex w-[70%] justify-between">
                <div>Nationality</div>
                <div className=" flex items-center justify-end p-[30p] ">
                  <input
                    type=""
                    className="border border-[#C1C5D0] rounded-[5px] p-[5px]"
                    placeholder="Indonesia"
                  ></input>
                  <FaChevronDown className="text-gray-400" />
                </div>
              </div>
              <div className="md:flex w-[70%] justify-between">
                <div> Birthday Date</div>
                <div className="flex items-start">
                  <div className="flex gap-[15px]">
                    <div>24/10/2000</div>
                    <div className="text-blue-400">Edit</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[67px] bg-blue-500 w-[315px] text-white font-bold text-[16px] flex items-center justify-center rounded-[15px] p-[17px]">
              <button>Save</button>
            </div>
          </div>
          <div className="md:flex flex-col items-center  hidden w-[40%]">
            <div className="flex gap-[200px]">
              <img src={ProfilePhoto}></img>
            </div>
            <div>
              <div className="mt-[50px] bg-white w-[315px] font-bold border-solid border-2 border-sky-500 flex items-center justify-center text-blue-700 rounded-[15px] p-[20px]">
                <button>Choose Photo</button>
              </div>
              <div>
                <div>Image size: max, 2 MB</div>
                <div>Image formats: .JPG, .JPEG, .PNG</div>
              </div>
            </div>
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
export default Profile;
