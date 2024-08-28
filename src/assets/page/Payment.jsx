import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import LogoPaymentOne from "../img/payment1.png";
import LogoPaymentTwo from "../img/payment2.png";
import LogoPaymentThree from "../img/payment3.png";
import LogoPaymentFour from "../img/payment4.png";
import Card from "../img/card.png";
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

function Payment() {
  const [card, setCard] = React.useState(true);
  function btnCard() {
    if (card === true) {
      setCard(false);
    } else {
      setCard(true);
    }
  }
  const navigate = useNavigate();

  const datatoken = useSelector((state) => state.auth.token);
  if (datatoken === null) {
    navigate("/sign-in");
  }

  const eventTitle = useSelector((state) => state.booking.eventTitle);
  const qty = useSelector((state) => state.booking.qty);
  const eventId = useSelector((state) => state.booking.eventId);
  const totalPayment = useSelector((state) => state.booking.totalPayment);
  const ticketSection = useSelector((state) => state.booking.ticketSection);
  const sectionId = useSelector((state) => state.booking.sectionId);
  const quan = useSelector((state) => state.booking.quantity);
  const [payMethod, setPayMethod] = React.useState(0);
  function tooglePayment(event) {
    setPayMethod(event.target.value);
  }

  const id = Math.ceil(Math.random() * 100000000);
  const body = JSON.stringify({
    user_id: Math.ceil(Math.random() * 100),
    amount: parseInt(totalPayment),
    item_id: `PROD${id}`,
    item_name: eventTitle,
  });

  const formData = new URLSearchParams({
    eventId: parseInt(eventId),
    paymentId: parseInt(payMethod),
    sectionId: parseInt(sectionId),
    ticketQuantity: parseInt(quan),
  });
  for (const value of formData.values()) {
    console.log(value);
  }
  async function payment() {
    try {
      const response = await fetch("http://localhost:8888/transactions", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: "Bearer " + datatoken,
        },
      });
      console.log(response, "test");
    } catch (error) {
      console.error("Error to proceed data");
      navigate("/sign-up");
      return;
    }
    navigate("/my-booking");
  }
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col justify-center items-center md:p-[50px] bg-[#27005D]">
        <div className="md:flex flex-row w-full gap-[46px] h-auto p-[70px] bg-[#AED2FF] md:rounded-[20px] ">
          <div className="flex flex-col  md:w-[50%] gap-[10px]">
            <h1 className="text-[30px] mb-[50px] font-bold">Payment Method</h1>
            <div className="w-full">
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-[15px] items-center">
                  <div className="flex gap-[15px]">
                    <input
                      type="radio"
                      name="method"
                      value={1}
                      onChange={tooglePayment}
                    ></input>
                    <div className="flex justify-center rounded-[10px] p-[10px] h-[45px] w-[45px] bg-[#884DFF33]">
                      <img src={LogoPaymentOne}></img>
                    </div>
                  </div>
                  <h2>Card</h2>
                </div>
                {card ? (
                  <button>
                    <FaChevronUp
                      className="text-gray-400"
                      type="button"
                      onClick={btnCard}
                    />
                  </button>
                ) : (
                  <button>
                    <FaChevronDown
                      className="text-gray-400"
                      type="button"
                      onClick={btnCard}
                    />
                  </button>
                )}
              </div>
              <div
                className={
                  card
                    ? "flex items-center gap-[15px] mt-[15px] ml-[30px]"
                    : "hidden"
                }
              >
                <img src={Card}></img>

                <button className="border-2 border-white border-dashed bg-[#27005D] shadow-lg shadow-black-500/50  p-[6px] w-[33px]  text-white font-bold flex justify-center rounded-[7px]">
                  +
                </button>
              </div>
              <div className="flex flex-col mt-[40px] gap-[40px]">
                <div className="flex justify-between w-full items-center">
                  <div className="flex gap-[15px] items-center">
                    <div className="flex gap-[15px]">
                      <input
                        type="radio"
                        name="method"
                        value={2}
                        onChange={tooglePayment}
                      ></input>
                      <div className="flex justify-center rounded-[10px] p-[10px] h-[45px] w-[45px] bg-[#FC105533]">
                        <img src={LogoPaymentTwo}></img>
                      </div>
                    </div>
                    <h2>Bank Transfer</h2>
                  </div>
                  <button>
                    <FaChevronDown className="text-gray-400" />
                  </button>
                </div>
                <div className="flex justify-between w-full items-center">
                  <div className="flex gap-[15px] items-center">
                    <div className="flex gap-[15px]">
                      <input
                        type="radio"
                        name="method"
                        value={2}
                        onChange={tooglePayment}
                      ></input>
                      <div className="flex justify-center rounded-[10px] p-[10px] h-[45px] w-[45px] bg-[#FF890033]">
                        <img src={LogoPaymentThree}></img>
                      </div>
                    </div>
                    <h2>Retail</h2>
                  </div>
                  <button>
                    <FaChevronDown className="text-gray-400" />
                  </button>
                </div>
                <div className="flex justify-between w-full items-center">
                  <div className="flex gap-[15px] items-center">
                    <div className="flex gap-[15px]">
                      <input
                        type="radio"
                        name="method"
                        value={2}
                        onChange={tooglePayment}
                      ></input>
                      <div className="flex justify-center rounded-[10px] p-[10px] h-[45px] w-[45px] bg-[#3366FF33]">
                        <img src={LogoPaymentFour}></img>
                      </div>
                    </div>
                    <h2>E-Money</h2>
                  </div>
                  <button>
                    <FaChevronDown className="text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="md:w-[50%]">
            <h2 className="text-[30px] mb-[50px] font-bold">Ticket Detail</h2>
            <div className="flex flex-col mt-[25px] w-full gap-[15px]">
              <div className="flex justify-between">
                <div className="font-bold">Event</div>
                <div className="text-blue-500">
                  {eventId === 0 ? "-" : eventTitle}
                </div>
              </div>
              <div className="flex justify-between">
                <div className="font-bold">Ticket Section</div>
                <div className="text-blue-500">
                  {ticketSection.length === 0 ? "-" : ticketSection.join(", ")}
                </div>
              </div>
              <div className="flex justify-between">
                <div className="font-bold">Quantity</div>
                <div className="text-blue-500">{qty === 0 ? "-" : qty}</div>
              </div>
              <div className="flex justify-between">
                <div className="font-bold">Total Payment</div>
                <div className="text-blue-500">
                  {totalPayment === 0
                    ? "-"
                    : `Rp.${totalPayment.toLocaleString("id")}`}
                </div>
              </div>
            </div>
            <Link to="/my-booking">
              <div className="mt-[50px] bg-blue-500 w-fullfont-bold flex items-center justify-center text-white rounded-[15px] p-[20px]">
                <button onClick={payment}>Checkout</button>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col  md: gap-[144px]">
          <Footer />
          <div className="p-[10px]">© 2020 Wetick All Rights Reserved</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
