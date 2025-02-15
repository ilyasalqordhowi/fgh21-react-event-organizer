import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import CreateEvent from "../component/CreateEvent";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function ManageEvent() {
  const datatoken = useSelector((state) => state.auth.token);
  const [create, setCreate] = React.useState(true);
  const [data, setData] = React.useState([]);
  const nav = useNavigate();
  const [noEvent, setNoEvent] = React.useState(false);
  console.log(data, "mkmnkkmkmk");
  if (datatoken === null) {
    nav("/sign-up");
  }
  function btnCreate() {
    setCreate(!create);
  }
  useEffect(() => {
    async function createEventByUser() {
      const response = await fetch(`http://103.93.58.89:21213/events/data`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + datatoken,
        },
      });
      const EventData = await response.json();
      if (EventData.success) {
        setNoEvent(false);
        setData(EventData.results);
      } else {
        setNoEvent(true);
      }
    }
    createEventByUser();
  }, []);
  async function btnDetail(id) {
    nav("/detail/" + id);
  }
  async function uploadImageEvent() {
    const body = new FormData();
    body.append("eventImg", file);
    const response = await fetch(`http://103.93.58.89:21213/events/img`, {
      method: "POST",
      body,
    });
    const json = await response.json();
    console.log(json, "ini jasooon");
  }
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };

  return (
    <div className="">
      <Navbar />
      <div className="flex reltive  md:p-[50px] bg-[#27005D]">
        <div className="md:flex  md:w-[242px] hidden h-[508px]">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full gap-[46px] h-auto md:p-[40px] bg-[#AED2FF] md:rounded-[20px] ">
          <div className="md:flex md:mt-[30px] mt-[100px]  justify-between">
            <div className="font-bold text-[20px]">Manage Event</div>
            <div className="md:flex w-[100px]  items-center rounded-[15px] p-[10px] bg-[#27005D] text-blue-500">
              <button onClick={btnCreate}>Create</button>
            </div>
          </div>
          <div className="flex flex-col overflow-y-scroll gap-[25px]">
            {data.map((element) => {
              return (
                <div>
                  <div className="flex gap-[25px]">
                    <div className="bg-white shadow-lg shadow-black-500/50 p-[14px] w-[50px] h-[75px] text-[#C1C5D0] flex flex-col items-center justify-center rounded-[7px] ">
                      <img src={element.image} alt="" />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-[24px] mb-[15px]">
                        {element.title}
                      </div>
                      <div className="text-white text-[12px]">
                        Jakarta, Indonesia
                      </div>
                      <div className="text-white    text-[12px]">
                        {element.date}
                      </div>
                      <div className="flex mt-[10px] gap-[14px]">
                        <button
                          onClick={() => btnDetail(element.id)}
                          className="text-[#3366FF]  text-[12px]"
                        >
                          Detail
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr className="md:flex hidden"></hr>
                </div>
              );
            })}
          </div>
          {noEvent ? (
            <div className="flex flex-col items-center py-40">
              <div className="font-semibold text-[24px]">No tickets bought</div>
              <div className="font-medium text-[#B3B8B8] w-[340px] text-center">
                It appears you haven’t bought any tickets yet. Maybe try
                searching these?
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex flex-col bg-[#27005D] gap-[144px]">
        <Footer />
      </div>
      {!create && <CreateEvent onClose={btnCreate} />}
    </div>
  );
}
export default ManageEvent;
