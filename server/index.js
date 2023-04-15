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
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("connection established");
  socket.on("disconnect", () => {
    console.log("connection closed");
  });
});
app.use(router);
server.listen(PORT, () => console.log(`Server listening on ${PORT}`));
