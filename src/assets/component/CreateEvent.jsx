import React from "react";
import NavbarProfile from "./NavbarProfile";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function CreateEvent() {
  return (
    <div className="">
      <NavbarProfile />
      <div className="flex relative  md:p-[50px] bg-[#F4F7FF]">
        <div
          className="flex  md:w-
        [242px] h-[508px]  h-[508px]"
        >
          <Sidebar />
        </div>
        <div className="flex flex-col w-full gap-[46px] h-auto md:p-[40px] bg-white md:rounded-[20px] ">
          <div className="md:flex md:mt-[30px] mt-[100px]  justify-between">
            <div className="font-bold text-[20px]">Manage Event</div>

            <div className="md:flex w-[100px]  items-center rounded-[15px] p-[10px] bg-[#EAF1FF] text-blue-500">
              <button>Create</button>
            </div>
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
            <div className="md:flex hidden gap-[25px]">
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
            <hr className="md:flex hidden"></hr>
            <div className="md:flex hidden gap-[25px]">
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
            <hr className="md:flex hidden"></hr>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:bg-[#F4F7FF] gap-[144px]">
        <Footer />
        <div>© 2020 Wetick All Rights Reserved</div>
      </div>
      <div className="flex justify-center absolute top-[0] left-[0] right-[0] items-center h-[100vh] bg-black/50">
        <div className="w-[1135px] h-auto bg-white p-[30px] rounded-[30px]">
          <div className="font-bold text-[20px]">Create Event</div>
          <div className="flex gap-[64px] p-[30px]">
            <div className=" w-[50%]">
              <div>Name</div>
              <input
                className="border w-full p-[10px] rounded-[15px]"
                placeholder="Input Name Event ..."
              ></input>
            </div>
            <div className=" w-[50%]">
              <div>Category</div>
              <input
                className="border w-full p-[10px] rounded-[15px]"
                placeholder="Select Category"
              ></input>
            </div>
          </div>
          <div className="flex gap-[64px] p-[30px]">
            <div className=" w-[50%]">
              <div>Location</div>
              <input
                className="border w-full p-[10px] rounded-[15px]"
                placeholder="Select Location"
              ></input>
            </div>
            <div className=" w-[50%]">
              <div>Date Time Show</div>
              <input
                className="border w-full p-[10px] rounded-[15px]"
                placeholder="01/01/2022"
              ></input>
            </div>
          </div>
          <div className="flex gap-[64px] p-[30px]">
            <div className=" w-[50%]">
              <div>Price</div>
              <input
                className="border w-full p-[10px] rounded-[15px]"
                placeholder="Input Price ..."
              ></input>
            </div>
            <div className=" w-[50%]">
              <div>Image</div>
              <input
                className="border w-full p-[10px] rounded-[15px]"
                placeholder="Chose File "
              ></input>
            </div>
          </div>
          <div className="flex gap-[64px] p-[30px]">
            <div className=" w-full">
              <div>Detail</div>
              <input
                className="border w-full p-[10px] rounded-[15px]"
                placeholder="Input Detail "
              ></input>
            </div>
          </div>
          <Link to="/manage-event">
            <div className="bg-blue-500 text-[20px]  w-[200px] flex justify-center text-white rounded-[15px] p-[10px] ">
              <button>Save</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;
