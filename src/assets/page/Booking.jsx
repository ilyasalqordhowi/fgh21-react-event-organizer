import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import LogoBooking from "../img/Logo-booking.png";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addQty,
  addEventId,
  addEventTitle,
  addTotalPayment,
  addTicketSection,
  addSectionId,
  addQuantity,
} from "../../redux/reducers/booking";
import Transactions from "../component/transaction";

function Booking() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();
  const [section, setSection] = React.useState([]);
  const [event, setEvent] = React.useState([]);
  console.log(event);

  const token = useSelector((state) => state.auth.token);
  if (token === null) {
    navigate("/sign-in");
  }

  React.useEffect(() => {
    (async function () {
      const response = await fetch(
        `http://103.93.58.89:21213/events/section/` + id,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const json = await response.json();
      console.log(json, "ini result section");
      const results = json.results;
      setSection(results);
    })();
    (async function () {
      const response = await fetch(`http://103.93.58.89:21213/events/` + id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const json = await response.json();
      const results = json.results;
      console.log(json, "hai");
      setEvent(results);
    })();
  }, []);

  const [selectedSections, setSelectedSections] = useState([]);

  const ticketSection = selectedSections.reduce((prev, curr) => {
    const arr = prev;
    if (curr.quantity !== 0) {
      arr.push(`${curr.name}(${curr.quantity})`);
    }
    return arr;
  }, []);
  const quantity = selectedSections.reduce(
    (prev, curr) => prev + curr.quantity,
    0
  );
  const price = selectedSections.reduce((prev, curr) => prev + curr.price, 0);

  const sectionId = selectedSections.reduce((prev, curr) => {
    const arr = prev;
    if (curr.quantity !== 0) {
      arr.push(curr.id);
    }
    return arr;
  }, []);
  const quantityArray = selectedSections.reduce((prev, curr) => {
    const arr = prev;
    if (curr.quantity !== 0) {
      arr.push(curr.quantity);
    }
    return arr;
  }, []);

  dispatch(addQuantity(quantityArray));
  dispatch(addQty(quantity));
  dispatch(addEventId(id));
  dispatch(addSectionId(sectionId));
  dispatch(addTotalPayment(price));
  dispatch(addTicketSection(ticketSection));
  dispatch(addEventTitle(event.title));

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col justify-center   md:mt-[0] items-center md:p-[50px] bg-[#27005D]">
        <div className="md:flex flex flex-col md:flex-row items-center p-[50px]  md:w-full gap-[46px] h-auto md:p-[50px] bg-[#AED2FF] w-full md:rounded-[20px] ">
          <div className="md:flex flex-col flex items-center w-1/2 gap-[10px]">
            <img
              className="object-cover hidden md:flex w-1/2 rounded-[20px]"
              src={event.image}
            ></img>
          </div>
          <div className="md:hidden">
            <img src={event.image}></img>
          </div>
          <div className="flex flex-col  justify-center md:w-[40%]">
            <div className="flex gap-[100px] md:gap-[200px]">
              <h1 className="font-bold text-[40px]">Tickets</h1>
              <div className="flex gap-[11px] items-center ">
                <h1 className="text-[#FC1055]">BY PRICE</h1>
                <div className="shadow-lg shadow-indigo-500/40 rounded-[10px] flex flex-col items-center justify-center w-[45px] h-[45px]">
                  <img className="" src={LogoBooking}></img>
                </div>
              </div>
            </div>
            {section.map((item, index) => {
              console.log(item, "ini item");
              console.log(`{plus${item.id}}`);
              return (
                <Transactions
                  key={item.id}
                  data={item}
                  index={index}
                  currentData={selectedSections}
                  onChange={setSelectedSections}
                />
              );
            })}
            <hr></hr>
            <div className="flex flex-col mt-[25px] w-full gap-[15px]">
              <div className="flex justify-between">
                <div className="font-bold">Ticket Section</div>
                <div className="text-blue-500">
                  {ticketSection.length == 0 ? "-" : ticketSection.join(", ")}
                </div>
              </div>
              <div className="flex justify-between">
                <div className="font-bold">Quantity</div>
                <div className="text-blue-500">
                  {quantity === 0 ? "-" : quantity}
                </div>
              </div>
              <div className="flex justify-between">
                <div className="font-bold">Total Payment</div>
                <div className="text-blue-500">
                  {price === 0 ? "-" : `Rp. ${price.toLocaleString("id")}`}
                </div>
              </div>
            </div>
            <Link to="/payment">
              <div className="mt-[50px]  bg-blue-500 md:w-[315px] font-bold flex items-center justify-center text-white rounded-[15px] p-[20px]">
                <button>Checkout</button>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col  gap-[144px]">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Booking;
