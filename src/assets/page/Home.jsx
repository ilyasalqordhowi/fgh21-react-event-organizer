import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import People from "../img/peopleWeb.png";
import filmOne from "../img/film-avatar.jpeg";
import filmTwo from "../img/film-moana.jpeg";
import filmThree from "../img/film-toy-story.jpeg";
import filmFour from "../img/film-coco.jpeg";
import filmFive from "../img/film-up.jpeg";
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
import { events } from "../../redux/reducers/event";
import { Provider, useSelector, useDispatch } from "react-redux";
import { json, Link } from "react-router-dom";
import { login } from "../../redux/reducers/auth";
import { data } from "autoprefixer";

function Home() {
  const [navbar, setNavbar] = React.useState(true);
  const dispatch = useDispatch();
  const event = useSelector((state) => state.event.listEvent);

  function scrollLeft() {
    console.log("test....");
    document.getElementById("scroll").scrollLeft -= 50;
  }
  function scrollRight() {
    document.getElementById("scroll").scrollLeft += 50;
  }
  function btnSeeAll() {
    if (navbar === true) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  }
  useEffect(() => {
    async function dataEvent() {
      try {
        const response = await fetch("https://wsw6zh-8888.csb.app/events");
        if (!response.ok) {
          throw new Error(`response status ${response.status}`);
        }
        const json = await response.json();

        dispatch(events(json.results));
      } catch (error) {
        console.error(error.message);
      }
    }
    dataEvent();
  }, []);
  console.log(event);

  return (
    <div className="bg-[#9400FF]">
      <Navbar />
      <div>
        <div className="items-center  bg-[#27005D] flex justify-end mb-[175px] ">
          <img src={People}></img>
        </div>
        <div className="mb-[50px]">
          <div className="flex items-center flex-col gap-[25px] mb-[50px]">
            <div className="flex font-bold gap-2 p-[10px] text-[12px] text-[#6FDCE3] bg-[#27005D] h-[35px] w-[130px] justify-center rounded-2xl">
              <div>——</div>
              <div>EVENT</div>
            </div>
            <div className="font-bold flex w-full justify-center text-[50px]">
              Events For You
            </div>
          </div>
          <div className="flex w-full gap-[40px] text-[#E4F1FF] text-center justify-center">
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
              <li className="text-[#FF8900]">•</li>
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
        <div
          className="flex gap-[30px] mb-[50px] ml-[20px] md:ml-[100px] relative overflow-x-scroll no-scrollbar"
          id="scroll"
        >
          {event.map((element) => {
            return (
              <Link to="/detail">
                <div className="w-[260px] h-[376px] rounded-xl overflow-hidden relative">
                  <img
                    src={"https://wsw6zh-8888.csb.app/" + element.picture}
                    alt=""
                    className="object-fit h-full w-full"
                  />
                  <div className="bg-[rgba(0,0,0,0.5)] absolute top-0 text-white left-0  w-full h-full">
                    <div className="a text-white  top-20 pl-[20px] pt-[170px] flex flex-col justify-center gap-[5px] ">
                      <p className="text-[15px]">
                        {new Date(element.time).toLocaleDateString("en-CA")}
                      </p>

                      <h1 className="font-bold  text-[30px]">
                        {element.title}
                      </h1>
                      <div className="flex mt-[30px] ">
                        {element.attendees.map((items) => {
                          return (
                            <img
                              className="top-0 left-0 rounded-full h-[30px] w-[30px] ml-[-10px] border border-[#ff8900]"
                              src={
                                "https://wsw6zh-8888.csb.app/" + items.picture
                              }
                            ></img>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="items-center  gap-[50px]  justify-center flex mb-[40px]">
          <button
            className="shadow-lg bg-[#AED2FF] shadow-indigo-500/40 rounded-[10px] flex flex-col items-center justify-center w-[45px] h-[45px]"
            onClick={scrollLeft}
          >
            <FaArrowLeft />
          </button>
          <button
            className="shadow-lg shadow-indigo-500/40 rounded-[10px] bg-[#27005D] text-white flex flex-col items-center justify-center w-[45px] h-[45px]"
            onClick={scrollRight}
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="flex p-[10px] justify-center">
          <div className="bg-[#27005D]  mb-[175px] md:w-[1300px] w-full rounded-[30px] flex flex-col justify-center p-[30px] h-auto">
            <div className="flex  font-bold gap-2 p-[10px] text-[12px] ml-[100px] mb-[50px] text-[#27005D] bg-[#6FDCE3] h-[35px] w-[130px] justify-center rounded-2xl">
              <div>——</div>
              <div>Location</div>
            </div>
            <div className="flex flex-wrap w-full text-white justify-center mb-[50px]  gap-[50px]">
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
              <div className="md:flex  flex-col items-center">
                <img src={Bali}></img>
                <div className="text-center">Bali</div>
              </div>
              <div className={navbar ? "hidden" : ""}>
                <div className="flex flex-wrap w-full text-white justify-center mb-[50px]  gap-[50px]">
                  <div className="md:flex  flex-col items-center">
                    <img src={Aceh}></img>
                    <div className="text-center">Aceh</div>
                  </div>
                  <div className="md:flex  flex-col items-center">
                    <img src={Solo}></img>
                    <div className="text-center">Solo</div>
                  </div>
                  <div className="md:flex  flex-col items-center">
                    <img src={Yogyakarta}></img>
                    <div className="text-center">Yogyakarta</div>
                  </div>
                  <div className="md:flex  flex-col items-center">
                    <img src={Semarang}></img>
                    <div className="text-center">Semarang</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center ">
              <button
                onClick={btnSeeAll}
                className="bg-white text-blue-600 w-[200px] p-[10px] rounded-[20px]"
              >
                See All
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col gap-[25px] mb-[50px]">
          <div className="flex font-bold gap-2 p-[10px] text-[12px] text-[#6FDCE3] bg-[#27005D] h-[35px] w-[130px] justify-center rounded-2xl">
            <div>——</div>
            <div>CATEGORY</div>
          </div>
          <div className="font-bold text-[50px]">Browse Events By Category</div>
        </div>
        <div className=" md:flex grid grid-cols-3 md:ml-[0] ml-[10px] text-[#E4F1FF] justify-center list-none gap-[40px]">
          <li className="hover:text-blue-400 ">Music</li>
          <li className="hover:text-blue-400 ">Arts</li>
          <li className="hover:text-blue-400 ">Outdoors</li>
          <li className="hover:text-blue-400 ">Workshop</li>
          <li className="hover:text-blue-400 ">Sport</li>
          <li className="hover:text-blue-400 ">Festival</li>
          <li className="hover:text-blue-400 ">Fashion</li>
        </div>
        <div className="flex items-center  justify-center">
          <div className="md:flex hidden items-center">
            <button className="shadow-lg bg-[#AED2FF] shadow-indigo-500/40 rounded-[10px] flex flex-col items-center justify-center w-[45px] h-[45px]">
              <FaArrowLeft />
            </button>
          </div>
          <div className="flex  gap-[30px] mb-[50px]  md:w-[600px] items-center mt-[30px]  relative justify-center  rounded-xl overflow-x-scroll">
            {event.map((element) => {
              {
              }
              return (
                <Link to="/detail">
                  <div className="w-[260px] h-[376px] rounded-xl bg-[#27005D] overflow-hidden relative">
                    <img
                      src={"https://wsw6zh-8888.csb.app/" + element.picture}
                      alt=""
                      className="w-full h-1/2 object-cover"
                    />
                    <div className=" absolute top-0 text-white flex  left-0  w-full h-full">
                      <div className=" text-white  top-0 pl-[20px] pt-[170px] flex flex-col-reverse justify-center mb-[70px] gap-[20px] ">
                        <div>
                          <p className="text-[15px]">
                            {new Date(element.time).toLocaleDateString("en-CA")}
                          </p>
                          <h1 className="font-bold  text-[30px]">
                            {element.title}
                          </h1>
                        </div>
                        <div className="relative top-0 left-0 flex pl-4">
                          {element.attendees.map((items) => {
                            return (
                              <img
                                className="top-0 left-0 rounded-full h-[30px] w-[30px] ml-[-10px] border border-[#ff8900]"
                                src={
                                  "https://wsw6zh-8888.csb.app/" + items.picture
                                }
                              ></img>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="md:flex hidden items-center">
            <button className="shadow-lg shadow-indigo-500/40 rounded-[10px] bg-[#27005D] text-white flex flex-col items-center justify-center w-[45px] h-[45px]">
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="mt-[175px] bg-[#17153B] p-[89px]">
          <div className="flex items-center text-white flex-col gap-[25px] mb-[50px]">
            <div className="flex font-bold gap-2 p-[10px] text-[12px] text-[#27005D] bg-[#6FDCE3] h-[35px] w-[130px] justify-center rounded-2xl">
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
          <div className="p-[10px]">© 2020 Wetick All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
}
export default Home;
