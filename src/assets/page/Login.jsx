import React from "react";
import People from "../img/people.png";
import Logo from "../component/Logoo";
import GoogleOne from "../img/google2.png";
import FacebookTWo from "../img/facebook2.png";
import { FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [pass, setPass] = React.useState("password");
  function password() {
    if (pass === "password") {
      setPass("text");
    } else {
      setPass("password");
    }
  }
  function doLogin(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const password = event.target.password.value;
    const email = event.target.email.value;

    if (
      name === "Admin" &&
      email === "Admin@mail.com" &&
      password === "Admin1234"
    ) {
      navigate("/");
    } else {
      window.alert("salah");
    }
  }

  return (
    <div className="flex  h-[100vh]">
      <div className="bg-[#3366FF]  md:block md:w-[60%] hidden md:flex items-center md:justify-center">
        <img src={People}></img>
      </div>
      <div className=" flex items-center md:w-[30%] justify-center flex-col gap-5 p-[100px]">
        <div className="w-full">
          <Logo />
        </div>
        <div className="flex flex-col justify-center w-full">
          <h1 className="font-bold  text-[20px]">Sign In</h1>
          <div className="flex">
            <p>Hi, Welcome back to Urticket! </p>
          </div>
        </div>
        <form className="w-full flex flex-col gap-5" onSubmit={doLogin}>
          <div className="w-full flex flex-col gap-5">
            <input
              className="w-full outline-none border rounded-2xl p-[10px]"
              name="name"
              type="text"
              placeholder="Full Name"
            ></input>
            <input
              className="w-full outline-none border rounded-2xl p-[10px]"
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
          </div>
          <div className="flex justify-end text-[#3366FF]">
            Forgot Password?
          </div>
          <button
            type="submit"
            className="bg-[#3366FF]  rounded-2xl w-full text-white h-[40px]"
          >
            Sign In
          </button>
        </form>
        <div className="flex flex-col justify-center items-center gap-[20px]">
          <div>or sign in with</div>
          <div className="flex gap-[16px]">
            <a href="https://accounts.google.com">
              <button className="border border-2 border-sky-500 w-[96px] flex justify-center p-[10px] rounded-[6px]">
                <img src={GoogleOne}></img>
              </button>
            </a>
            <a href="https://www.facebook.com/login.php">
              <button className="border border-2 border-sky-500 w-[96px] flex justify-center p-[10px] rounded-[6px]">
                <img src={FacebookTWo}></img>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
