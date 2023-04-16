const express = require("express");
const socketIo = require("socket.io");
const cors = require("cors");
const http = require("http");

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
  console.log("connexion established")
  
  socket.on("join", ({ nameUser, roomName }) => {
    console.log(nameUser, roomName);
  });

  socket.on("disconnect", () => {
    console.log("connection closed");
  });

});

server.listen(PORT, () => console.log(`Server listening on ${PORT}`));
