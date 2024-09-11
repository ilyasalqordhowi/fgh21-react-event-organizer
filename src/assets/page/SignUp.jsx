import React from "react";
import People from "../img/peopleWeb.png";
import Logo from "../component/Logoo";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import loadingDino from "../img/dino.gif";
import { FaRectangleXmark } from "react-icons/fa6";
import { data } from "autoprefixer";

function SignUp() {
  const navigate = useNavigate();

  const [pass, setPass] = React.useState("password");
  const [confPass, setConfPass] = React.useState("password");
  const [alert, setAlert] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");

  function password() {
    if (pass === "password") {
      setPass("text");
    } else {
      setPass("password");
    }
  }
  function confPassword() {
    if (confPass === "password") {
      setConfPass("text");
    } else {
      setConfPass("password");
    }
  }
  function signUp(event) {
    event.preventDefault();
    const fullName = event.target.fullname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    console.log(fullName);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);

    const formData = new URLSearchParams();
    formData.append("full_name", fullName);
    formData.append("email", email);
    formData.append("password", password);
    setLoading(true);
    const dataRegis = fetch("http://localhost:8888/auth/register", {
      method: "POST",
      body: formData,
    });
    if (password != confirmPassword) {
      setLoading(false);
      setMessage(dataRegis.message);
      setAlert(true);
    } else {
      navigate("/sign-in");
    }
  }

  return (
    <div className="flex bg-[#9400FF] h-[100vh]">
      <div className="bg-[#27005D] w-full md:block hidden md:flex items-center md:justify-center">
        <img src={People}></img>
      </div>
      <div className=" flex items-center md:w-[40%] w-full justify-center flex-col gap-5 p-[100px]">
        <div className="w-full">
          <Logo />
        </div>
        <div className="flex flex-col justify-center w-full">
          <h1 className="font-bold text-[#E4F1FF] text-[20px]">Sign Up</h1>
          <div className="flex gap-[10px]">
            <p className="text-white">Already have an account?</p>
            <Link to="/sign-in">
              <span className="text-[#27005D]">Log In</span>
            </Link>
          </div>
        </div>
        <form className="w-full flex flex-col gap-5" onSubmit={signUp}>
          <div className="w-full flex flex-col gap-5">
            <input
              className="w-full border  outline-none rounded-2xl p-[10px]"
              name="fullname"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="w-full border outline-none rounded-2xl p-[10px]"
              name="email"
              type="email"
              placeholder="Email"
            />
            <div className="flex justify-center bg-white rounded-2xl p-[10px] border">
              <input
                className="flex-1 w-full outline-none "
                name="password"
                type={pass}
                placeholder="Password"
              ></input>
              <button onClick={password} type="button">
                <FaEye />
              </button>
            </div>
            <div className="flex justify-center bg-white rounded-2xl p-[10px] border">
              <input
                className="flex-1 w-full outline-none "
                name="confirmPassword"
                type={confPass}
                placeholder="Confirm Password"
              />
              <button onClick={confPassword} type="button">
                <FaEye />
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#3366FF]  rounded-2xl w-full text-white h-[40px]"
          >
            Sign Up
          </button>
        </form>
      </div>
      {alert ? (
        <div className="absolute flex bg-black/50 w-full h-screen top-0 left-0 items-center justify-center">
          <div className="bg-[#27005D] text-[#AED2FF] w-[375px] flex flex-col items-center gap-[20px] rounded-md p-[10px]">
            <div>password yang anda masukkan salah</div>
            <button
              className="flex gap-[10px] items-center justify-center"
              onClick={() => setAlert()}
            >
              <FaRectangleXmark />
              <p>Cancel</p>
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      {loading ? (
        <div className="absolute flex bg-black/50 w-full h-screen top-0 left-0 items-center justify-center">
          <div className="bg-[#AED2FF] flex items-center gap-[20px] rounded-md p-[10px]">
            <img className="w-[100px] " src={loadingDino}></img>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SignUp;
