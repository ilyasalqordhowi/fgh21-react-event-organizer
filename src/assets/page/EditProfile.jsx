import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../component/Navbar";

import Sidebar from "../component/Sidebar";
import Footer from "../component/Footer";
import { FaCameraRetro, FaRectangleXmark } from "react-icons/fa6";

import { Provider, useSelector, useDispatch } from "react-redux";

import loadingDino from "../img/dino.gif";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addProfile } from "../../redux/reducers/profile";

function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector((state) => state.profile.data);
  const [selectedNationality, setSelectedNationality] = React.useState("");
  const datatoken = useSelector((state) => state.auth.token);
  const token = useSelector((state) => state.auth.token);
  const date = new Date(profile.birthdayDate);
  const futureDate = date.getDate() + 3;
  date.setDate(futureDate);
  const defaultValue = date.toLocaleDateString("en-CA");
  const [message, setMessage] = React.useState(false);
  const [nationality, setNationality] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [file, setFile] = React.useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8888/profile/national", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const json = await response.json();
      const dataNew = json.results;
      setNationality(dataNew);
      console.log(setNationality, "hallo");
    })();
  }, []);
  async function Update(event) {
    event.preventDefault();

    const fullName = event.target.fullName.value;
    const userName = event.target.userName.value;
    const email = event.target.email.value;
    const phoneNumber = event.target.phoneNumber.value;
    const gender = event.target.gender.value;
    const profession = event.target.profession.value;
    const nationalityId = event.target.nationality.value;

    console.log(fullName);
    console.log(userName);
    console.log(email);
    console.log(phoneNumber);
    console.log(gender);
    console.log(nationalityId);

    const genderInt = parseInt(gender, 10);

    setLoading(false);
    const formData = new URLSearchParams();
    formData.append("full_name", fullName);
    formData.append("username", userName);
    formData.append("email", email);
    formData.append("phone_number", phoneNumber);
    formData.append("gender", genderInt);
    formData.append("profession", profession);
    formData.append("nationalityId", nationalityId);

    const dataProfile = await fetch("http://localhost:8888/profile/update", {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + datatoken,
      },
      body: formData,
    });
    console.log(dataProfile);
    const response = await dataProfile.json();
    if (response.success) {
      uploadImage();
      setTimeout(() => {
        setLoading(true);
      }, 3000);
    } else {
      setTimeout(() => {
        setLoading(true);
        setMessage(true);
      }, 3000);
    }
  }

  async function uploadImage() {
    const body = new FormData();
    body.append("profileImg", file);

    const response = await fetch("http://localhost:8888/profile/img", {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + datatoken,
      },
      body,
    });
    const json = await response.json();
    console.log(json);
  }
  const handlerChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };
  return (
    <div className="bg-[#27005D]">
      <Navbar />
      <div className="flex  md:p-[50px] bg-[#27005D]">
        <div className="md:flex md:w-[242px] h-[508px]">
          <Sidebar />
        </div>
        <form
          onSubmit={Update}
          className="w-full gap-[160px] h-auto md:p-[100px] bg-[#AED2FF] md:rounded-[20px] "
        >
          <div className="md:flex md:flex-row  flex-row-reverse ">
            <div className="w-[60%]  md:pt-[0] pt-[50px] gap-[10px]">
              <h1 className="font-bold  text-[30px]">Profile</h1>
              <div className="md:hidden justify-center  flex gap-[200px]">
                <img src={profile.profile[0].picture}></img>
              </div>
              <div className="flex flex-col ml-[110px] md:ml-[0] gap-[50px] mt-[50px]">
                <div className="md:flex w-full">
                  <div>Name</div>
                  <input
                    name="fullName"
                    placeholder="Jhon Tomson"
                    type="name"
                    className="border border-[#C1C5D0] w-full md:ml-[110px] p-[5px] rounded-[5px]"
                    defaultValue={profile.profile[0].full_name}
                  ></input>
                </div>
                <div className="md:flex w-full">
                  <div>Username</div>
                  <div className="flex w-full items-start">
                    <div className="flex w-full gap-[15px]">
                      <input
                        name="userName"
                        type="text"
                        className="border border-[#C1C5D0] md:ml-[80px] w-full p-[5px] rounded-[5px]"
                        defaultValue={profile.user.username}
                      />
                    </div>
                  </div>
                </div>
                <div className="md:flex">
                  <div>Email</div>
                  <div className="flex w-full items-start">
                    <div className="flex  w-full gap-[15px]">
                      <input
                        name="email"
                        type="email"
                        className="border border-[#C1C5D0] md:ml-[115px] w-full p-[5px] rounded-[5px] "
                        defaultValue={profile.user.email}
                      />
                    </div>
                  </div>
                </div>
                <div className="md:flex ">
                  <div>Phone Number</div>
                  <div className="flex w-full items-start">
                    <div className="flex w-full gap-[15px]">
                      <input
                        name="phoneNumber"
                        type="text"
                        className="border border-[#C1C5D0] p-[5px] rounded-[5px] md:ml-[70px] w-full "
                        defaultValue={profile.profile[0].phoneNumber}
                      />
                    </div>
                  </div>
                </div>
                <div className="md:flex justify-between">
                  <div>Gender</div>
                  <div className="flex md:ml-[110px] w-full gap-[40px]">
                    <div className="flex">
                      <input
                        name="gender"
                        value={1}
                        type="radio"
                        id="male"
                        defaultChecked={
                          profile.profile[0].gender === 1 ? true : false
                        }
                      />
                      <label htmlFor="male">Male</label>
                    </div>
                    <div className="flex">
                      <input
                        name="gender"
                        value={2}
                        type="radio"
                        id="female"
                        defaultChecked={
                          profile.profile[0].gender === 2 ? true : false
                        }
                      />
                      <label htmlFor="female">Female</label>
                    </div>
                  </div>
                </div>
                <div className="md:flex  justify-between">
                  <div>Profession</div>
                  <div className=" flex md:ml-[90px] w-full rounded-[5px] items-center  justify-end p-[30p] ">
                    <input
                      name="profession"
                      type="text"
                      className="border border-[#C1C5D0] p-[5px] rounded-[5px] w-full "
                      defaultValue={profile.profile[0].profession}
                    />
                  </div>
                </div>
                <div className="md:flex justify-between">
                  <div>Nationality</div>
                  <div className=" flex w-full md:ml-[90px] rounded-[5px]  items-center justify-end p-[30p] ">
                    <select
                      className="w-full p-[10px] rounded-xl"
                      name="nationality"
                    >
                      <option value="0">select your country</option>
                      {nationality.map((items) => {
                        return (
                          <option
                            value={items.id}
                            selected={
                              items.id === profile.profile[0].nationalityId
                                ? true
                                : false
                            }
                          >
                            {items.nationalities}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="md:flex justify-between">
                  <div> Birthday Date</div>
                  <div className="flex w-full md:ml-[100px]  items-start">
                    <div className="flex w-full gap-[15px]">
                      <input
                        type="date"
                        id="birthday"
                        className="w-full p-[10px] rounded-xl"
                        name="birthday"
                        defaultValue={defaultValue}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form
              onSubmit={uploadImage}
              className="md:flex flex-col gap-32 items-center w-[50%] pt-56 hidden "
            >
              <div className="flex  justify-center items-center">
                {profile.profile[0].picture == null ? (
                  <div className="text-[100px]  text-white absolute bg-black/50 p-[90px] rounded-[50%]">
                    <FaCameraRetro />
                  </div>
                ) : (
                  <img src={profile.profile[0].picture}></img>
                )}
              </div>
              <div>
                <label
                  htmlFor="img"
                  className="mt-[50px] bg-white w-[315px] font-bold border-solid border-2 border-sky-500 flex items-center justify-center text-blue-700 rounded-[15px] p-[20px]"
                >
                  Choose Photo
                </label>
                <input
                  type="file"
                  name="img"
                  id="img"
                  className="hidden"
                  onChange={handlerChange}
                />
                <div>
                  <div>Image size: max, 2 MB</div>
                  <div>Image formats: .JPG, .JPEG, .PNG</div>
                </div>
              </div>
            </form>
          </div>
          <button
            className="mt-[67px] bg-blue-500 md:w-[55%] w-full text-white font-bold text-[16px] flex items-center justify-center rounded-[15px] p-[17px]"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
      <div className="flex flex-col md:bg-[#bg-[#27005D] gap-[144px]">
        {loading ? (
          ""
        ) : (
          <div className=" flex h-full w-full justify-center items-center fixed z-10 top-0 left-0 bg-[rgba(0,0,0,0.5)]">
            <div className="bg-violet-300 flex  items-center gap-[20px] rounded-md p-[10px]">
              <img className="w-[100px] " src={loadingDino}></img>
            </div>
          </div>
        )}
        {message ? (
          <div className="fixed flex bg-black/50 w-full h-screen top-0 left-0 items-center justify-center">
            <div className="bg-[#27005D] text-[#AED2FF] w-[375px] flex flex-col items-center gap-[20px] rounded-md p-[10px]">
              <div>profile data not updated</div>
              <button
                className="flex gap-[10px] items-center justify-center"
                onClick={() => setMessage()}
              >
                <FaRectangleXmark />
                <p>Cancel</p>
              </button>
            </div>
          </div>
        ) : (
          ""
        )}

        <Footer />
        <div>© 2020 Wetick All Rights Reserved</div>
      </div>
    </div>
  );
}
export default EditProfile;
