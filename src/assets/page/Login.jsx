import React from "react";
import People from "../img/peopleWeb.png";
import Logo from "../component/Logoo";
import { FaEye } from "react-icons/fa6";

import { Link, useParams } from "react-router-dom";
import { FaRectangleXmark } from "react-icons/fa6";
import { Provider, useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/reducers/auth";
import loadingDino from "../img/dino.gif";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { addProfile } from "../../redux/reducers/profile";
import { data } from "autoprefixer";

function Login() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [alert, setAlert] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [pass, setPass] = React.useState("password");
  function password() {
    if (pass === "password") {
      setPass("text");
    } else {
      setPass("password");
    }
  }
  const dispatch = useDispatch();
  const forms = useSelector((state) => state.auth.token);

  async function doLogin(event) {
    event.preventDefault();

    const password = event.target.password.value;
    const email = event.target.email.value;

    setLoading(true);
    const formData = new URLSearchParams();
    formData.append("password", password);
    formData.append("email", email);
    fetch("http://localhost:8888/auth/login", {
      method: "POST",
      body: formData,
    }).then((response) => {
      response.json().then((data) => {
        if (data.success) {
          dispatch(login(data.results.token));
          async function dataUpdate() {
            const response = await fetch("http://localhost:8888/profile/", {
              headers: {
                Authorization: "Bearer " + data.results.token,
              },
            });
            const json = await response.json();
            console.log(json);

            dispatch(addProfile(json.results));
          }
          dataUpdate();
          navigate("/");
        } else {
          setLoading(false);
          setMessage(data.message);
          setAlert(true);
          // window.alert;
          // window.alert(data.message);
        }
      });
    });
  }

  return (
    <div className="flex w-full bg-[#9400FF] h-[100vh]">
      <div className="flex w-full h-[100vh]">
        <div className="bg-[#27005D]  md:block w-full hidden md:flex items-center md:justify-center">
          <img src={People}></img>
        </div>
        <div className=" flex items-center md:w-[40%] w-full justify-center flex-col gap-5 p-[100px]">
          <div className="w-full">
            <Logo />
          </div>
          <div className="flex flex-col justify-center w-full">
            <h1 className="font-bold text-[#BBE9FF] text-[20px]">Sign In</h1>
            <div className="flex text-[#E4F1FF]">
              <p>Hi, Welcome back to Urticket! </p>
            </div>
          </div>
          <form className="w-full flex flex-col gap-5" onSubmit={doLogin}>
            <div className="w-full flex flex-col gap-5">
              <input
                className="w-full outline-none border rounded-2xl p-[10px]"
                name="email"
                type="email"
                placeholder="Email"
              ></input>
              <div className="flex bg-white justify-center w-full rounded-2xl p-[10px] border">
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
            </div>
            {/* <div className="flex justify-end text-[#C4E4FF]">
              Forgot Password?
            </div> */}
            <Link to="/sign-up" className="flex justify-end text-[#C4E4FF]">
              <button type="button">Dont Have an Account?</button>
            </Link>
            <button
              type="submit"
              className="bg-[#27005D]  rounded-2xl w-full text-[#7BC9FF] h-[40px]"
            >
              Sign In
            </button>
          </form>
          <div className="flex flex-col justify-center text-white items-center gap-[20px]">
            <div>or sign in with</div>
            <div className="flex gap-[16px]">
              <a href="https://accounts.google.com">
                <button className="border-2 border-white w-[96px] flex justify-center p-[10px] rounded-[6px]">
                  <FaGoogle />
                </button>
              </a>
              <a href="https://www.facebook.com/login.php">
                <button className="border-2 border-white w-[96px] flex justify-center p-[10px] rounded-[6px]">
                  <FaFacebook />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {alert ? (
        <div className="absolute flex bg-black/50 w-full h-screen top-0 left-0 items-center justify-center">
          <div className="bg-[#27005D] text-[#AED2FF] w-[375px] flex flex-col items-center gap-[20px] rounded-md p-[10px]">
            <div>{message}</div>
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

export default Login;
