const express = require("express");
const socketIo = require("socket.io");
const cors = require("cors");
const http = require("http");
const { addUser, removeUser, getAllUsers, getUser } = require("./users");
// create notre server
const PORT = process.env.PORT || 5000;
// import router here
const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketIo(
  server,
  cors({
    origin: "*",
    Credential: true,
  })
);
app.use(cors());
app.use(router);

io.on("connect", (socket) => {
  socket.on("join", ({ nameUser, roomName }, callBack) => {
    const { error, user } = addUser({ id: socket.id, nameUser, roomName });
    console.log(user)
    if (error) {
      return callBack(error);
    }
    socket.emit("message", {
      user: "admin",
      text: `${user.nameUser} welcome to the room ${user.roomName}`,
    });
    socket.broadcast.to(user.roomName).emit("message", {
      user: "admin",
      text: `${user.nameUser} has joined the room`,
    });
    socket.join(user.roomName);
    callBack();
  });

  socket.on("sendMessage", (message, callBack) => {
    const user = getUser(socket.id);
    io.to(user.roomName).emit("message", {
      user: user.nameUser,
      text: message,
    });
    callBack();
  });

});

server.listen(PORT, () => console.log(`Server listening on ${PORT}`));
