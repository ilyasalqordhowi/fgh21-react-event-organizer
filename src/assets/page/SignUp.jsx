import React from "react";
import People from "../img/peopleWeb.png";
import Logo from "../component/Logoo";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import loadingDino from "../img/dino.gif";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

function SignUp() {
  const navigate = useNavigate();
  const [pass, setPass] = React.useState("password");
  const [confPass, setConfPass] = React.useState("password");

  const [loading, setLoading] = React.useState(false);

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

  const formik = useFormik({
    onSubmit: signUp,
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      fullname: Yup.string()
        .min(7, "Full Name must be a minimum of 7 characters")
        .required("Full Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .matches(
          /@(gmail|mail)\.com$/,
          "Email must contain '@', 'gmail', 'mail', '.com'"
        )
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords do not match")
        .required("Password confirmation is required"),
    }),
  });

  async function signUp() {
    const fullName = formik.values.fullname;
    const email = formik.values.email;
    const password = formik.values.password;
    const confirmPassword = formik.values.confirmPassword;

    console.log(fullName);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);

    setLoading(true);
    const formData = new URLSearchParams();
    formData.append("full_name", fullName);
    formData.append("email", email);
    formData.append("password", password);
    const dataRegis = await fetch("http://103.93.58.89:21213/auth/register", {
      method: "POST",
      body: formData,
    });
    const json = await dataRegis.json();
    if (json.success) {
      setLoading(false);
      navigate("/sign-in");
    }
  }

  return (
    <div className="flex bg-[#9400FF] h-[100vh]">
      <div className="bg-[#27005D] w-full  hidden md:flex items-center md:justify-center">
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

        <form
          className="w-full flex flex-col gap-5"
          onSubmit={formik.handleSubmit}
        >
          <div className="w-full flex flex-col gap-5">
            <input
              className="w-full border  outline-none rounded-2xl p-[10px]"
              name="fullname"
              type="text"
              placeholder="Full Name"
              onChange={formik.handleChange}
            />
            {formik.errors.fullname && formik.touched.fullname && (
              <p className="font-bold text-red-300">{formik.errors.fullname}</p>
            )}
            <input
              className="w-full border outline-none rounded-2xl p-[10px]"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="font-bold text-red-300">{formik.errors.email}</p>
            )}
            <div className="flex justify-center bg-white rounded-2xl p-[10px] border">
              <input
                className="flex-1 w-full outline-none "
                name="password"
                type={pass}
                placeholder="Password"
                onChange={formik.handleChange}
              ></input>
              <button onClick={password} type="button">
                <FaEye />
              </button>
            </div>
            {formik.errors.password && formik.touched.password && (
              <p className="font-bold text-red-300">{formik.errors.password}</p>
            )}
            <div className="flex justify-center bg-white rounded-2xl p-[10px] border">
              <input
                className="flex-1 w-full outline-none "
                name="confirmPassword"
                type={confPass}
                placeholder="Confirm Password"
                onChange={formik.handleChange}
              />
              <button onClick={confPassword} type="button">
                <FaEye />
              </button>
            </div>
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <p className="font-bold text-red-300">
                  {formik.errors.confirmPassword}
                </p>
              )}
          </div>

          <button
            type="submit"
            className="bg-[#27005D] rounded-2xl w-full text-[#7BC9FF] h-[40px]"
          >
            Sign Up
          </button>
        </form>
      </div>
      {loading ? (
        <div className="absolute flex bg-black/50 w-full h-screen top-0 left-0 items-center justify-center">
          <div className="bg-[#AED2FF] flex items-center gap-[20px] rounded-md p-[10px]">
            <img className="w-[100px] " src={loadingDino} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SignUp;
