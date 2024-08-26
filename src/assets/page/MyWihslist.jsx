import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import Date from "../img/date.png";
import { Link, useParams } from "react-router-dom";
import HeartBlue from "../img/heart2.png";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function MyWihslist() {
  const datatoken = useSelector((state) => state.auth.token);
  const [wishlist, setWishlist] = React.useState([]);
  console.log(wishlist);
  let { id } = useParams();

  useEffect(() => {
    async function Whishlist() {
      const response = await fetch("http://localhost:8888/whislist/" + id, {
        headers: {
          Authorization: "Bearer " + datatoken,
        },
      });
      const dataNew = await response.json();
      console.log(dataNew.results);
      setWishlist(dataNew.results);
    }
    Whishlist;
  }, []);
  return (
    <div className="">
      <Navbar />
      <div className="flex  md:p-[50px] bg-[#27005D]">
        <div className="flex md:w-[242px] h-[508px]">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full gap-[46px] h-auto p-[40px] bg-[#AED2FF] md:rounded-[20px] ">
          <div className="md:flex justify-between">
            <div className="font-bold text-[20px]">My Whislist</div>
            <div className="flex  items-center w-[100px] rounded-[15px] p-[10px] bg-[#27005D] text-blue-500">
              <img src={Date}></img>
              <div>March</div>
            </div>
          </div>
          {wishlist.map((items) => {
            return (
              <div className="flex flex-col gap-[25px]">
                <div className="flex gap-[25px]">
                  <div className="bg-white shadow-lg shadow-black-500/50 p-[14px] w-[50px] h-[75px] text-[#C1C5D0] flex flex-col items-center justify-center rounded-[7px] ">
                    <image></image>
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="text-[24px]"></div>
                    <div className="text-white text-[12px]">
                      Jakarta, Indonesia
                    </div>
                    <div className="text-white text-[12px]"></div>
                  </div>
                  <div>
                    <img src={HeartBlue}></img>
                  </div>
                </div>
                <hr></hr>
              </div>
            );
          })}
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
