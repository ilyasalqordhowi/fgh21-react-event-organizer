import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import LogoPaymentOne from "../img/payment1.png";
import LogoPaymentTwo from "../img/payment2.png";
import LogoPaymentThree from "../img/payment3.png";
import LogoPaymentFour from "../img/payment4.png";
import Card from "../img/card.png";
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Payment() {
  const [card, setCard] = React.useState(true);
  function btnCard() {
    if (card === true) {
      setCard(false);
    } else {
      setCard(true);
    }
  }
  // const [ArrCard, setArrCard] = React.useState(true);
  // function btnArrow() {
  //   if (ArrCard === true) {
  //     setArrCard(false);
  //   } else {
  //     setArrCard(true);
  //   }
  // }
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
                    <input type="radio" name="method"></input>
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

                <button className="border border-2 border-white border-dashed bg-[#27005D] shadow-lg shadow-black-500/50  p-[6px] w-[33px]  text-white font-bold flex justify-center rounded-[7px]">
                  +
                </button>
              </div>
              <div className="flex flex-col mt-[40px] gap-[40px]">
                <div className="flex justify-between w-full items-center">
                  <div className="flex gap-[15px] items-center">
                    <div className="flex gap-[15px]">
                      <input type="radio" name="method"></input>
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
                      <input type="radio" name="method"></input>
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
                      <input type="radio" name="method"></input>
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
                <div className="text-blue-500">Sights & Sounds Exhibition</div>
              </div>
              <div className="flex justify-between">
                <div className="font-bold">Ticket Section</div>
                <div className="text-blue-500">VIP</div>
              </div>
              <div className="flex justify-between">
                <div className="font-bold">Quantity</div>
                <div className="text-blue-500">2</div>
              </div>
              <div className="flex justify-between">
                <div className="font-bold">Total Payment</div>
                <div className="text-blue-500">$70</div>
              </div>
            </div>
            <Link to="/my-booking">
              <div className="mt-[50px] bg-blue-500 w-fullfont-bold flex items-center justify-center text-white rounded-[15px] p-[20px]">
                <button>Checkout</button>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col  md: gap-[144px]">
          <Footer />
          <div className="p-[10px]">© 2020 Wetick All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
