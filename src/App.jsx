import React from "react";
import Login from "../src/assets/page/Login";
import Home from "../src/assets/page/Home";
import Event from "./assets/page/Event";
import Booking from "./assets/page/Booking";
import Payment from "./assets/page/Payment";
import Profile from "./assets/page/Profile";
import ChangePassword from "./assets/page/ChangePassword";
import MyBooking from "./assets/page/MyBooking";
import MyWihslist from "./assets/page/MyWihslist";
import ManageEvent from "./assets/page/ManageEvent";
import CreateEvent from "./assets/component/CreateEvent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const page = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Event />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/profile",
    element: <Profile />,
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
  return <RouterProvider router={page} />;
}

export default App;
