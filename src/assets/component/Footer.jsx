import React from "react";
import Logo from "./Logoo";
import Instagram from "../img/instagram.png";
import Facebook from "../img/facebook.png";
import Whatsapp from "../img/whatsapp.png";
import Twitter from "../img/twitter.png";

function Footer() {
  return (
    <div className="flex flex-col bg-[#27005D] gap-36">
      <div className="flex flex-col p-[10px] bg-[27005D]  md:flex-row gap-[100px] md:flex mt-[170px] w-full justify-center md:gap-[200px]">
        <div>
          <Logo />
          <div>Find events you love with our</div>
          <div className="flex  gap-[10px]">
            <img src={Facebook}></img>
            <img src={Whatsapp}></img>
            <img src={Instagram}></img>
            <img src={Twitter}></img>
          </div>
        </div>
        <div className="text-[#C1C5D0] flex flex-col  gap-[10px]">
          <h1 className="text-black font-bold">SnagTick</h1>
          <div>About Us</div>
          <div>Blog</div>
          <div>Payment</div>
          <div>Mobile App</div>
        </div>
        <div className="text-[#C1C5D0] flex flex-col  gap-[10px]">
          <h1 className="font-bold text-black">Features</h1>
          <div>Booking</div>
          <div>Create Event</div>
          <div>Discover</div>
          <div>Register</div>
        </div>
        <div className="text-[#C1C5D0] flex flex-col  gap-[10px]">
          <h1 className="font-bold text-black">Company</h1>
          <div>Partnership</div>
          <div>Help</div>
          <div>Terms of Service</div>
          <div>Privacy Policy</div>
          <div>Sitemap</div>
        </div>
      </div>
      <div className="flex p-[10px] justify-center">
        © 2024 SnagTick All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
