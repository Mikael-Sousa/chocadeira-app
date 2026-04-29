const http = require("http");
const { WebSocketServer } = require("ws");
const expressApp = require("./transports/http/app");
const { setupWS } = require("./transports/websocket");
const { simulator } = require("./transports/websocket/services/simulator");

const prompt = require("prompt-sync")();

const PORT = 4000;

//cria servidor HTTP
const server = http.createServer(expressApp);

//pluga WebSocket no mesmo server
const wss = new WebSocketServer({ server });

setupWS(wss);

const res = prompt("Is it a simulation? y/n: ");

if (res === "y") {
  simulator(wss, PORT);
}

server.listen(PORT, () => {
  console.log(`HTTP + WS running on port ${PORT}`);
});