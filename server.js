//server.js
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const serialPort = require("serialport"); //immediately opens a port.

app.use(express.static(__dirname + "/"));
app.get("/", function (req, res, next) {
  res.sendFile(__dirname + "/index.html");
});

const port = new serialPort("/dev/cu.usbmodem14301", {
  baudRate: 9600,
  dataBits: 8,
  parity: "none",
  stopBits: 1,
  flowControl: false,
});

//start our web server and socket.io server listening
server.listen(5500, function () {
  console.log("server: listening on *:5500");
});


io.on("connection", function (client) {
//클라이언트가 접속하여 연결이 만들어질 때 발생하는 이벤트 
});

