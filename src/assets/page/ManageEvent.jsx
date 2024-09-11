import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import CreateEvent from "../component/CreateEvent";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
function ManageEvent() {
  const datatoken = useSelector((state) => state.auth.token);
  const [create, setCreate] = React.useState(true);
  const [data, setData] = React.useState([]);
  console.log(data, "mkmnkkmkmk");
  function btnCreate() {
    if (create === true) {
      setCreate(false);
    } else {
      setCreate(true);
    }
  }

  useEffect(() => {
    async function createEventByUser() {
      const response = await fetch("http://localhost:8888/events/data", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + datatoken,
        },
      });
      const EventData = await response.json();
      console.log(EventData.results);
      setData(EventData.results);
    }
    createEventByUser();
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="flex reltive  md:p-[50px] bg-[#27005D]">
        <div className="flex  md:w-[242px]  h-[508px]">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full gap-[46px] h-auto md:p-[40px] bg-[#AED2FF] md:rounded-[20px] ">
          <div className="md:flex md:mt-[30px] mt-[100px]  justify-between">
            <div className="font-bold text-[20px]">Manage Event</div>
            <div className="md:flex w-[100px]  items-center rounded-[15px] p-[10px] bg-[#27005D] text-blue-500">
              <button onClick={btnCreate}>Create</button>
            </div>
          </div>
          {data.map((element) => {
            return (
              <div className="flex flex-col gap-[25px]">
                <div className="flex gap-[25px]">
                  <div className="bg-white shadow-lg shadow-black-500/50 p-[14px] w-[50px] h-[75px] text-[#C1C5D0] flex flex-col items-center justify-center rounded-[7px] ">
                    <h1 className="text-yellow-500">15</h1>
                    <p>Wed</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[24px] mb-[15px]">{element.title}</div>
                    <div className="text-white text-[12px]">
                      Jakarta, Indonesia
                    </div>
                    <div className="text-white    text-[12px]">
                      {element.date}
                    </div>
                    <div className="flex mt-[10px] gap-[14px]">
                      <div className="text-[#3366FF]  text-[12px]">Detail</div>
                      <div className="text-[#3366FF]  text-[12px]">Update</div>
                      <div className="text-[#3366FF]  text-[12px]">Delete</div>
                    </div>
                  </div>
                </div>
                <hr className="md:flex hidden"></hr>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col md:bg-[#27005D] gap-[144px]">
        <Footer />
        <div>© 2024 SnagTick All Rights Reserved</div>
      </div>
      {create ? "" : <CreateEvent />}
    </div>
  );
}
export default ManageEvent;
