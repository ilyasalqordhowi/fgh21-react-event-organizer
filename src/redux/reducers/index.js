import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import event from "./event";
import profile from "./profile";
import bookingReducer from "./booking";
import { services } from "../services";

const reducer = combineReducers({
  auth,
  event,
  profile,
  booking: bookingReducer,
  ...services,
});

export default reducer;
