import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import Location from "../img/location.png";
import Clock from "../img/clock.png";
import PeopleOne from "../img/people1.png";
import PeopleTwo from "../img/people2.png";
import PeopleThree from "../img/people3.png";
import PeopleFour from "../img/people4.png";
import Map from "../img/map.png";
import Footer from "../component/Footer";
import { FaHeart } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

function Event() {
  let { id } = useParams();
  console.log(id);
  const [data, setData] = React.useState({});
  useEffect(() => {
    async function dataEvent() {
      try {
        const response = await fetch("http://localhost:8888/events" + "/" + id);
        console.log(response);
        if (!response.ok) {
          throw new Error(`response status ${response.status}`);
        }
        const json = await response.json();
        console.log(json.results);
        setData(json.results);
      } catch (error) {
        console.error(error.message);
      }
    }
    dataEvent();
  }, []);

  return (
    <div className="flex flex-col bg-[#27005D]">
      <Navbar />
      <div className="flex flex-col justify-center  items-center md:p-[50px] bg-[#27005D]">
        <div className="md:flex flex flex-row md:w-[1100px] w-full gap-[46px] h-full md:p-[100px]  md:bg-[#AED2FF]  rounded-[20px] ">
          <div className="flex flex-col items-center gap-[10px]  w-full">
            <img className="w-full md:rounded-[20px]" src={data.image}></img>
            <div className="md:flex items-center text-[30px] hidden">
              <FaHeart />
              <div>Add to Wishlist</div>
            </div>
          </div>
          <div className="flex flex-col md:relative absolute md:w-[40%] md:gap-[30px]">
            <div className="flex flex-col md:text-black mt-[100px] text-white md:mt-[0] md:mb-[0] gap-[10px] md:mt-[0px] mb-[100px] ">
              <h1 className="flex font-bold w-full md:text-[30px] text-[40px]">
                {data.title}
                <div className="flex items-center md:hidden">
                  <FaHeart />
                </div>
              </h1>
              <div className="md:flex md:flex-row flex-col md:text-[15px] text-[13px] w-full gap-[8px]">
                <div className="flex gap-[10px]">
                  <img src={Location}></img>
                  <div>Jakarta, Indonesia</div>
                </div>
                <div className="flex gap-[10px]">
                  <img src={Clock}></img>
                  <div>{data.date}</div>
                </div>
              </div>
              <div className="w-[40px]">
                <div>Attendees</div>
                <div className="flex mb-[100px] mt-[30px] ">
                  <img
                    className="rounded-full w-8  border border-slate-300"
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
            <hr className="md:flex hidden"></hr>
            <div className="flex flex-col w-full p-[10px] gap-[12px]">
              <h1 className="font-bold text-[20px]">Event Detail</h1>
              <p className="text-[#373A42BF] ">{data.descriptions}</p>
              <div className="text-blue-400">Read More</div>
              <div className="font-bold text-[20px]">Location</div>
              <img className="w-[315px]" src={Map}></img>
            </div>
            <Link to={"/events/section/" + data.id}>
              <div className="bg-[#3366FF] rounded-[15px] mt-[50px] text-center  p-[10px] text-white font-[20px] md:w-[375px]">
                <button className="p-[20px]">Buy Tickets</button>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:mt-[0] mt-[500px] gap-[144px]">
        <Footer />
        <div className="p-[10px]">© 2020 Wetick All Rights Reserved</div>
      </div>
    </div>
  );
}
export default Event;
