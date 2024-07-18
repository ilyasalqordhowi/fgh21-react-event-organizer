import React from "react";
import NavbarProfile from "../component/NavbarProfile";
import EventOne from "../img/event1.png";
import Location from "../img/location.png";
import Clock from "../img/clock.png";
import Heart from "../img/heart.png";
import PeopleOne from "../img/people1.png";
import PeopleTwo from "../img/people2.png";
import PeopleThree from "../img/people3.png";
import PeopleFour from "../img/people4.png";
import Map from "../img/map.png";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

function Event() {
  return (
    <div className="">
      <NavbarProfile />
      <div className="flex flex-col justify-center items-center p-[50px] bg-[#F4F7FF]">
        <div className="flex w-[1100px] gap-[46px] h-auto p-[100px] bg-white rounded-[20px] ">
          <div className="flex flex-col items-center gap-[10px] w-[60%]">
            <img className="w-full rounded-[20px]" src={EventOne}></img>
            <div className="flex">
              <img className="w-[20px]" src={Heart}></img>
              <div>Add to Wishlist</div>
            </div>
          </div>
          <div className="flex flex-col w-[40%] gap-[30px]">
            <h1 className="font-bold w-44 text-[20px]">
              Sights & Sounds Exhibition
            </h1>
            <div className="flex text-[15px] w-full gap-[8px]">
              <div className="flex gap-[10px]">
                <img src={Location}></img>
                <div>Jakarta, Indonesia</div>
              </div>
              <div className="flex gap-[10px]">
                <img src={Clock}></img>
                <div>Wed, 15 Nov, 4:00 PM</div>
              </div>
            </div>
            <div className="w-[40px]">
              <div>Attendees</div>
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
            <hr></hr>
            <div className="flex flex-col gap-[12px]">
              <h1 className="font-bold text-[20px]">Event Detail</h1>
              <p className="text-[#373A42BF]">
                After his controversial art exhibition "Tear and Consume" back
                in November 2018, in which guests were invited to tear up…
              </p>
              <div className="text-blue-400">Read More</div>
              <div className="font-bold text-[20px]">Location</div>
              <img className="w-[315px]" src={Map}></img>
            </div>
            <Link to="/booking">
              <div className="bg-[#3366FF] rounded-[15px] mt-[50px] text-center  text-white font-[20px] w-[375px]">
                <button className="p-[20px]">Buy Tickets</button>
              </div>
            </Link>
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
export default Event;
