import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import event from "./event";
import profile from "./profile";
import bookingReducer from "./booking";
import eventCategory from "./eventCategory";
import { services } from "../services";

const reducer = combineReducers({
  auth,
  event,
  profile,
  eventCategory,
  booking: bookingReducer,
  ...services,
});

export default reducer;
