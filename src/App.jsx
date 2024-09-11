import React from "react";
import SignUp from "./assets/page/SignUp";
import Home from "../src/assets/page/Home";
import Event from "./assets/page/Event";
import Booking from "./assets/page/Booking";
import Payment from "./assets/page/Payment";
import EditProfile from "./assets/page/EditProfile.jsx";
import ChangePassword from "./assets/page/ChangePassword";
import MyBooking from "./assets/page/MyBooking";
import MyWihslist from "./assets/page/MyWihslist";
import ManageEvent from "./assets/page/ManageEvent";
import CreateEvent from "./assets/component/CreateEvent";
import Login from "./assets/page/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { ImPointDown } from "react-icons/im";

const page = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail/:id",
    element: <Event />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/events/section/:id",
    element: <Booking />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/editProfile",
    element: <EditProfile />,
  },

  {
    path: "/change-password",
    element: <ChangePassword />,
  },
  {
    path: "/my-booking",
    element: <MyBooking />,
  },
  {
    path: "/my-wihslist",
    element: <MyWihslist />,
  },
  {
    path: "/manage-event",
    element: <ManageEvent />,
  },
  {
    path: "/create-event",
    element: <CreateEvent />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={page} />
    </Provider>
  );
}

export default App;
