import React from "react";
import { Link } from "react-router-dom";

function CreateEvent() {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-black/50">
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
          <div className="bg-blue-500 text-[20px]  w-[200px] flex justify-center text-white rounded-[15px] p-[20px] ">
            <button>Save</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CreateEvent;
