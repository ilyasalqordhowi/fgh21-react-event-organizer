import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import ProfilePhoto from "../img/profile-photo.png";
import Sidebar from "../component/Sidebar";
import Footer from "../component/Footer";
import { FaSpinner } from "react-icons/fa6";
import loading from "../img/dino.gif";
import { Provider, useSelector, useDispatch } from "react-redux";
import { ImGift } from "react-icons/im";
import loadingDino from "../img/dino.gif";

function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.data);
  console.log(profile);
  const token = useSelector((state) => state.auth.token);
  const date = new Date(profile.birthdayDate);
  const futureDate = date.getDate() + 3;
  date.setDate(futureDate);
  const defaultValue = date.toLocaleDateString("en-CA");

  const [dataNationality, setNationality] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  function btnSave() {
    if (loading === true) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }

  // const [dataProfession, setProfession] = React.useState([]);
  useEffect(() => {
    //   (async () => {
    //     const response = await fetch(
    //       "https://wsw6zh-8888.csb.app/profile/professions",
    //       {
    //         headers: {
    //           Authorization: "Bearer " + token,
    //         },
    //       }
    //     );
    //     const json = await response.json();
    //     const dataNew = json.results;
    //     setProfession(dataNew);
    //     console.log(dataNew);
    //   })();
    (async () => {
      const response = await fetch("http://localhost:8888/profile/national", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      const json = await response.json();
      const dataNew = json.results;
      setNationality(dataNew);
      console.log(dataNew);
    })();
  }, []);
  //  async function doLogin(event) {
  //     event.preventDefault();

  //     const password = event.target.password.value;
  //     const email = event.target.email.value;

  //     setLoading(true);
  //     const formData = new URLSearchParams();
  //     formData.append("password", password);
  //     formData.append("email", email);
  //     fetch("http://localhost:8888/auth/", {
  //       method: "PATCH",
  //       body: formData,
  //     })
  return (
    <div className="bg-[#27005D]">
      <Navbar />
      <div className="flex  md:p-[50px] bg-[#27005D]">
        <div className="md:flex md:w-[242px] h-[508px]">
          <Sidebar />
        </div>
        <div className="md:flex md:flex-row flex-row-reverse  justify-center flex w-full gap-[46px] h-auto md:p-[100px] bg-[#AED2FF] md:rounded-[20px] ">
          <div className="w-[60%]   md:pt-[0]  pt-[50px] gap-[10px]">
            <h1 className="font-bold  text-[30px]">Profile</h1>
            <div className="md:hidden justify-center  flex gap-[200px]">
              <img src={profile.profile[0].picture}></img>
            </div>
            <div className="flex flex-col gap-[50px] mt-[50px]">
              <div className="md:flex w-[70%] justify-between">
                <div>Name</div>
                <input
                  placeholder="Jhon Tomson"
                  type="name"
                  className="border border-[#C1C5D0] p-[5px] rounded-[5px]"
                  defaultValue={profile.profile[0].full_name}
                ></input>
              </div>
              <div className="md:flex w-[70%]  justify-between">
                <div>Username</div>
                <div className="flex items-start">
                  <div className="flex gap-[15px]">
                    <div>{profile.user.username}</div>

                    <button className="text-blue-400" type="button">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:flex w-[70%]  justify-between">
                <div>Email</div>
                <div className="flex items-start">
                  <div className="flex gap-[15px]">
                    <div>{profile.user.email}</div>

                    <div></div>
                    <button className="text-blue-400" type="button">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:flex w-[70%]  justify-between">
                <div>Phone Number</div>
                <div className="flex items-start">
                  <div className="flex gap-[15px]">
                    <div>{profile.profile[0].phoneNumber}</div>

                    <div></div>
                    <button className="text-blue-400" type="button">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:flex w-[70%] justify-between">
                <div>Gender</div>
                <div className="flex gap-[40px]">
                  <div className="flex">
                    <div className="flex">
                      <input type="radio"></input>
                      <div>Male</div>
                    </div>
                  </div>
                  <div className="flex">
                    <input type="radio"></input>
                    <div>Female</div>
                  </div>
                </div>
              </div>
              <div className="md:flex w-[70%] justify-between">
                <div>Profession</div>
                <div className=" flex border-2 border-[#C1C5D0]  rounded-[5px] items-center  justify-end p-[30p] ">
                  <select name="" id="">
                    <option value="" selected>
                      {profile.profile[0].profession}
                    </option>
                  </select>
                </div>
              </div>
              <div className="md:flex w-[70%] justify-between">
                <div>Nationality</div>
                <div className=" flex border-2 border-[#C1C5D0]  rounded-[5px]  items-center justify-end p-[30p] ">
                  <select name="" id="">
                    {dataNationality.map((items) => {
                      console.log(dataNationality);
                      return <option value="">{items.name}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div className="md:flex w-[70%] justify-between">
                <div> Birthday Date</div>
                <div className="flex items-start">
                  <div className="flex gap-[15px]">
                    <input
                      type="date"
                      id="birthday"
                      name="birthday"
                      defaultValue={defaultValue}
                    />
                    {/* <div className="text-blue-400">Edit</div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[67px] bg-blue-500 md:w-[315px] w-full text-white font-bold text-[16px] flex items-center justify-center rounded-[15px] p-[17px]">
              <button onClick={btnSave}>Save</button>
            </div>
          </div>
          <div className="md:flex flex-col items-center  hidden w-[40%]">
            <div className="flex gap-[200px]">
              <img
                className="rounded-full"
                src={profile.profile[0].picture}
              ></img>
            </div>
            <div>
              <div className="mt-[50px] bg-white w-[315px] font-bold border-solid border-2 border-sky-500 flex items-center justify-center text-blue-700 rounded-[15px] p-[20px]">
                <button>Choose Photo</button>
              </div>
              <div>
                <div>Image size: max, 2 MB</div>
                <div>Image formats: .JPG, .JPEG, .PNG</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:bg-[#bg-[#27005D] gap-[144px]">
        {loading ? (
          <div className="absolute flex   w-full h-full top-[350px] left-0 items-center justify-center">
            <div className="bg-violet-300 flex  items-center gap-[20px] rounded-md p-[10px]">
              <img className="w-[100px] " src={loadingDino}></img>
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
export default Profile;
