import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import Date from "../img/date.png";
import { Link, useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function MyWihslist() {
  let { id } = useParams();
  const datatoken = useSelector((state) => state.auth.token);
  const [whislist, setWhislist] = React.useState([]);
  const [noWhislist, setNoWhislist] = React.useState(false);

  useEffect(() => {
    async function Whishlist() {
      const response = await fetch(`http://103.93.58.89:21213/whislist/` + id, {
        headers: {
          Authorization: "Bearer " + datatoken,
        },
      });
      console.log(response);
      const dataNew = await response.json();
      if (dataNew.success) {
        setNoWhislist(true);
        setWhislist(dataNew.results);
      } else {
        setNoWhislist(false);
      }
    }
    Whishlist();
  }, []);
  function DeleteWhishlist() {
    const responseWhislist = fetch(`http://103.93.58.89:21213/whislist/` + id, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + datatoken,
      },
    });
    console.log(responseWhislist, "ini delete whislist");
  }
  DeleteWhishlist();

  return (
    <div>
      <Navbar />
      <div className="flex  md:p-[50px] bg-[#27005D]">
        <div className="md:flex hidden md:w-[242px] h-[508px]">
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
          {whislist.map((items) => {
            return (
              <div className="flex flex-col gap-[25px]">
                <div className="flex gap-[25px]">
                  <div className="bg-white shadow-lg shadow-black-500/50 p-[14px] w-[50px] h-[75px] text-[#C1C5D0] flex flex-col items-center justify-center rounded-[7px] ">
                    <image>Foto</image>
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="text-[24px]">{items.event.title}</div>
                    <div className="text-white text-[12px]">
                      Jakarta, Indonesia
                    </div>
                    <div className="text-white text-[12px]">
                      {items.event.date}
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={DeleteWhishlist}
                      className="text-5xl text-blue-600"
                    >
                      <FaHeart />
                    </button>
                  </div>
                </div>
                <hr></hr>
              </div>
            );
          })}
          {noWhislist ? (
            ""
          ) : (
            <div className="flex flex-col items-center py-40">
              <div className="font-semibold text-[24px]">No tickets bought</div>
              <div className="font-medium text-[#B3B8B8] w-[340px] text-center">
                It appears you haven’t bought any tickets yet. Maybe try
                searching these?
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col bg-[#27005D] gap-[144px]">
        <Footer />
      </div>
    </div>
  );
}
export default MyWihslist;
