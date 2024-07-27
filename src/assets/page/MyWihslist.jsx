import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import Date from "../img/date.png";
import { Link } from "react-router-dom";
import HeartBlue from "../img/heart2.png";

function MyWihslist() {
  return (
    <div className="">
      <Navbar />
      <div className="flex  md:p-[50px] bg-[#27005D]">
        <div className="flex md:w-[242px] h-[508px]  h-[508px]">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full gap-[46px] h-auto p-[40px] bg-[#AED2FF] md:rounded-[20px] ">
          <div className="md:flex justify-between">
            <div className="font-bold text-[20px]">My Booking</div>
            <div className="flex  items-center w-[100px] rounded-[15px] p-[10px] bg-[#27005D] text-blue-500">
              <img src={Date}></img>
              <div>March</div>
            </div>
          </div>
          <div className="flex flex-col gap-[25px]">
            <div className="flex gap-[25px]">
              <div className="bg-white shadow-lg shadow-black-500/50 p-[14px] w-[50px] h-[75px] text-[#C1C5D0] flex flex-col items-center justify-center rounded-[7px] ">
                <h1 className="text-yellow-500">15</h1>
                <p>Wed</p>
              </div>
              <div className="flex flex-col w-full">
                <div className="text-[24px]">Sights & Sounds Exhibition</div>
                <div className="text-white text-[12px]">Jakarta, Indonesia</div>
                <div className="text-white text-[12px]">
                  Wed, 15 Nov, 4:00 PM
                </div>
              </div>
              <div>
                <img src={HeartBlue}></img>
              </div>
            </div>
            <hr></hr>
            <div className="flex gap-[25px]">
              <div className="bg-white shadow-lg shadow-black-500/50 p-[14px] w-[50px] h-[75px] text-[#C1C5D0] flex flex-col items-center justify-center rounded-[7px] ">
                <h1 className="text-yellow-500">15</h1>
                <p>Wed</p>
              </div>
              <div className="flex flex-col w-full">
                <div className="text-[24px]">Sights & Sounds Exhibition</div>
                <div className="text-white text-[12px]">Jakarta, Indonesia</div>
                <div className="text-white text-[12px]">
                  Wed, 15 Nov, 4:00 PM
                </div>
              </div>
              <div>
                <img src={HeartBlue}></img>
              </div>
            </div>
            <hr className="md:flex hidden"></hr>
            <div className="md:flex hidden gap-[25px]">
              <div className="bg-white shadow-lg shadow-black-500/50 p-[14px] w-[50px] h-[75px] text-[#C1C5D0] flex flex-col items-center justify-center rounded-[7px] ">
                <h1 className="text-yellow-500">15</h1>
                <p>Wed</p>
              </div>
              <div className="flex flex-col w-full">
                <div className="text-[24px]">Sights & Sounds Exhibition</div>
                <div className="text-white text-[12px]">Jakarta, Indonesia</div>
                <div className="text-white text-[12px]">
                  Wed, 15 Nov, 4:00 PM
                </div>
              </div>
              <div>
                <img src={HeartBlue}></img>
              </div>
            </div>
            <hr className="md:flex hidden"></hr>
            <div className="md:flex hidden gap-[25px]">
              <div className="bg-white shadow-lg shadow-black-500/50 p-[14px] w-[50px] h-[75px] text-[#C1C5D0] flex flex-col items-center justify-center rounded-[7px] ">
                <h1 className="text-yellow-500">15</h1>
                <p>Wed</p>
              </div>
              <div className="flex flex-col w-full">
                <div className="text-[24px]">Sights & Sounds Exhibition</div>
                <div className="text-white text-[12px]">Jakarta, Indonesia</div>
                <div className="text-white text-[12px]">
                  Wed, 15 Nov, 4:00 PM
                </div>
              </div>
              <div>
                <img src={HeartBlue}></img>
              </div>
            </div>
            <hr></hr>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#27005D] gap-[144px]">
        <Footer />
        <div>© 2020 Wetick All Rights Reserved</div>
      </div>
    </div>
  );
}
export default MyWihslist;
