import React from "react";
import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { Link } from "react-router-dom";
const Join = () => {
  const [name, setName] = useState("");
  const [roomName, setRoomName] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "white");

  const changeTheme = () => {
    if (theme === "white") {
      setTheme("black");
    } else {
      setTheme("white");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.style.backgroundColor = theme;
  }, [theme]);

  return (
    <div className={`${theme}`}>
      <div className="w-[100%] h-[200px] lg:p-[100px] p-[20px] flex justify-between">
        <img
          src="https://mailmeteor.com/logos/assets/PNG/Google_Chat_Logo_512px.png"
          alt="logo"
          className="w-[100px] h-[100px] "
        />
        {theme === "white" ? (
          <BsMoon className="text-[30px] mt-[30px]" onClick={changeTheme} />
        ) : (
          <BsSun
            className="text-[30px] mt-[30px] text-white"
            onClick={changeTheme}
          />
        )}
      </div>
      <div className="w-[100%] m-auto h-auto p-[20px] lg:mt-[200px] mt-[10px] ">
        <div className="w-[400px] lg:w-[500px] m-auto">
          <div
            className={`lg:w-[500px] w-[350px] h-[50px] py-[10px] border-b-[2px] border-${
              theme == "white" ? "black" : "white"
            }`}
          >
            <p
              className={`text-center font-bold text-[20px] text-${
                theme == "white" ? "black" : "white"
              }`}
            >
              Join
            </p>
          </div>
          <input
            type="text"
            placeholder="Your Name"
            className={`flex lg:w-[500px] w-[350px] h-[50px] py-[10px] px-[5px] rounded-[3px] outline-none mt-[20px]`}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room Name"
            className={`flex lg:w-[500px] w-[350px] h-[50px] py-[10px] px-[5px] rounded-[3px] outline-none mt-[20px]`}
            onChange={(event) => {
              setRoomName(event.target.value);
            }}
          />
          <div className="w-[250px] lg:w-[180px] m-auto ">
            <Link
              to={`/chat?name=${name}&room=${roomName}&them=${theme}`}
              onClick={(event) =>
                !name || !roomName ? event.preventDefault : null
              }
            >
              <button
                className={`w-[200px] mt-[20px] h-[50px] font-bold bg-red-500 rounded-[5px] border-none p-[15px] text-${
                  theme == "white" ? "black" : "white"
                }`}
                type="submit"
              >
                Join Room
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
