import React from "react";
import Logo from "./Logoo";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/reducers/auth";
import { addProfile } from "../../redux/reducers/profile";

function Navbar() {
  const [navbar, setNavbar] = React.useState(true);
  function btnNav() {
    if (navbar === true) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  }
  const dispatch = useDispatch();
  const forms = useSelector((state) => state.auth.token);
  console.log(forms);

  dispatch(login(forms));
  const profile = useSelector((state) => state.profile.data);

  return (
    <div className="flex md:flex-row text-[#E4F1FF] bg-[#9400FF] flex-col justify-between md:p-[10px]  ">
      <div className="flex items-center justify-between ">
        <Logo />
        <button className="md:hidden" type="button" onClick={btnNav}>
          <FaBars />
        </button>
      </div>
      <div className={navbar ? "hidden md:flex gap-[300px]" : ""}>
        <div className="md:flex md:flex-row list-none flex flex-col items-center gap-5">
          <Link to="/">
            <li className="hover:text-blue-400 hover:underline flex gap-[10px]">
              Home
            </li>
          </Link>
          <Link to="/manage-event">
            <li className="hover:text-blue-400 hover:underline flex gap-[10px]">
              Create Event
            </li>
          </Link>
          <li className="hover:text-blue-400 hover:underline flex gap-[10px]">
            Location
          </li>
        </div>
      </div>
      <div className={navbar ? "hidden md:flex gap-[300px]" : ""}>
        <div
          className={
            forms
              ? "hidden"
              : "gap-5 md:flex w-full  flex-col md:flex-row items-center"
          }
        >
          <div className=" gap-5 md:flex w-full  flex-col md:flex-row items-center">
            <Link to="/sign-in">
              <div className="bg-[#FFFBF5] text-center text-black font-bold p-[10px]  md:w-[100px] md:rounded-2xl ">
                <button>Log in</button>
              </div>
            </Link>
            <Link to="/sign-up">
              <div className=" bg-[#3366FF] w-full  md:w-[150px] font-bold  text-white md:rounded-2xl text-center p-[10px]">
                <button>Sign Up</button>
              </div>
            </Link>
          </div>
        </div>
        <div
          className={
            forms ? "flex  md:flex-row justify-center items-center" : "hidden"
          }
        >
          <Link to="/editProfile">
            {/* <div className="flex gap-5 w-full items-center">
              <img
                className="w-[100px] rounded-full"
                src={profile.profile[0].picture}
              />
              <div>{profile.profile[0].name}</div>
            </div> */}
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
