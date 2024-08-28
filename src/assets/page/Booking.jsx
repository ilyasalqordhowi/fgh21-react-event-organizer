import React, { useEffect, useState } from "react";
import BookingOne from "../img/Booking1.png";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import LogoBooking from "../img/Logo-booking.png";
import LogoBookingOne from "../img/logo1.png";
import LogoBookingTwo from "../img/logo2.png";
import LogoBookingThree from "../img/logo3.png";
import BookingTwo from "../img/booking2.png";
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
    navigate("/sign-up");
  }

  React.useEffect(() => {
    (async function () {
      const response = await fetch(
        "http://localhost:8888/events/section/" + id,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const json = await response.json();
      const results = json.results;
      setSection(results);
    })();
    (async function () {
      const response = await fetch("http://localhost:8888/events" + "/" + id, {
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
          <div className="md:flex flex-col flex items-center w-[60%] gap-[10px]">
            <img
              className=" hidden md:flex w-full rounded-[20px]"
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
            {/* {saction.map((items) => {
              return ( */}
            {/* <div className="mb-[24px]">
              <div>
                <div className="flex items-center w-full  mt-[50px]">
                  <div className="bg-[#F1EAFF] w-[45px] p-[11px] rounded-[10px]">
                    <img src={LogoBookingOne}></img>
                  </div>
                  <div className="flex pl-[10px] gap-[96px]">
                    <div>
                      <h2>{dataBooking.name}Section reg, Row 1</h2>
                      <p className="text-white">
                        {dataBooking.quantity}12 Seats available
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <h3>{dataBooking.price}100000</h3>
                      <p className="text-white">per person</p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-center pl-[60px]  gap-[137px]">
                  <div>Quantity</div>
                  <div className="flex items-center gap-[20px]">
                    <div className="">
                      <button
                        className="bg-white shadow-lg shadow-black-500/50  p-[6px] w-[33px]  text-[#C1C5D0] flex justify-center rounded-[7px] hover:text-black"
                        onClick={minus1}
                      >
                        —
                      </button>
                    </div>
                    <div className="text-[12px]">{num1}</div>
                    <div className="">
                      <button
                        className="bg-white shadow-lg shadow-black-500/50  p-[6px] w-[33px]  text-[#C1C5D0] flex justify-center rounded-[7px] hover:text-black"
                        onClick={plus1}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center w-full  mt-[50px]">
                  <div className="bg-[#FFEAEF] w-[45px] p-[11px] rounded-[10px]">
                    <img src={LogoBookingTwo}></img>
                  </div>
                  <div className="flex pl-[10px] gap-[96px]">
                    <div>
                      <h2>{dataBooking.name}Section vip, Row 2</h2>
                      <p className="text-white">10 Seats available</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <h3>{dataBooking.price}500000</h3>
                      <p className="text-white">per person</p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-center pl-[60px]  gap-[137px]">
                  <div>Quantity</div>
                  <div className="flex items-center gap-[20px]">
                    <div className="">
                      <button
                        className="bg-white shadow-lg shadow-black-500/50  p-[6px] w-[33px]  text-[#C1C5D0] flex justify-center rounded-[7px] hover:text-black"
                        onClick={minus2}
                      >
                        —
                      </button>
                    </div>
                    <div className="text-[12px]">{num2}</div>
                    <div className="">
                      <button
                        className="bg-white shadow-lg shadow-black-500/50  p-[6px] w-[33px]  text-[#C1C5D0] flex justify-center rounded-[7px] hover:text-black "
                        onClick={plus2}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center w-full  mt-[50px]">
                  <div className="bg-[#FFF4E7] w-[45px] p-[11px] rounded-[10px]">
                    <img src={LogoBookingThree}></img>
                  </div>
                  <div className="flex pl-[10px] gap-[96px]">
                    <div>
                      <h2>{dataBooking.name}Section vvip, Row 3</h2>
                      <p className="text-white">8 Seats available</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <h3>{dataBooking.price}1000000</h3>
                      <p className="text-white">per person</p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-center pl-[60px]  gap-[137px]">
                  <div>Quantity</div>
                  <div className="flex items-center gap-[20px]">
                    <div className="">
                      <button
                        className="bg-white shadow-lg shadow-black-500/50  p-[6px] w-[33px]  text-[#C1C5D0] flex justify-center rounded-[7px] hover:text-black"
                        onClick={minus3}
                      >
                        —
                      </button>
                    </div>
                    <div className="text-[12px]">{num3}</div>
                    <div className="">
                      <button
                        className="bg-white shadow-lg shadow-black-500/50  p-[6px] w-[33px]  text-[#C1C5D0] flex justify-center rounded-[7px] hover:text-black"
                        onClick={plus3}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* );
            })} */}
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
          <div>© 2020 Wetick All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
