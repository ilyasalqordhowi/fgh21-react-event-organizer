import React from "react";
import Navbar from "../component/Navbar";
import Buble from "../img/buble.png";
import People from "../img/people.png";
import EventOne from "../img/event1.png";
import EventTwo from "../img/event2.png";
import PeopleOne from "../img/people1.png";
import PeopleTwo from "../img/people2.png";
import PeopleThree from "../img/people3.png";
import PeopleFour from "../img/people4.png";
import Aceh from "../img/aceh.png";
import Jakarta from "../img/jakarta.png";
import Bali from "../img/bali.png";
import Bandung from "../img/bandung.png";
import Semarang from "../img/semarang.png";
import Solo from "../img/solo.png";
import Yogyakarta from "../img/yogyakarta.png";

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
        <div className="flex h-[500px] gap-[30px] mb-[50px] relative overflow-scroll">
          <div>
            <div className="m-[50px]">
              <img
                className="rounded-[10%] brightness-50 absolute "
                src={EventOne}
              ></img>
              <div className="relative text-white  top-20 p-8 flex flex-col gap-[5px] ">
                <p className="text-[15px]">Wed, 15 Nov, 4:00 PM</p>
                <h1 className="font-bold  text-[30px]">
                  Sights & Sounds
                  <h2>Exhibition</h2>
                </h1>
                <div className="flex mt-[30px] ">
                  <img
                    className="rounded-full w-8 ml-[-10px] border border-slate-300"
                    src={PeopleOne}
                  ></img>
                  <img
                    className="rounded-full w-8 ml-[-10px] border border-slate-300"
                    src={PeopleTwo}
                  ></img>
                  <img
                    className="rounded-full w-8 ml-[-10px] border border-slate-300"
                    src={PeopleThree}
                  ></img>
                  <img
                    className="rounded-full w-8 ml-[-10px] border border-slate-300"
                    src={PeopleFour}
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="m-[50px]">
              <img
                className="rounded-[10%] brightness-50 w-[20%] h-[420px] absolute "
                src={EventTwo}
              ></img>
              <div className="relative text-white  top-20 p-8 flex flex-col gap-[5px] ">
                <p className="text-[15px]">Thu, 16 Nov, 7:00 PM</p>
                <h1 className="font-bold  text-[30px]">
                  See it in Gold
                  <h2>Exhibition</h2>
                </h1>
                <div className="flex mt-[30px] ">
                  <img
                    className="rounded-full w-8 ml-[-10px] border border-slate-300"
                    src={PeopleOne}
                  ></img>
                  <img
                    className="rounded-full w-8 ml-[-10px] border border-slate-300"
                    src={PeopleTwo}
                  ></img>
                  <img
                    className="rounded-full w-8 ml-[-10px] border border-slate-300"
                    src={PeopleThree}
                  ></img>
                  <img
                    className="rounded-full w-8 ml-[-10px] border border-slate-300"
                    src={PeopleFour}
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="m-[50px]">
              <img
                className="rounded-[10%] brightness-50 absolute "
                src={EventOne}
              ></img>
              <div className="relative text-white  top-20 p-8 flex flex-col gap-[5px] ">
                <p className="text-[15px]">Wed, 15 Nov, 4:00 PM</p>
                <h1 className="font-bold  text-[30px]">
                  Sights & Sounds
                  <h2>Exhibition</h2>
                </h1>
                <div className="flex mt-[30px] ">
                  <img
                    className="rounded-full w-8 ml-[-10px] border border-slate-300"
                    src={PeopleOne}
                  ></img>
                  <img
                    className="rounded-full w-8 ml-[-10px] border border-slate-300"
                    src={PeopleTwo}
                  ></img>
                  <img
                    className="rounded-full w-8 ml-[-10px] border border-slate-300"
                    src={PeopleThree}
                  ></img>
                  <img
                    className="rounded-full w-8 ml-[-10px] border border-slate-300"
                    src={PeopleFour}
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="m-[50px]">
              <img
                className="rounded-[10%] brightness-50 w-[20%] h-[420px] absolute "
                src={EventTwo}
              ></img>
              <div className="relative text-white  top-20 p-8 flex flex-col gap-[5px] ">
                <p className="text-[15px]">Wed, 15 Nov, 4:00 PM</p>
                <h1 className="font-bold  text-[30px]">
                  Sights & Sounds
                  <h2>Exhibition</h2>
                </h1>
                <div className="flex mt-[30px] ">
                  <img
                    className="rounded-full w-8 ml-[-10px] border border-slate-300"
                    src={PeopleOne}
                  ></img>
                  <img
                    className="rounded-full w-8 ml-[-10px] border border-slate-300"
                    src={PeopleTwo}
                  ></img>
                  <img
                    className="rounded-full w-8 ml-[-10px] border border-slate-300"
                    src={PeopleThree}
                  ></img>
                  <img
                    className="rounded-full w-8 ml-[-10px] border border-slate-300"
                    src={PeopleFour}
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="m-[50px]">
              <img
                className="rounded-[10%] brightness-50 absolute "
                src={EventOne}
              ></img>
              <div className="relative text-white  top-20 p-8 flex flex-col gap-[5px] ">
                <p className="text-[15px]">Wed, 15 Nov, 4:00 PM</p>
                <h1 className="font-bold  text-[30px]">
                  Sights & Sounds
                  <h2>Exhibition</h2>
                </h1>
                <div className="flex mt-[30px] ">
                  <img
                    className="rounded-full w-8 ml-[-10px] border border-slate-300"
                    src={PeopleOne}
                  ></img>
                  <img
                    className="rounded-full w-8 ml-[-10px] border border-slate-300"
                    src={PeopleTwo}
                  ></img>
                  <img
                    className="rounded-full w-8 ml-[-10px] border border-slate-300"
                    src={PeopleThree}
                  ></img>
                  <img
                    className="rounded-full w-8 ml-[-10px] border border-slate-300"
                    src={PeopleFour}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center  gap-[50px]  justify-center flex mb-[40px]">
          <div className=" ">
            <button className="shadow-black flex rounded-[5px] h-[30px] bg-[#1A3C4414] justify-center w-[50px]">
              ←
            </button>
          </div>
          <div className="bg-blue-600 text-white flex rounded-[5px] h-[30px] justify-center w-[50px]">
            <button>→</button>
          </div>
        </div>
        <div className="bg-blue-600 mb-[175px] w-[1400px] rounded-[30px] flex flex-col ml-[50px] p-[30px] h-auto">
          <div className="flex ml-[90px] font-bold gap-2 p-[10px] text-[12px] text-white bg-sky-400 h-[35px] w-[130px] justify-center rounded-2xl">
            <div>——</div>
            <div>Location</div>
          </div>
          <div className="flex flex-wrap ml-[68px] mb-[50px]  gap-[86px]">
            <div className="w-[280px]  text-[36px] text-white">
              Discover Events Near You
            </div>
            <div>
              <img src={Jakarta}></img>
              <div>Jakarta</div>
            </div>
            <div>
              <img src={Bandung}></img>
              <div>Bandung</div>
            </div>
            <div>
              <img src={Bali}></img>
              <div>Bali</div>
            </div>
            <div>
              <img src={Aceh}></img>
              <div>Aceh</div>
            </div>
            <div>
              <img src={Solo}></img>
              <div>Solo</div>
            </div>
            <div>
              <img src={Yogyakarta}></img>
              <div>Yogyakarta</div>
            </div>
            <div>
              <img src={Semarang}></img>
              <div>Semarang</div>
            </div>
          </div>
          <div className="flex justify-center ">
            <button className="bg-white text-blue-600 w-[200px] p-[10px] rounded-[20px]">
              See All
            </button>
          </div>
        </div>
        <div className="flex items-center flex-col gap-[25px] mb-[50px]">
          <div className="flex font-bold gap-2 p-[10px] text-[12px] text-[#FF3D71] bg-[#FF3D7140] h-[35px] w-[130px] justify-center rounded-2xl">
            <div>——</div>
            <div>CATEGORY</div>
          </div>
          <div className="font-bold text-[50px]">Browse Events By Category</div>
        </div>
        <div className="flex text-gray-400 justify-center list-none gap-[40px]">
          <li className="text-sky-400 font-bold underline underline-offset-2">
            Music
          </li>
          <li>Arts</li>
          <li>Outdoors</li>
          <li>Workshop</li>
          <li>Sport</li>
          <li>Festival</li>
          <li>Fashion</li>
        </div>
        <div>
          <button className="bg-white text-gray-400">←</button>
          <div className="flex h-[500px] gap-[30px] justify-center mb-[50px] relative overflow-scroll">
            <div>
              <div className="m-[50px]">
                <img
                  className="rounded-[10%] brightness-50 absolute "
                  src={EventOne}
                ></img>
                <div className="relative text-white  top-20 p-8 flex flex-col gap-[5px] ">
                  <p className="text-[15px]">Wed, 15 Nov, 4:00 PM</p>
                  <h1 className="font-bold  text-[30px]">
                    Sights & Sounds
                    <h2>Exhibition</h2>
                  </h1>
                  <div className="flex mt-[30px] ">
                    <img
                      className="rounded-full w-8 ml-[-10px] border border-slate-300"
                      src={PeopleOne}
                    ></img>
                    <img
                      className="rounded-full w-8 ml-[-10px] border border-slate-300"
                      src={PeopleTwo}
                    ></img>
                    <img
                      className="rounded-full w-8 ml-[-10px] border border-slate-300"
                      src={PeopleThree}
                    ></img>
                    <img
                      className="rounded-full w-8 ml-[-10px] border border-slate-300"
                      src={PeopleFour}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="m-[50px]">
                <img
                  className="rounded-[10%] brightness-50 w-[20%] h-[420px] absolute "
                  src={EventTwo}
                ></img>
                <div className="relative text-white  top-20 p-8 flex flex-col gap-[5px] ">
                  <p className="text-[15px]">Thu, 16 Nov, 7:00 PM</p>
                  <h1 className="font-bold  text-[30px]">
                    See it in Gold
                    <h2>Exhibition</h2>
                  </h1>
                  <div className="flex mt-[30px] ">
                    <img
                      className="rounded-full w-8 ml-[-10px] border border-slate-300"
                      src={PeopleOne}
                    ></img>
                    <img
                      className="rounded-full w-8 ml-[-10px] border border-slate-300"
                      src={PeopleTwo}
                    ></img>
                    <img
                      className="rounded-full w-8 ml-[-10px] border border-slate-300"
                      src={PeopleThree}
                    ></img>
                    <img
                      className="rounded-full w-8 ml-[-10px] border border-slate-300"
                      src={PeopleFour}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="m-[50px]">
                <img
                  className="rounded-[10%] brightness-50 absolute "
                  src={EventOne}
                ></img>
                <div className="relative text-white  top-20 p-8 flex flex-col gap-[5px] ">
                  <p className="text-[15px]">Wed, 15 Nov, 4:00 PM</p>
                  <h1 className="font-bold  text-[30px]">
                    Sights & Sounds
                    <h2>Exhibition</h2>
                  </h1>
                  <div className="flex mt-[30px] ">
                    <img
                      className="rounded-full w-8 ml-[-10px] border border-slate-300"
                      src={PeopleOne}
                    ></img>
                    <img
                      className="rounded-full w-8 ml-[-10px] border border-slate-300"
                      src={PeopleTwo}
                    ></img>
                    <img
                      className="rounded-full w-8 ml-[-10px] border border-slate-300"
                      src={PeopleThree}
                    ></img>
                    <img
                      className="rounded-full w-8 ml-[-10px] border border-slate-300"
                      src={PeopleFour}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
