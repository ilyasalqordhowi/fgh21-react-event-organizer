import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import loadingDino from "../img/dino.gif";
import { FaRectangleXmark } from "react-icons/fa6";

function CreateEvent() {
  const datatoken = useSelector((state) => state.auth.token);
  const [create, setCreate] = React.useState(true);
  const [message, setMessage] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  function btnCreate() {
    setCreate(!create);
  }
  async function createEvent(event) {
    event.preventDefault();

    const nameEvent = event.target.nameEvent.value;
    // const categoryEvent = event.target.category.value;
    const locationEvent = event.target.location.value;
    const dateEvent = event.target.date.value;
    const priceEvent = event.target.price.value;

    const detailEvent = event.target.detail.value;

    console.log(nameEvent);
    console.log(locationEvent);
    console.log(dateEvent);
    console.log(priceEvent);
    console.log(detailEvent);
    setLoading(false);
    const formData = new URLSearchParams();
    formData.append("title", nameEvent);
    // formData.append("title", categoryEvent);
    formData.append("date", dateEvent);
    formData.append("descriptions", detailEvent);

    const dataNew = await fetch("http://103.93.58.89:21213/events", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + datatoken,
      },
      body: formData,
    });
    console.log(dataNew);
    const response = await dataNew.json();
    if (response.success) {
      setTimeout(() => {
        setLoading(true);
      }, 3000);
    } else {
      setTimeout(() => {
        setLoading(true);
        setMessage(true);
      }, 3000);
    }
  }
  async function uploadImageEvent() {
    const body = new FormData();
    body.append("eventImg", file);

    const response = await fetch("http://localhost:8888/events/img", {
      method: "POST",
      body,
    });
    const json = await response.json();
    console.log(json, "ini berhasil");
  }
  const handlerChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onloadend = () => {
      setPreview(reader.results);
    };
  };
  createEvent;
  return (
    <>
      {create && (
        <div className="absolute flex items-center justify-center bg-black/25 w-full h-screen top-0">
          <div className="bg-white pr-[52px] w-4/5 rounded-[30px] pl-[52px] absolute ">
            <div className="flex items-center justify-between">
              <div className="pt-[32px] font-semibold tracking-[1px] mb-[44px]">
                Create Event
              </div>
              <button className="font-bold" onClick={btnCreate}>
                X
              </button>
            </div>
            <form action="" onSubmit={createEvent}>
              <div className="w-full flex gap-[60px]">
                <div className="w-1/2">
                  <label htmlFor="name" className="mb-[10px]">
                    Name
                  </label>
                  <div>
                    <input
                      type="text"
                      name="nameEvent"
                      id="name"
                      placeholder="Input Name Event ..."
                      className="h-[55px]  border-2 w-full pl-[20px] pr-[20px] rounded-[15px] mb-[30px]"
                    />
                  </div>
                </div>

                <div className="w-1/2">
                  <label htmlFor="name" className="mb-[10px]">
                    Category
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="category"
                      id="name"
                      placeholder="Select Category"
                      className="h-[55px] border-2 w-full pl-[20px] pr-[20px] rounded-[15px] mb-[30px]"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex gap-[60px]">
                <div className="w-1/2">
                  <label htmlFor="name" className="mb-[10px]">
                    Location
                  </label>
                  <div>
                    <input
                      type="text"
                      name="location"
                      id="name"
                      placeholder="Select Location"
                      className="h-[55px] border-2 w-full pl-[20px] pr-[20px] rounded-[15px] mb-[30px]"
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <label htmlFor="name" className="mb-[10px]">
                    Date Time Show
                  </label>
                  <div className="">
                    <input
                      type="text"
                      name="date"
                      id="name"
                      placeholder="01/01/2022"
                      className="h-[55px] border-2 w-full pl-[20px] pr-[20px] rounded-[15px] mb-[30px]"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex gap-[60px]">
                <div className="w-1/2">
                  <label htmlFor="name" className="mb-[10px]">
                    Price
                  </label>
                  <div className="">
                    <input
                      type="number"
                      name="price"
                      id="name"
                      placeholder="Input Price ..."
                      className="h-[55px]  border-2 w-full pl-[20px] pr-[20px] rounded-[15px] mb-[30px]"
                    />
                  </div>
                </div>
                <form onSubmit={uploadImageEvent} className="w-1/2">
                  <label htmlFor="name" className="mb-[10px]">
                    Image
                  </label>
                  <div>
                    <label
                      type="button"
                      htmlFor="img"
                      className=" bg-white w-full font-bold border-solid border-2 border-sky-500 flex items-center justify-center text-blue-700 rounded-[15px] p-[10px]"
                    >
                      upload image
                    </label>

                    <input
                      type="file"
                      name="img"
                      id="img"
                      className="hidden"
                      onChange={handlerChange}
                    />
                  </div>
                </form>
              </div>
              <div className="w-full">
                <div className="mb-[10px]">Detail</div>
                <input
                  type="text"
                  name="detail"
                  id=""
                  placeholder="Input Detail ..."
                  className="h-[95px] border-2 w-full pl-[20px] pr-[20px] rounded-[15px] mb-[46px] "
                />
              </div>
              <div className="w-full text-right mb-[42px]">
                <button
                  type="submit"
                  className="h-[60px] w-full text-white bg-[#3366FF] max-w-[310px] rounded-[15px]"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {loading ? (
        ""
      ) : (
        <div className=" flex h-full w-full justify-center items-center fixed z-10 top-0 left-0 bg-[rgba(0,0,0,0.5)]">
          <div className="bg-violet-300 flex  items-center gap-[20px] rounded-md p-[10px]">
            <img className="w-[100px] " src={loadingDino} alt="Loading..." />
          </div>
        </div>
      )}

      {message && (
        <div className="fixed flex bg-black/50 w-full h-screen top-0 left-0 items-center justify-center">
          <div className="bg-[#27005D] text-[#AED2FF] w-[375px] flex flex-col items-center gap-[20px] rounded-md p-[10px]">
            <div>Create event not updated</div>
            <button
              className="flex gap-[10px] items-center justify-center"
              onClick={() => setMessage(false)}
            >
              <FaRectangleXmark />
              <p>Cancel</p>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CreateEvent;
