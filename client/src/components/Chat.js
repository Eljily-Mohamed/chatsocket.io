import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import io from "socket.io-client";

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [theme, setTheme] = useState("");
  const [searchParams] = useSearchParams();

  const ENDPOINT = "localhost:5000";
  let socket;

  useEffect(() => {
    const nameUser = searchParams.get("name");
    const roomName = searchParams.get("room");
    const themApp = searchParams.get("them");

    setName(nameUser);
    setRoom(roomName);
    setTheme(themApp);

    socket = io(ENDPOINT, {
      transports: ["websocket", "polling", "flashsocket"],
    });
    socket.emit("join", { nameUser, roomName }, () => {});

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [ENDPOINT, searchParams]);
  return (
    <div className="chat">
      <p>Hello world</p>
    </div>
  );
};

export default Chat;
