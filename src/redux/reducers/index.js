import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import event from "./event";
import profile from "./profile";
import booking from "./booking";

const reducer = combineReducers({
  auth,
  event,
  profile,
  booking,
});

export default reducer;
