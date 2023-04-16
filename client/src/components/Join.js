import React from "react";
import { useState } from "react";

const Join = () => {
  const [name, setName] = useState("");
  const [roomName, setRoomName] = useState("");
  return (
    <div className="join">
       <div className="w-[100%] bg-black">
         <img src="https://logowik.com/content/uploads/images/google-chat4663.jpg" alt="logo"/>
       </div>
    </div>
  );
};

export default Join;
