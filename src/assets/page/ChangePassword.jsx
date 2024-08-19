import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import { Form, Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { useSelector } from "react-redux";

function ChangePassword() {
  const datatoken = useSelector((state) => state.auth.token);
  console.log(datatoken);

  const [oldPass, setOldPass] = React.useState("password");
  const [newPass, setNewPass] = React.useState("password");
  const [confPass, setConfPass] = React.useState("password");
  function oldPassword() {
    if (oldPass === "password") {
      setOldPass("text");
    } else {
      setOldPass("password");
    }
  }
  function newPassword() {
    if (newPass === "password") {
      setNewPass("text");
    } else {
      setNewPass("password");
    }
  }
  function confPassword() {
    if (confPass === "password") {
      setConfPass("text");
    } else {
      setConfPass("password");
    }
  }

  async function changePassword(event) {
    event.preventDefault();

    const password = event.target.password.value;

    const formData = new URLSearchParams();
    formData.append("password", password);
    const dataPass = await fetch("http://localhost:8888/users/password", {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + datatoken,
      },
      body: formData,
    });
    console.log(dataPass);
    const response = await dataPass.json();
    if (response.success) {
      window.alert("Success Updated");
    } else {
      window.alert("Not Success");
    }
  }

  return (
    <div className="">
      <Navbar />
      <div className="flex md:p-[50px] bg-[#27005D]">
        <div className="flex w-[242px] h-[508px] w-[242px] h-[508px]">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full gap-[46px] h-auto p-[40px] bg-[#AED2FF] rounded-[20px] ">
          <div className="font-bold text-[20px]">Change Password</div>
          <div className="w-full flex  md:flex gap-[40px]">
            <div className="md:flex hidden flex-col gap-[50px]">
              <label>Old Password</label>
              <label>New Password</label>
              <label>Confirm Password</label>
            </div>
            <form
              onSubmit={changePassword}
              className="flex w-[619px] md:w-full flex-col gap-[33px] "
            >
              <label className="md:hidden">Old Password</label>
              <div className="w-full flex bg-white p-[10px] rounded-[10px]">
                <input
                  placeholder="Input Old Password ..."
                  type={oldPass}
                  // name="password"
                  className=" outline-none md:w-full"
                ></input>
                <button onClick={oldPassword} type="button">
                  <FaEye />
                </button>
              </div>
              <label className="md:hidden">New Password</label>
              <div className="w-full flex bg-white p-[10px] rounded-[10px]">
                <input
                  name="password"
                  placeholder="input New Password"
                  type={newPass}
                  className=" outline-none md:w-full"
                ></input>
                <button onClick={newPassword} type="button">
                  <FaEye />
                </button>
              </div>
              <label className="md:hidden">Confirm Password</label>
              <div className="w-full flex bg-white p-[10px] rounded-[10px]">
                <input
                  // name="password"
                  placeholder="Input Confirm Password ..."
                  type={confPass}
                  className=" outline-none md:w-full"
                ></input>
                <button onClick={confPassword} type="button">
                  <FaEye />
                </button>
              </div>
              <button
                className="bg-blue-500 text-white text-[20px] p-[10px] rounded-[10px] flex justify-center items-center"
                type="submit"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:bg-[#27005D] gap-[144px]">
        <Footer />
        <div>© 2020 Wetick All Rights Reserved</div>
      </div>
    </div>
  );
}
export default ChangePassword;
