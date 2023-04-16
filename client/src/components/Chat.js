import { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [roomName, setRoomName] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "white");

  useEffect(() => {
    //const { name, room, theme } = queryString.parse(location.search);
    console.log(location)
    console.log(`${name} ${room} ${theme}`);
  });
  return (
    <div className="chat">
      <p>Hello world</p>
    </div>
  );
};

export default Chat;
