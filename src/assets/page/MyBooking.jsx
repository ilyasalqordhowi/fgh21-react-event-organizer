import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import DatePng from "../img/date.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function MyBooking() {
  const navigate = useNavigate();
  function formatTimestamp(timestamp) {
    const options = {
      weekday: "short",
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    return new Date(timestamp).toLocaleString("en-US", options);
  }
  function formatTimestampToDay(timestamp) {
    const options = {
      day: "numeric",
    };

    return new Date(timestamp).toLocaleString("en-US", options);
  }
  function formatTimestampToMonth(timestamp) {
    const options = {
      month: "short",
    };

    return new Date(timestamp).toLocaleString("en-US", options);
  }
  ``;

  const datatoken = useSelector((state) => state.auth.token);
  if (datatoken === null) {
    navigate("/sign-up");
  }
  const [dataBooking, setBooking] = React.useState([{}, {}]);

  React.useEffect(() => {
    (async function () {
      const response = await fetch("http://localhost:8888/transactions/", {
        headers: {
          Authorization: "Bearer " + datatoken,
        },
      });
      console.log(response, "hello");
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setBooking(json.results);
    })();
  }, []);
  let data = true;
  function dataShow() {
    if (dataBooking.length == 0) {
      data = false;
    }
  }
  dataShow();
  console.log(data);

  return (
    <>
      <Navbar />
      <div className="flex  md:p-[50px] bg-[#27005D]">
        <div className="md:flex hidden md:w-[242px] h-[508px]">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full gap-[46px] h-auto p-[40px] bg-[#AED2FF] md:rounded-[20px] ">
          <div className="md:flex justify-between">
            <div className="font-bold text-[20px]">My Booking</div>
            <div className="flex w-[100px]  items-center rounded-[15px] p-[10px] bg-[#27005D] text-blue-500">
              <img src={DatePng}></img>
              <button>March</button>
            </div>
          </div>
          <div className={data ? "hidden" : ""}>
            <div className="flex flex-col items-center py-40">
              <div className="font-semibold text-[24px]">No tickets bought</div>
              <div className="font-medium text-[#B3B8B8] w-[340px] text-center">
                It appears you haven’t bought any tickets yet. Maybe try
                searching these?
              </div>
            </div>
          </div>
          {dataBooking.map((items) => {
            return (
              <div className="flex flex-col gap-[25px]">
                <div className="flex gap-[25px]">
                  <div className="bg-white shadow-lg shadow-black-500/50 p-[14px] w-[50px] h-[75px] text-[#C1C5D0] flex flex-col items-center justify-center rounded-[7px] ">
                    <h1 className="text-yellow-500">
                      {formatTimestampToDay(items.date)}
                    </h1>
                    <p>{formatTimestampToMonth(items.date)}</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[24px]">{items.eventTitle}</div>
                    <div className="text-white text-[12px]">
                      {items.location}
                    </div>
                    <div className="text-white text-[12px]">
                      {formatTimestamp(items.date)}
                    </div>
                    <div className="text-[#3366FF]  text-[12px]">Detail</div>
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
      </div>
    </>
  );
}
export default MyBooking;
