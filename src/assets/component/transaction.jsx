import React, { useEffect, useState } from "react";
import LogoBookingOne from "../img/logo1.png";

function Transactions(props) {
  const [num, setNum] = useState(0);
  useEffect(() => {
    const current = props.currentData;
    current[props.index] = {
      id: props.data.id,
      name: props.data.name,
      price: num * props.data.price,
      quantity: num,
    };
    props.onChange([...current]);
  }, [num]);
  return (
    <div className="flex w-full items-start gap-2">
      <div className="flex flex-col gap-4 py-[25px]">
        <div className="flex gap-12">
          <div className="flex gap-4">
            <div className="w-[45px] h-[45px]">
              <img src={LogoBookingOne} alt="" />
            </div>
            <div>
              <div className="font-semibold">
                SECTION {props.data.name}, ROW 1
              </div>
              <div className="text-gray-500">
                {props.data.quantity} Seats available
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-semibold">
              Rp{props.data.price.toLocaleString("id")}
            </div>
            <div className="text-gray-500">per person</div>
          </div>
        </div>
        <div className="flex items-center pl-16 justify-between">
          <div className="font-semibold">Quantity</div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => num > 0 && setNum(num - 1)}
              className="border border-gray-500 w-[30px] h-[30px] rounded-lg"
            >
              -
            </button>
            <div className="font-semibold">{num}</div>
            <button
              onClick={() => num < 10 && setNum(num + 1)}
              className="border border-gray-500 w-[30px] h-[30px] rounded-lg"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
