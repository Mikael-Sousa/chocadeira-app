import http from "http";
import { WebSocketServer } from "ws";
import app from "./transports/http/app";
import { setupWS } from "./transports/websocket";
import { simulator } from "./transports/websocket/services/simulator";

const prompt = require("prompt-sync")();

const PORT = 4000;

// cria servidor HTTP
const server = http.createServer(app);

// pluga WebSocket no mesmo server
const wss = new WebSocketServer({ server });

setupWS(wss);

/* const res = prompt("Is it a simulation? y/n: ");

if (res === "y") {
  simulator(wss, PORT);
} */

server.listen(PORT, () => {
  console.log(`HTTP + WS running on port ${PORT}`);
});