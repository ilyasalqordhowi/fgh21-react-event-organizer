import React from "react";
import Wetick from "../img/logo-wetick.png";

function Logo() {
  return (
    <div className="flex items-center font-bold">
      <div>
        <img src={Wetick}></img>
      </div>
      <span className="text-[#3366FF]">We</span>
      <span className="text-rose-600">tick</span>
    </div>
  );
}

export default Logo;
