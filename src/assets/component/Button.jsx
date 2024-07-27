import React from "react";
import { Link } from "react-router-dom";

function Button() {
  return (
    <div>
      <button type="button" class="bg-indigo-500 ..." disabled>
        <svg
          class="motion-reduce:hidden animate-spin ..."
          viewBox="0 0 24 24"
        ></svg>
        Processing...
      </button>
    </div>
  );
}
export default Button;
