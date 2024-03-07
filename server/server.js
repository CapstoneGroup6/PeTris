const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const { Socket } = require("dgram");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
});

let numUsers = 0;

io.on("connection", (socket) => {
  numUsers++;
  console.log("new client connected", socket.id);

  socket.on("join room", ({ room }) => {
    console.log("new user joined " + room + " ", socket.id);
    socket.join(room);

    io.to(room).emit("updateUsers", room);
  });

  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});

server.listen(4000, () => {
  console.log("server listening on port 4000");
});
