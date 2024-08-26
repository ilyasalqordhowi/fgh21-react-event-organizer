import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import ProfilePhoto from "../img/profile-photo.png";
import Sidebar from "../component/Sidebar";
import Footer from "../component/Footer";
import { FaCameraRetro } from "react-icons/fa6";
import { FaSpinner } from "react-icons/fa6";
import loading from "../img/dino.gif";
import { Provider, useSelector, useDispatch } from "react-redux";
import { ImGift } from "react-icons/im";
import loadingDino from "../img/dino.gif";

function EditProfile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.data);
  const [selectedNationality, setSelectedNationality] = React.useState("");
  const datatoken = useSelector((state) => state.auth.token);
  const token = useSelector((state) => state.auth.token);
  const date = new Date(profile.birthdayDate);
  const futureDate = date.getDate() + 3;
  date.setDate(futureDate);
  const defaultValue = date.toLocaleDateString("en-CA");

  const [nationality, setNationality] = React.useState([]);
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
    const nationality = event.target.nationality.value;

    console.log(fullName);
    console.log(userName);
    console.log(email);
    console.log(phoneNumber);
    console.log(gender);
    console.log(nationality);

    const genderInt = parseInt(gender, 10);
    const nationalityInt = parseInt(nationality, 10);

    const formData = new URLSearchParams();
    formData.append("full_name", fullName);
    formData.append("username", userName);
    formData.append("email", email);
    formData.append("phone_number", phoneNumber);
    formData.append("gender", genderInt);
    formData.append("profession", profession);
    formData.append("nationality", nationalityInt);

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
      window.alert("Success Updated");
    } else {
      window.alert("tidak berhasil");
    }
  }
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
              <h1 className="font-bold  text-[30px]">Edit Profile</h1>
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
                      {nationality.map((items) => {
                        return <option value="">{items.nationalities}</option>;
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
                      {/* <div className="text-blue-400">Edit</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex flex-col items-center w-[50%] hidden ">
              <div className="flex gap-[200px]">
                <img
                  className="p-[130px] rounded-[50%] border-blue-950 border-[5px]"
                  src={profile}
                ></img>
                <div className="text-[100px] text-white absolute bg-black/50 p-[90px] rounded-[50%]">
                  <FaCameraRetro />
                </div>
              </div>
              <div>
                <button className="mt-[50px] bg-white w-[315px] font-bold border-solid border-2 border-sky-500 flex items-center justify-center text-blue-700 rounded-[15px] p-[20px]">
                  Choose Photo
                </button>
                <div>
                  <div>Image size: max, 2 MB</div>
                  <div>Image formats: .JPG, .JPEG, .PNG</div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="mt-[67px] bg-blue-500 md:w-[55%] w-full text-white font-bold text-[16px] flex items-center justify-center rounded-[15px] p-[17px]"
            type="submit"
            onClick={btnSave}
          >
            Save
          </button>
        </form>
      </div>
      <div className="flex flex-col md:bg-[#bg-[#27005D] gap-[144px]">
        {loading
          ? ""
          : // <div className="absolute flex   w-full h-full top-[350px] left-0 items-center justify-center">
            //   <div className="bg-violet-300 flex  items-center gap-[20px] rounded-md p-[10px]">
            //     <img className="w-[100px] " src={loadingDino}></img>
            //   </div>
            // </div>
            ""}
        <Footer />
        <div>© 2020 Wetick All Rights Reserved</div>
      </div>
    </div>
  );
}
export default EditProfile;
