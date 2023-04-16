import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import io from "socket.io-client";

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [roomName, setRoomName] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "white");
  const [searchParams] = useSearchParams();
  useEffect(() => {
    setName(searchParams.get("name"));
    setRoomName(searchParams.get("room"));
    setTheme(searchParams.get("theme"));
    console.log(name);
    console.log(roomName);
  });
  return (
    <div className="chat">
      <p>Hello world</p>
    </div>
  );
};

export default Chat;
