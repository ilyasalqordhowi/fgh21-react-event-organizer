import React from "react";
import Navbar from "../component/Navbar";
import Buble from "../img/buble.png";
import People from "../img/people.png";
import EventOne from "../img/event1.png";

function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="items-center bg-[#3366FF] flex justify-end mb-[175px] ">
          {/* <img src={Buble}></img> */}
          <img src={People}></img>
        </div>
        <div className="mb-[50px]">
          <div className="flex items-center flex-col gap-[25px] mb-[50px]">
            <div className="flex font-bold gap-2 p-[10px] text-[12px] text-[#FF3D71] bg-[#FF3D7140] h-[35px] w-[130px] justify-center rounded-2xl">
              <div>——</div>
              <div>EVENT</div>
            </div>
            <div className="font-bold text-[50px]">Events For You</div>
          </div>
          <div className="flex w-full gap-[60px] text-[#C1C5D0] text-center justify-center">
            <div className="flex flex-col list-none">
              <li>13</li>
              <li>Mon</li>
            </div>
            <div className="flex flex-col list-none">
              <li>14</li>
              <li>Tue</li>
            </div>
            <div className="flex flex-col list-none text-[#FF8900] h-[80px] border-solid border-2 border-[#FF8900] p-[10px] rounded-2xl">
              <li>15</li>
              <li>Wed</li>
              <li>•</li>
            </div>
            <div className="flex flex-col list-none">
              <li>16</li>
              <li>Thu</li>
            </div>
            <div className="flex flex-col list-none">
              <li>17</li>
              <li>Fri</li>
            </div>
          </div>
        </div>
        <div>
          <div className="m-[30px]">
            <img className="rounded-2xl relative" src={EventOne}></img>
            <div className="absolute">
              <p>Wed, 15 Nov, 4:00 PM</p>
              <h1>Sights & Sounds Exhibition</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
