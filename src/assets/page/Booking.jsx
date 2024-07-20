import React from "react";
import NavbarProfile from "../component/NavbarProfile";
import BookingOne from "../img/Booking1.png";
import Footer from "../component/Footer";
import LogoBooking from "../img/Logo-booking.png";
import LogoBookingOne from "../img/logo1.png";
import LogoBookingTwo from "../img/logo2.png";
import LogoBookingThree from "../img/logo3.png";
import BookingTwo from "../img/booking2.png";
import { Link } from "react-router-dom";

function Booking() {
  const [num1, setNum1] = React.useState(0);
  const [num2, setNum2] = React.useState(0);
  const [num3, setNum3] = React.useState(0);
  const [section, setSection] = React.useState("-");
  const [quantity1, setQuantity1] = React.useState("-");
  const [payment1, setPayment1] = React.useState("-");
  const [tampung1, setTampung1] = React.useState("");
  const [tampung2, setTampung2] = React.useState("");
  const [tampung3, setTampung3] = React.useState("");

  function plus1() {
    setSection("REG (" + (num1 + 1) + ")" + tampung2 + tampung3);
    setNum1(num1 + 1);
    setQuantity1(num1 + 1 + num2);
    setPayment1((num1 + 1) * 15 + num2 * 35 + num3 * 50);
    setTampung1("REG (" + (num1 + 1) + ")");
  }
  function plus2() {
    setSection(tampung1 + "VIP (" + (num2 + 1) + ")" + tampung3);
    setNum2(num2 + 1);
    setQuantity1(num1 + num2 + 1);
    setPayment1(num1 * 15 + (num2 + 1) * 35 + num3 * 50);
    setTampung2("VIP (" + (num2 + 1) + ")");
  }
  function plus3() {
    setSection(tampung1 + tampung2 + "VVIP (" + (num3 + 1) + ")");
    setNum3(num3 + 1);
    setQuantity1(num1 + num2 + num3 + 1);
    setPayment1(num1 * 15 + num2 * 35 + (num3 + 1) * 50);
    setTampung3("VVIP (" + (num3 + 1) + ")");
  }
  // function minus1() {
  //   setSection("REG (" + (num1 - 1) + ")" - tampung2 - tampung3);
  //   setNum1(num1 - 1);
  //   setQuantity1(num1 - 1 - num2);
  //   setPayment1((num1 - 1) * 15 - num2 * 35 - num3 * 50);
  //   setTampung1("REG (" - (num1 - 1) - ")");
  // }
  // function minus2() {
  //   setSection(tampung1 + "VIP (" + (num2 + 1) + ")" + tampung3);
  //   setNum2(num2 + 1);
  //   setQuantity1(num1 + num2 + 1);
  //   setPayment1(num1 * 15 + (num2 + 1) * 35 + num3 * 50);
  //   setTampung2("VIP (" + (num2 + 1) + ")");
  // }
  // function minus3() {
  //   setSection(tampung1 + tampung2 + "VVIP (" + (num3 + 1) + ")");
  //   setNum3(num3 + 1);
  //   setQuantity1(num1 + num2 + num3 + 1);
  //   setPayment1(num1 * 15 + num2 * 35 + (num3 + 1) * 50);
  //   setTampung3("VVIP (" + (num3 + 1) + ")");
  // }

  return (
    <div className="">
      <NavbarProfile />
      <div className="flex flex-col justify-center bg-white mt-[70px] md:mt-[0] items-center md:p-[50px] md:bg-[#F4F7FF]">
        <div className="md:flex flex flex-col md:flex-row items-center  md:w-full gap-[46px] h-auto md:p-[50px] bg-white rounded-[20px] ">
          <div className="md:flex flex-col flex items-center w-[60%] gap-[10px]">
            <img
              className=" hidden md:flex w-full rounded-[20px]"
              src={BookingOne}
            ></img>
          </div>
          <div className="md:hidden">
            <img src={BookingTwo}></img>
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
            <div className="mb-[24px]">
              <div>
                <div className="flex items-center w-full  mt-[50px]">
                  <div className="bg-[#F1EAFF] w-[45px] p-[11px] rounded-[10px]">
                    <img src={LogoBookingOne}></img>
                  </div>
                  <div className="flex pl-[10px] gap-[96px]">
                    <div>
                      <h2>Section REG, ROW 1</h2>
                      <p className="text-[#BDC0C4]">12 Seats available</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <h3>$15</h3>
                      <p className="text-[#BDC0C4]">per person</p>
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
                      <h2>Section VIP, ROW 2</h2>
                      <p className="text-[#BDC0C4]">9 Seats available</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <h3>$35</h3>
                      <p className="text-[#BDC0C4]">per person</p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-center pl-[60px]  gap-[137px]">
                  <div>Quantity</div>
                  <div className="flex items-center gap-[20px]">
                    <div className="">
                      <button
                        className="bg-white shadow-lg shadow-black-500/50  p-[6px] w-[33px]  text-[#C1C5D0] flex justify-center rounded-[7px] hover:text-black"
                        // onClick={minus2}
                      >
                        —
                      </button>
                    </div>
                    <div className="text-[12px]"></div>
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
                      <h2>Section VVIP, ROW 3 </h2>
                      <p className="text-[#BDC0C4]">6 Seats available</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <h3>$50</h3>
                      <p className="text-[#BDC0C4]">per person</p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-center pl-[60px]  gap-[137px]">
                  <div>Quantity</div>
                  <div className="flex items-center gap-[20px]">
                    <div className="">
                      <button
                        className="bg-white shadow-lg shadow-black-500/50  p-[6px] w-[33px]  text-[#C1C5D0] flex justify-center rounded-[7px] hover:text-black"
                        // onClick={minus3}
                      >
                        —
                      </button>
                    </div>
                    <div className="text-[12px]"></div>
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
            </div>
            <hr></hr>
            <div className="flex flex-col mt-[25px] w-full gap-[15px]">
              <div className="flex justify-between">
                <div className="font-bold">Ticket Section</div>
                <div className="text-blue-500">{section}</div>
              </div>
              <div className="flex justify-between">
                <div className="font-bold">Quantity</div>
                <div className="text-blue-500">{quantity1}</div>
              </div>
              <div className="flex justify-between">
                <div className="font-bold">Total Payment</div>
                <div className="text-blue-500">{payment1}$</div>
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
