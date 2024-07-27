import React from "react";
import logoWeb from "../img/logoWeb.png";

function Logo() {
  return (
    <div className="flex gap-[] items-center font-bold">
      <div>
        <img className="w-[100px]" src={logoWeb} alt="" />
      </div>
      <span className="font-bold text-[20px] text-[#E4F1FF]">lo</span>
      <span className="font-bold text-[20px] text-fuchsia-300">go</span>
    </div>
  );
}

export default Logo;
