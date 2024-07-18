import React from "react";
import People from "../img/people.png";
import Logo from "../component/Logoo";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [pass, setPass] = React.useState("password");
  function password() {
    if (pass === "password") {
      setPass("text");
    } else {
      setPass("password");
    }
  }
  const navigate = useNavigate();
  function doLogin(event) {
    event.preventDefault();
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    if (password !== confirmPassword) {
      window.alert("salah bangsat kontollll");
    } else {
      navigate("/sign-in");
    }
  }
  return (
    <div className="flex h-[100vh]">
      <div className="bg-[#3366FF]  md:block md:w-[60%] hidden md:flex items-center md:justify-center">
        <img src={People}></img>
      </div>
      <div className=" flex items-center justify-center flex-col gap-5 p-[100px]">
        <div className="w-full">
          <Logo />
        </div>
        <div className="flex flex-col justify-center w-full">
          <h1 className="font-bold text-[20px]">Sign Up</h1>
          <div className="flex">
            <p>Already have an account?</p>
            <span className="text-[#3366FF]">Log In</span>
          </div>
        </div>
        <form className="w-full flex flex-col gap-5" onSubmit={doLogin}>
          <div className="w-full flex flex-col gap-5">
            <input
              className="w-full border  outline-none rounded-2xl p-[10px]"
              name="name"
              type="text"
              placeholder="Full Name"
            ></input>
            <input
              className="w-full border outline-none rounded-2xl p-[10px]"
              name="email"
              type="email"
              placeholder="Email"
            ></input>
            <div className="flex justify-center rounded-2xl p-[10px] border">
              <input
                className="flex-1 outline-none "
                name="password"
                type={pass}
                placeholder="Password"
              ></input>
              <button onClick={password} type="button">
                <FaEye />
              </button>
            </div>
            <div className="flex justify-center rounded-2xl p-[10px] border">
              <input
                className="flex-1 outline-none "
                name="confirmPassword"
                type={pass}
                placeholder="Confirm Password"
              ></input>
              <button onClick={password} type="button">
                <FaEye />
              </button>
            </div>
          </div>
          <div className="flex w-full gap-5">
            <input type="checkbox" className="border-sky-500"></input>
            <p>Accept terms and condition</p>
          </div>
          <button
            type="submit"
            className="bg-[#3366FF]  rounded-2xl w-full text-white h-[40px]"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
