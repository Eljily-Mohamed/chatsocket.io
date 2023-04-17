import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import io from "socket.io-client";

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [theme, setTheme] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const [searchParams] = useSearchParams();

  const ENDPOINT = "localhost:5000";
  const socket = io(ENDPOINT, {
    transports: ["websocket", "polling", "flashsocket"],
  });

  useEffect(() => {
    const nameUser = searchParams.get("name");
    const roomName = searchParams.get("room");
    const themApp = searchParams.get("them");
    setName(nameUser);
    setRoom(roomName);
    setTheme(themApp);
    socket.emit("join", { nameUser, roomName }, () => {});
    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [ENDPOINT, searchParams]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessage([...messages, message]);
    });
  }, [messages]);

  //function ro send message
  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log(message);
  console.log(messages);
  return (
    <div className="chat">
      <div className="">
        <input
          value={message}
          type="text"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
        />
      </div>
    </div>
  );
};

export default Chat;
