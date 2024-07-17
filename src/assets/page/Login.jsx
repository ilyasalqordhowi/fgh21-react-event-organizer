import React from "react";
import People from "../img/people.png";
import Logo from "../component/Logoo";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  function doLogin(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const password = event.target.password.value;
    const email = event.target.email.value;
    const confirmPassword = event.target.confirmPassword.value;
    if (
      name === "Admin" &&
      email === "Admin@mail.com" &&
      password === "Admin1234" &&
      confirmPassword === "Admin123"
    ) {
      window.alert("benar");
      navigate("/");
    } else {
      window.alert("salah");
    }
  }

  return (
    <div className="flex h-[100vh]">
      <div className="bg-[#3366FF] w-8/12 flex items-center justify-center">
        <img src={People}></img>
      </div>
      <div className="w-4/12 flex items-center justify-center flex-col gap-5 p-[100px]">
        <div className="w-full">
          <Logo />
        </div>
        <div className="flex flex-col justify-center w-full">
          <h1 className="font-bold font">Sign Up</h1>
          <div className="flex">
            <p>Already have an account?</p>
            <span className="text-[#3366FF]">Log In</span>
          </div>
        </div>
        <form onSubmit={doLogin}>
          <div className="w-full flex flex-col gap-5">
            <input
              className="w-full border rounded-2xl p-[10px]"
              name="name"
              type="text"
              placeholder="Full Name"
            ></input>
            <input
              className="w-full border rounded-2xl p-[10px]"
              name="email"
              type="email"
              placeholder="Email"
            ></input>
            <input
              className="w-full border rounded-2xl p-[10px]"
              name="password"
              type="password"
              placeholder="Password"
            ></input>
            <input
              className="w-full border rounded-2xl p-[10px]"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            ></input>
          </div>
          <div className="flex w-full gap-5">
            <input type="checkbox" className="border-sky-500"></input>
            <p>Accept terms and condition</p>
          </div>
          <button
            type="button"
            className="bg-[#3366FF] rounded-2xl w-full text-white h-[40px]"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
