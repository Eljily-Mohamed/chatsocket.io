import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import io from "socket.io-client";
import NvbarChat from "./NvbarChat";
import Input from "./Input";
import Messages from "./Messages";

var connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};

var socket = io.connect("http://localhost:5000", connectionOptions);

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [searchParams] = useSearchParams();
  const ENDPOINT = "localhost:5000";
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

  useEffect(() => {
    const nameUser = searchParams.get("name");
    const roomName = searchParams.get("room");
    const themApp = searchParams.get("them");
    setName(nameUser);
    setRoom(roomName);
    setTheme(themApp);

    socket.emit("join", { name: nameUser, room: roomName }, (error) => {
      if (error) {
        alert(error);
      }
    });
    return () => {
      socket.emit("disconnection");
      socket.off();
    };
  }, [ENDPOINT, searchParams]);

  useEffect(() => {
    socket.on("message", (message) => {
      console.log(message);
      setMessages([...messages, message]);
    });
  }, [messages]);

  //function ro send message
  const sendMessage = (event) => {
    event.preventDefault();
    console.log(message);
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log(message);
  console.log(messages);
  return (
    <div className="chat lg:w-[600px] lg:m-auto lg:h-[400px]">
      <NvbarChat room={room} theme={theme} changeTheme={changeTheme} />
      <Messages messages={messages} name={name} />
      <Input
        theme={theme}
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
};

export default Chat;
