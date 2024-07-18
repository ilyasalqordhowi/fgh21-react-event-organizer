import React from "react";
import NavbarProfile from "../component/NavbarProfile";
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
  return (
    <div className="">
      <NavbarProfile />
      <div className="flex flex-col justify-center items-center p-[50px] bg-[#F4F7FF]">
        <div className="flex w-full gap-[46px] h-auto p-[70px] bg-white rounded-[20px] ">
          <div className="flex flex-col  w-[50%] gap-[10px]">
            <h1 className="text-[30px] mb-[50px] font-bold">Payment Method</h1>
            <div className="w-full">
              <div className="flex gap-[162px] w-full items-center">
                <div className="flex gap-[15px] items-center">
                  <div className="flex gap-[15px]">
                    <input type="radio"></input>
                    <div className="flex justify-center rounded-[10px] p-[10px] h-[45px] w-[45px] bg-[#884DFF33]">
                      <img src={LogoPaymentOne}></img>
                    </div>
                  </div>
                  <h2>Card</h2>
                </div>
                <FaChevronUp className="text-gray-400" />
              </div>
              <div className="flex items-center gap-[15px] mt-[15px] ml-[30px]">
                <img src={Card}></img>
                <div className="border border-2 border-sky-500 border-dashed bg-white shadow-lg shadow-black-500/50  p-[6px] w-[33px]  text-blue-500 font-bold flex justify-center rounded-[7px]">
                  <button>+</button>
                </div>
              </div>
              <div className="flex flex-col mt-[40px] gap-[40px]">
                <div className="flex gap-[162px] w-full items-center">
                  <div className="flex gap-[15px] items-center">
                    <div className="flex gap-[15px]">
                      <input type="radio"></input>
                      <div className="flex justify-center rounded-[10px] p-[10px] h-[45px] w-[45px] bg-[#FC105533]">
                        <img src={LogoPaymentTwo}></img>
                      </div>
                    </div>
                    <h2>Card</h2>
                  </div>
                  <FaChevronDown className="text-gray-400" />
                </div>
                <div className="flex gap-[162px] w-full items-center">
                  <div className="flex gap-[15px] items-center">
                    <div className="flex gap-[15px]">
                      <input type="radio"></input>
                      <div className="flex justify-center rounded-[10px] p-[10px] h-[45px] w-[45px] bg-[#FF890033]">
                        <img src={LogoPaymentThree}></img>
                      </div>
                    </div>
                    <h2>Card</h2>
                  </div>
                  <FaChevronDown className="text-gray-400" />
                </div>
                <div className="flex gap-[162px] w-full items-center">
                  <div className="flex gap-[15px] items-center">
                    <div className="flex gap-[15px]">
                      <input type="radio"></input>
                      <div className="flex justify-center rounded-[10px] p-[10px] h-[45px] w-[45px] bg-[#3366FF33]">
                        <img src={LogoPaymentFour}></img>
                      </div>
                    </div>
                    <h2>Card</h2>
                  </div>
                  <FaChevronDown className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="w-[50%]">
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
            <Link to="/payment">
              <div className="mt-[50px] bg-blue-500 w-fullfont-bold flex items-center justify-center text-white rounded-[15px] p-[20px]">
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

export default Payment;
