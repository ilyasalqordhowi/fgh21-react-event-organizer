import React from "react";

function Counter(props) {
  return (
    <div className="flex justify-center">
      <div className="flex bg-blue-400">
        <div className="bg-red-400">
          <button onClick={props.minus}>-</button>
        </div>
        <div>{props.num}</div>
        <div>
          <button onClick={props.plus}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
