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
import HomeOne from "../img/home1.png";
import HomeTwo from "../img/home2.png";
import HomeThree from "../img/home3.png";
import HomeFour from "../img/home4.png";
import HomeFive from "../img/home5.png";
import HomeSix from "../img/home6.png";
import Footer from "../component/Footer";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

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
            <div className="font-bold flex w-full justify-center text-[50px]">
              Events For You
            </div>
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
        <div className="flex gap-[30px] mb-[50px] ml-[100px] relative  overflow-x-scroll">
          <Link to="/detail">
            <div className="w-[260px] h-[376px] rounded-xl overflow-hidden relative">
              <img src={EventOne} alt="" className="w-full h-full" />
              <div className="bg-[rgba(0,0,0,0.5)] absolute top-0 text-white left-0  w-full h-full">
                <div className="a text-white  top-20 pl-[20px] pt-[170px] flex flex-col justify-center gap-[5px] ">
                  <p className="text-[15px]">Wed, 15 Nov, 4:00 PM</p>
                  <h1 className="font-bold  text-[30px]">
                    Sights & Sounds Exhibition
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
                      className="rounded-full  w-8 ml-[-10px] border border-slate-300"
                      src={PeopleFour}
                    ></img>
                    <div className="bg-orange-400/50  text-white rounded-full  w-10 ml-[-10px] border border-slate-300">
                      +62
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link>
            <div className="w-[260px] h-[376px] rounded-xl overflow-hidden relative">
              <img src={EventTwo} alt="" className="w-full h-full" />
              <div className="bg-[rgba(0,0,0,0.5)] absolute top-0 text-white left-0  w-full h-full">
                <div className="a text-white  top-20 pl-[20px] pt-[170px] flex flex-col justify-center gap-[5px] ">
                  <p className="text-[15px]">Thu, 16 Nov, 7:00 PM</p>
                  <h1 className="font-bold  text-[30px]">
                    See it in Gold Class
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
                      className="rounded-full  w-8 ml-[-10px] border border-slate-300"
                      src={PeopleFour}
                    ></img>
                    <div className="bg-orange-400/50  text-white rounded-full  w-10 ml-[-10px] border border-slate-300">
                      +62
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detail">
            <div className="w-[260px] h-[376px] rounded-xl overflow-hidden relative">
              <img src={EventOne} alt="" className="w-full h-full" />
              <div className="bg-[rgba(0,0,0,0.5)] absolute top-0 text-white left-0  w-full h-full">
                <div className="a text-white  top-20 pl-[20px] pt-[170px] flex flex-col justify-center gap-[5px] ">
                  <p className="text-[15px]">Wed, 15 Nov, 4:00 PM</p>
                  <h1 className="font-bold  text-[30px]">
                    Sights & Sounds Exhibition
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
                      className="rounded-full  w-8 ml-[-10px] border border-slate-300"
                      src={PeopleFour}
                    ></img>
                    <div className="bg-orange-400/50  text-white rounded-full  w-10 ml-[-10px] border border-slate-300">
                      +62
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link>
            <div className="w-[260px] h-[376px] rounded-xl overflow-hidden relative">
              <img src={EventTwo} alt="" className="w-full h-full" />
              <div className="bg-[rgba(0,0,0,0.5)] absolute top-0 text-white left-0  w-full h-full">
                <div className="a text-white  top-20 pl-[20px] pt-[170px] flex flex-col justify-center gap-[5px] ">
                  <p className="text-[15px]">Thu, 16 Nov, 7:00 PM</p>
                  <h1 className="font-bold  text-[30px]">
                    See it in Gold Class
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
                      className="rounded-full  w-8 ml-[-10px] border border-slate-300"
                      src={PeopleFour}
                    ></img>
                    <div className="bg-orange-400/50  text-white rounded-full  w-10 ml-[-10px] border border-slate-300">
                      +62
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detail">
            <div className="w-[260px] h-[376px] rounded-xl overflow-hidden relative">
              <img src={EventOne} alt="" className="w-full h-full" />
              <div className="bg-[rgba(0,0,0,0.5)] absolute top-0 text-white left-0  w-full h-full">
                <div className="a text-white  top-20 pl-[20px] pt-[170px] flex flex-col justify-center gap-[5px] ">
                  <p className="text-[15px]">Wed, 15 Nov, 4:00 PM</p>
                  <h1 className="font-bold  text-[30px]">
                    Sights & Sounds Exhibition
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
                      className="rounded-full  w-8 ml-[-10px] border border-slate-300"
                      src={PeopleFour}
                    ></img>
                    <div className="bg-orange-400/50  text-white rounded-full  w-10 ml-[-10px] border border-slate-300">
                      +62
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link>
            <div className="w-[260px] h-[376px] rounded-xl overflow-hidden relative">
              <img src={EventTwo} alt="" className="w-full h-full" />
              <div className="bg-[rgba(0,0,0,0.5)] absolute top-0 text-white left-0  w-full h-full">
                <div className="a text-white  top-20 pl-[20px] pt-[170px] flex flex-col justify-center gap-[5px] ">
                  <p className="text-[15px]">Thu, 16 Nov, 7:00 PM</p>
                  <h1 className="font-bold  text-[30px]">
                    See it in Gold Class
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
                      className="rounded-full  w-8 ml-[-10px] border border-slate-300"
                      src={PeopleFour}
                    ></img>
                    <div className="bg-orange-400/50  text-white rounded-full  w-10 ml-[-10px] border border-slate-300">
                      +62
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detail">
            <div className="w-[260px] h-[376px] rounded-xl overflow-hidden relative">
              <img src={EventOne} alt="" className="w-full h-full" />
              <div className="bg-[rgba(0,0,0,0.5)] absolute top-0 text-white left-0  w-full h-full">
                <div className="a text-white  top-20 pl-[20px] pt-[170px] flex flex-col justify-center gap-[5px] ">
                  <p className="text-[15px]">Wed, 15 Nov, 4:00 PM</p>
                  <h1 className="font-bold  text-[30px]">
                    Sights & Sounds Exhibition
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
                      className="rounded-full  w-8 ml-[-10px] border border-slate-300"
                      src={PeopleFour}
                    ></img>
                    <div className="bg-orange-400/50  text-white rounded-full  w-10 ml-[-10px] border border-slate-300">
                      +62
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="items-center  gap-[50px]  justify-center flex mb-[40px]">
          <button className="shadow-lg shadow-indigo-500/40 rounded-[10px] flex flex-col items-center justify-center w-[45px] h-[45px]">
            <FaArrowLeft />
          </button>
          <button className="shadow-lg shadow-indigo-500/40 rounded-[10px] bg-blue-500 text-white flex flex-col items-center justify-center w-[45px] h-[45px]">
            <FaArrowRight />
          </button>
        </div>
        <div className="flex justify-center">
          <div className="bg-blue-600  mb-[175px] md:w-[1300px] w-full rounded-[30px] flex flex-col justify-center p-[30px] h-auto">
            <div className="flex  font-bold gap-2 p-[10px] text-[12px] ml-[20px] mb-[50px] text-white bg-sky-400 h-[35px] w-[130px] justify-center rounded-2xl">
              <div>——</div>
              <div>Location</div>
            </div>
            <div className="flex flex-wrap w-full text-white justify-center mb-[50px]  gap-[86px]">
              <div className="md:w-[280px] w-full  text-[50px] text-white">
                Discover Events Near You
              </div>
              <div className="flex flex-col items-center">
                <img src={Jakarta}></img>
                <div>Jakarta</div>
              </div>
              <div className="flex flex-col items-center">
                <img src={Bandung}></img>
                <div>Bandung</div>
              </div>
              <div className="flex flex-col items-center">
                <img src={Bali}></img>
                <div>Bali</div>
              </div>
              <div className="flex flex-col items-center">
                <img src={Aceh}></img>
                <div>Aceh</div>
              </div>
              <div className="flex flex-col items-center">
                <img src={Solo}></img>
                <div>Solo</div>
              </div>
              <div className="flex flex-col items-center">
                <img src={Yogyakarta}></img>
                <div>Yogyakarta</div>
              </div>
              <div className="flex flex-col items-center">
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
        </div>
        <div className="flex items-center flex-col gap-[25px] mb-[50px]">
          <div className="flex font-bold gap-2 p-[10px] text-[12px] text-[#FF3D71] bg-[#FF3D7140] h-[35px] w-[130px] justify-center rounded-2xl">
            <div>——</div>
            <div>CATEGORY</div>
          </div>
          <div className="font-bold text-[50px]">Browse Events By Category</div>
        </div>
        <div className=" md:flex grid grid-cols-3 text-gray-400 justify-center list-none gap-[40px]">
          <li className="hover:text-blue-400 ">Music</li>
          <li className="hover:text-blue-400 ">Arts</li>
          <li className="hover:text-blue-400 ">Outdoors</li>
          <li className="hover:text-blue-400 ">Workshop</li>
          <li className="hover:text-blue-400 ">Sport</li>
          <li className="hover:text-blue-400 ">Festival</li>
          <li className="hover:text-blue-400 ">Fashion</li>
        </div>
        <div className="flex gap-[30px] mb-[50px]  mt-[30px] relative justify-center overflow-x-scroll">
          <div className="flex items-center">
            <button className="shadow-lg shadow-indigo-500/40 rounded-[10px] flex flex-col items-center justify-center w-[45px] h-[45px]">
              <FaArrowLeft />
            </button>
          </div>
          <Link to="/detail">
            <div className="w-[260px] h-[376px] rounded-xl overflow-hidden relative">
              <img src={EventOne} alt="" className="w-full h-full" />
              <div className="bg-[rgba(0,0,0,0.5)] absolute top-0 text-white left-0  w-full h-full">
                <div className="a text-white  top-20 pl-[20px] pt-[170px] flex flex-col justify-center gap-[5px] ">
                  <p className="text-[15px]">Wed, 15 Nov, 4:00 PM</p>
                  <h1 className="font-bold  text-[30px]">
                    Sights & Sounds Exhibition
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
                      className="rounded-full  w-8 ml-[-10px] border border-slate-300"
                      src={PeopleFour}
                    ></img>
                    <div className="bg-orange-400/50  text-white rounded-full  w-10 ml-[-10px] border border-slate-300">
                      +62
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link>
            <div className="w-[260px] h-[376px] rounded-xl overflow-hidden relative">
              <img src={EventTwo} alt="" className="w-full h-full" />
              <div className="bg-[rgba(0,0,0,0.5)] absolute top-0 text-white left-0  w-full h-full">
                <div className="a text-white  top-20 pl-[20px] pt-[170px] flex flex-col justify-center gap-[5px] ">
                  <p className="text-[15px]">Thu, 16 Nov, 7:00 PM</p>
                  <h1 className="font-bold  text-[30px]">
                    See it in Gold Class
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
                      className="rounded-full  w-8 ml-[-10px] border border-slate-300"
                      src={PeopleFour}
                    ></img>
                    <div className="bg-orange-400/50  text-white rounded-full  w-10 ml-[-10px] border border-slate-300">
                      +62
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/detail">
            <div className="w-[260px] h-[376px] rounded-xl overflow-hidden relative">
              <img src={EventOne} alt="" className="w-full h-full" />
              <div className="bg-[rgba(0,0,0,0.5)] absolute top-0 text-white left-0  w-full h-full">
                <div className="a text-white  top-20 pl-[20px] pt-[170px] flex flex-col justify-center gap-[5px] ">
                  <p className="text-[15px]">Wed, 15 Nov, 4:00 PM</p>
                  <h1 className="font-bold  text-[30px]">
                    Sights & Sounds Exhibition
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
                      className="rounded-full  w-8 ml-[-10px] border border-slate-300"
                      src={PeopleFour}
                    ></img>
                    <div className="bg-orange-400/50  text-white rounded-full  w-10 ml-[-10px] border border-slate-300">
                      +62
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <div className="flex items-center">
            <button className="shadow-lg shadow-indigo-500/40 rounded-[10px] bg-blue-500 text-white flex flex-col items-center justify-center w-[45px] h-[45px]">
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="mt-[175px] bg-black p-[89px]">
          <div className="flex items-center text-white flex-col gap-[25px] mb-[50px]">
            <div className="flex font-bold gap-2 p-[10px] text-[12px] text-white bg-[#C1C5D0] h-[35px] w-[130px] justify-center rounded-2xl">
              <div>——</div>
              <div>CATEGORY</div>
            </div>
            <div className="font-bold flex justify-center text-center text-[50px]">
              Browse Events By Category
            </div>
            <p className="text-[#C1C5D0]">By companies like :</p>
          </div>
          <div className="md:flex grid grid-cols-2 gap-[30px] justify-center mt-[93px]">
            <div>
              <img src={HomeOne}></img>
            </div>
            <div>
              <img src={HomeTwo}></img>
            </div>
            <div>
              <img src={HomeThree}></img>
            </div>
            <div>
              <img src={HomeFour}></img>
            </div>
            <div>
              <img src={HomeFive}></img>
            </div>
            <div>
              <img src={HomeSix}></img>
            </div>
          </div>
        </div>
        <div className="flex flex-col  gap-[144px]">
          <Footer />
          <div>© 2020 Wetick All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
}
export default Home;
