const prompt = require("prompt-sync")();
const { createServer } = require("./transports/websocket/server/wsServer");

const port = 8080;

const { wss, startNormalMode, simulator } = createServer(port);

const res = prompt("Is it a simulation? y/n: ");

if (res === "y") {
  simulator(wss, port);
} else {
  startNormalMode();
}