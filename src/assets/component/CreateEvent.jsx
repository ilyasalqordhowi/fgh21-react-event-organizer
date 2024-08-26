import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function CreateEvent() {
  const datatoken = useSelector((state) => state.auth.token);
  const [create, setCreate] = React.useState(true);
  function btnCreate() {
    if (create === true) {
      setCreate(false);
    } else {
      setCreate(true);
    }
  }
  async function createEvent(event) {
    event.preventDefault();

    const nameEvent = event.target.nameEvent.value;
    // const categoryEvent = event.target.category.value;
    const locationEvent = event.target.location.value;
    const dateEvent = event.target.date.value;
    const priceEvent = event.target.price.value;
    const imageEvent = event.target.image.value;
    const detailEvent = event.target.detail.value;

    console.log(nameEvent);
    console.log(locationEvent);
    console.log(dateEvent);
    console.log(priceEvent);
    console.log(imageEvent);
    console.log(detailEvent);

    const formData = new URLSearchParams();
    formData.append("image", imageEvent);
    formData.append("title", nameEvent);
    // formData.append("title", categoryEvent);
    formData.append("date", dateEvent);
    formData.append("descriptions", detailEvent);

    const dataNew = await fetch("http://localhost:8888/events", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + datatoken,
      },
      body: formData,
    });
    console.log(dataNew);
    const response = await dataNew.json();
    if (response.success) {
      window.alert("Success Updated");
    } else {
      window.alert("tidak berhasil");
    }
  }
  createEvent;
  return (
    <div
      className={
        create
          ? "absolute flex items-center justify-center bg-black/25 w-full h-screen top-0"
          : ""
      }
    >
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
            <div className="w-1/2">
              <label htmlFor="name" className="mb-[10px]">
                Image
              </label>
              <div>
                <input
                  type="text"
                  name="image"
                  id="name"
                  placeholder="Chose File ..."
                  className="h-[55px] border-2 w-full pl-[20px] pr-[20px] rounded-[15px] mb-[30px]"
                />
              </div>
            </div>
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
  );
}

export default CreateEvent;
