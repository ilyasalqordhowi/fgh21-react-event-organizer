import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import Footer from "../component/Footer";
import { FaRectangleXmark } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import loadingDino from "../img/dino.gif";
import { useNavigate } from "react-router-dom";
import User from "../img/user.png";
import { addProfile } from "../../redux/reducers/profile";

function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector((state) => state.profile.data);
  const datatoken = useSelector((state) => state.auth.token);
  const token = useSelector((state) => state.auth.token);
  const date = new Date(profile.birthdayDate);
  const futureDate = date.getDate() + 3;
  date.setDate(futureDate);
  const defaultValue = date.toLocaleDateString("en-CA");
  const [message, setMessage] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [nationality, setNationality] = React.useState([]);
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
    console.log(json, "klklklklkl");
    if (json.success) {
      const getResponse = await fetch("http://localhost:8888/profile/", {
        headers: {
          Authorization: "Bearer " + datatoken,
        },
      });
      const data = await getResponse.json();
      const dataResult = data.results;
      console.log("data result terupdate", dataResult);
      dispatch(addProfile(dataResult));
    }
  }
  const handlerChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onloadend = () => {
      setPreview(reader.results);
    };
  };
  async function getData() {
    const response = await fetch("http://localhost:8888/profile/", {
      headers: {
        Authorization: "Bearer " + datatoken,
      },
    });
    const data = await response.json();
    const listData = data.results;
    console.log(listData, "data terupdate");
    dispatch(addProfile(listData));
  }

  useEffect(() => {
    getData();
  }, []);

  if (profile === null) {
    navigate("/sign-up");
  }
  return (
    <div className="bg-[#27005D]">
      <Navbar />
      <div className="flex  md:p-[50px] bg-[#27005D]">
        <div className="md:flex hidden md:w-[242px] h-[508px]">
          <Sidebar />
        </div>
        <form
          onSubmit={Update}
          className="w-full gap-[160px] h-auto md:p-[100px] bg-[#AED2FF] md:rounded-[20px] "
        >
          <div className="md:flex  md:flex-row flex-col">
            <div className="w-[60%] mb-10 md:mb-0 md:pt-[0] pt-[50px] gap-[10px]">
              <h1 className="font-bold  text-[30px]">Profile</h1>
              <div className="flex flex-col md:pl-0 pl-11 w-[400px] md:w-full md:ml-[0] gap-[50px] mt-[50px]">
                <div className="md:flex w-full">
                  <div>Name</div>
                  <input
                    name="fullName"
                    placeholder="Full Name"
                    type="name"
                    className="border border-[#C1C5D0] w-full md:ml-[110px] p-[5px] rounded-[5px]"
                    defaultValue={profile.profile.full_name}
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
                        defaultValue={profile.user?.email}
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
                        defaultValue={profile.profile?.phoneNumber}
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
                          profile.profile?.gender === 1 ? true : false
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
                          profile.profile?.gender === 2 ? true : false
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
                      defaultValue={profile.profile?.profession}
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
                              items.id === profile.profile?.nationalityId
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
              className="md:flex flex-col justify-center w-full items-center md:w-[50%]"
            >
              <div className="flex justify-center items-center">
                {profile.profile?.picture == null ? (
                  <img
                    className="w-20 rounded-full border-white border-[5px]"
                    src={User}
                  ></img>
                ) : (
                  <img
                    className="w-20 rounded-full  border-blue-950 border-[5px] overflow-hidden"
                    src={profile.profile?.picture}
                  ></img>
                )}
              </div>
              <div className="flex flex-col justify-center w-full items-center">
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
                  <div>Image size: max, 700kb</div>
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
      </div>
    </div>
  );
}
export default EditProfile;
