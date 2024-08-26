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
  const [message, setMessage] = React.useState(false);

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

    const oldPassword = event.target.oldPass.value;
    const newPassword = event.target.password.value;
    const confPassword = event.target.confPass.value;

    const formData = new URLSearchParams();
    formData.append("oldPassword", oldPassword);
    formData.append("newPassword", newPassword);
    // console.log(formData.values);
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
      setMessage(dataPass);
    }
  }

  return (
    <div className="bg-[#27005D]">
      <Navbar />
      <div className="flex md:p-[50px]  bg-[#27005D]">
        <div className="flex  w-[242px] h-[508px]">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full gap-[46px] h-auto p-[40px] bg-[#AED2FF] md:rounded-[20px] ">
          <div className="font-bold text-[20px]">Change Password</div>
          <div className="w-full flex  md:flex gap-[40px]">
            <form
              onSubmit={changePassword}
              className="flex w-[619px] md:w-full flex-col gap-[33px] "
            >
              <label className="md:hidden">Old Password</label>
              <div className="flex w-full items-center gap-[50px]">
                <label className="md:flex  hidden">Old Password</label>
                <div className="w-full flex bg-white p-[10px] rounded-[10px]">
                  <input
                    placeholder="Input Old Password ..."
                    type={oldPass}
                    name="oldPass"
                    className="w-full outline-none md:w-full"
                  ></input>
                  <button onClick={oldPassword} type="button">
                    <FaEye />
                  </button>
                </div>
              </div>
              {message ? (
                <h1 className="text-red-500">Your old password is wrong</h1>
              ) : (
                ""
              )}
              <label className="md:hidden">New Password</label>
              <div className="flex gap-[50px] items-center">
                <label className="md:flex hidden">New Password</label>
                <div className="w-full flex bg-white p-[10px] rounded-[10px]">
                  <input
                    name="password"
                    placeholder="input New Password"
                    type={newPass}
                    className=" w-full outline-none md:w-full"
                  ></input>
                  <button onClick={newPassword} type="button">
                    <FaEye />
                  </button>
                </div>
              </div>
              <label className="md:hidden">Confirm Password</label>
              <div className="flex items-center gap-[30px]">
                <label className="md:flex hidden">Confirm Password</label>
                <div className="w-full flex bg-white p-[10px] rounded-[10px]">
                  <input
                    name="confPass"
                    placeholder="Input Confirm Password ..."
                    type={confPass}
                    className="w-full outline-none md:w-full"
                  ></input>
                  <button onClick={confPassword} type="button">
                    <FaEye />
                  </button>
                </div>
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
