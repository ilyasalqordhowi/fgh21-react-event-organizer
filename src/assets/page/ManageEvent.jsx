import React from "react";
import NavbarProfile from "../component/NavbarProfile";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import { Link } from "react-router-dom";

function ManageEvent() {
  return (
    <div className="">
      <NavbarProfile />
      <div className="flex   p-[50px] bg-[#F4F7FF]">
        <div className="flex w-[242px] h-[508px] w-[242px] h-[508px]">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full gap-[46px] h-auto p-[40px] bg-white rounded-[20px] ">
          <div className="flex justify-between">
            <div className="font-bold text-[20px]">Manage Event</div>
            <Link to="/create-event">
              <div className="flex  items-center rounded-[15px] p-[10px] bg-[#EAF1FF] text-blue-500">
                <button>Create</button>
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-[25px]">
            <div className="flex gap-[25px]">
              <div className="bg-white shadow-lg shadow-black-500/50 p-[14px] w-[50px] h-[75px] text-[#C1C5D0] flex flex-col items-center justify-center rounded-[7px] ">
                <h1 className="text-yellow-500">15</h1>
                <p>Wed</p>
              </div>
              <div className="flex flex-col">
                <div className="text-[24px] mb-[15px]">
                  Sights & Sounds Exhibition
                </div>
                <div className="text-gray-400 text-[12px]">
                  Jakarta, Indonesia
                </div>
                <div className="text-gray-400 text-[12px]">
                  Wed, 15 Nov, 4:00 PM
                </div>
                <div className="flex mt-[10px] gap-[14px]">
                  <div className="text-[#3366FF]  text-[12px]">Detail</div>
                  <div className="text-[#3366FF]  text-[12px]">Update</div>
                  <div className="text-[#3366FF]  text-[12px]">Delete</div>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="flex gap-[25px]">
              <div className="bg-white shadow-lg shadow-black-500/50 p-[14px] w-[50px] h-[75px] text-[#C1C5D0] flex flex-col items-center justify-center rounded-[7px] ">
                <h1 className="text-yellow-500">15</h1>
                <p>Wed</p>
              </div>
              <div className="flex flex-col">
                <div className="text-[24px] mb-[15px]">
                  Sights & Sounds Exhibition
                </div>
                <div className="text-gray-400 text-[12px]">
                  Jakarta, Indonesia
                </div>
                <div className="text-gray-400 text-[12px]">
                  Wed, 15 Nov, 4:00 PM
                </div>
                <div className="flex mt-[10px] gap-[14px]">
                  <div className="text-[#3366FF]  text-[12px]">Detail</div>
                  <div className="text-[#3366FF]  text-[12px]">Update</div>
                  <div className="text-[#3366FF]  text-[12px]">Delete</div>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="flex gap-[25px]">
              <div className="bg-white shadow-lg shadow-black-500/50 p-[14px] w-[50px] h-[75px] text-[#C1C5D0] flex flex-col items-center justify-center rounded-[7px] ">
                <h1 className="text-yellow-500">15</h1>
                <p>Wed</p>
              </div>
              <div className="flex flex-col">
                <div className="text-[24px] mb-[15px]">
                  Sights & Sounds Exhibition
                </div>
                <div className="text-gray-400 text-[12px]">
                  Jakarta, Indonesia
                </div>
                <div className="text-gray-400 text-[12px]">
                  Wed, 15 Nov, 4:00 PM
                </div>
                <div className="flex mt-[10px] gap-[14px]">
                  <div className="text-[#3366FF]  text-[12px]">Detail</div>
                  <div className="text-[#3366FF]  text-[12px]">Update</div>
                  <div className="text-[#3366FF]  text-[12px]">Delete</div>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="flex gap-[25px]">
              <div className="bg-white shadow-lg shadow-black-500/50 p-[14px] w-[50px] h-[75px] text-[#C1C5D0] flex flex-col items-center justify-center rounded-[7px] ">
                <h1 className="text-yellow-500">15</h1>
                <p>Wed</p>
              </div>
              <div className="flex flex-col">
                <div className="text-[24px] mb-[15px]">
                  Sights & Sounds Exhibition
                </div>
                <div className="text-gray-400 text-[12px]">
                  Jakarta, Indonesia
                </div>
                <div className="text-gray-400 text-[12px]">
                  Wed, 15 Nov, 4:00 PM
                </div>
                <div className="flex mt-[10px] gap-[14px]">
                  <div className="text-[#3366FF]  text-[12px]">Detail</div>
                  <div className="text-[#3366FF]  text-[12px]">Update</div>
                  <div className="text-[#3366FF]  text-[12px]">Delete</div>
                </div>
              </div>
            </div>
            <hr></hr>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#F4F7FF] gap-[144px]">
        <Footer />
        <div>© 2020 Wetick All Rights Reserved</div>
      </div>
    </div>
  );
}
export default ManageEvent;
