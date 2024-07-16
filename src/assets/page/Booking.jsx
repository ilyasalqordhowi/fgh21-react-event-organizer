import React from "react";
import NavbarProfile from "../component/NavbarProfile";
import BookingOne from "../img/Booking1.png";
import Footer from "../component/Footer";
import LogoBooking from "../img/Logo-booking.png";

function Booking() {
  return (
    <div className="">
      <NavbarProfile />
      <div className="flex flex-col justify-center items-center p-[50px] bg-[#F4F7FF]">
        <div className="flex w-[1100px] gap-[46px] h-auto p-[100px] bg-white rounded-[20px] ">
          <div className="flex flex-col items-center gap-[10px]">
            <img className="w-[375px] rounded-[20px]" src={BookingOne}></img>
          </div>
          <div className="flex flex-col gap-[30px]">
            <div>
              <h1>Tickets</h1>
              <div>
                <h1 className="text-[#FC1055]">BY PRICE</h1>
                <div className="shadow-lg shadow-indigo-500/40 rounded-[10px] w-[45px] h-[45px]">
                  <img className="w-[24px]" src={LogoBooking}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Booking;
