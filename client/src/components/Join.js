import React from "react";
import { useState } from "react";

const Join = () => {
  const [name, setName] = useState("");
  const [roomName, setRoomName] = useState("");
  return (
    <div className="join">
      <div className="w-[100%] h-[200px] p-[20px]">
        <img
          src="https://logowik.com/content/uploads/images/google-chat4663.jpg"
          alt="logo"
          className="w-[100px] h-[100px]"
        />
      </div>
       <div className="w-[100%] m-auto h-auto lg:mt-[200px] mt-[100px] ">
          <div className="w-[400px] m-auto">
             <div className="title">
               <p>Join</p>
             </div>
             <input type="text" placeholder="Your Name" className="flex w-[500px] h-[50px] py-[10px] rounded-[3px] outline-none bg-black "/>
             <input type="text" placeholder="Room Name" className="flex w-[500px] h-[50px] py-[10px] rounded-[3px] outline-none mt-[20px] bg-black"/>
          </div>
       </div>
    </div>
  );
};

export default Join;
