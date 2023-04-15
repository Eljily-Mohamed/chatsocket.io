const express = require("express");
const socketIo = require("socket.io");
const cors = require("cors");
const http = require("http");

// create notre server
const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

server.listen(PORT, () =>  console.log(`SErver listening on ${PORT}`));
