import React from "react";
import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
const Join = () => {
  const [name, setName] = useState("");
  const [roomName, setRoomName] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="join">
      <div className="w-[100%] h-[200px] p-[20px] flex justify-between">
        <img
          src="https://mailmeteor.com/logos/assets/PNG/Google_Chat_Logo_512px.png"
          alt="logo"
          className="w-[100px] h-[100px] "
        />
        <BsMoon
          className="text-[30px] self-center text-white"
          onClick={changeTheme}
        />
      </div>
      <div className="w-[100%] m-auto h-auto p-[20px] lg:mt-[200px] mt-[10px] ">
        <div className="w-[400px] m-auto">
          <div className="lg:w-[500px] w-[350px] h-[50px] py-[10px] border-b-[2px] border-black">
            <p className="text-center font-bold text-[20px]">Join</p>
          </div>
          <input
            type="text"
            placeholder="Your Name"
            className="flex lg:w-[500px] w-[350px] h-[50px] py-[10px] px-[5px] rounded-[3px] outline-none bg-black mt-[20px] text-white"
          />
          <input
            type="text"
            placeholder="Room Name"
            className="flex lg:w-[500px] w-[350px] h-[50px] py-[10px] px-[5px] rounded-[3px] outline-none mt-[20px] bg-black text-white"
          />
          <div className="w-[250px] lg:w-[100px] m-auto ">
            <button className="w-[200px] mt-[20px] h-[50px] bg-[#000] text-white rounded-[5px] border-none p-[15px] ">
              Join Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
