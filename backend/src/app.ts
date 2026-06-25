console.log("1 - app.ts carregado");

import http from "http";
import { WebSocketServer } from "ws";
import app from "./transports/http/app";
import { setupWS } from "./transports/websocket";
import { simulator } from "./transports/websocket/services/simulator";

console.log("2 - imports carregados");

const prompt = require("prompt-sync")();

const PORT = Number(process.env.PORT) || 4000;

console.log("3 - criando servidor HTTP");

// cria servidor HTTP
const server = http.createServer(app);
console.log("4 - criando websocket")

// pluga WebSocket no mesmo server
const wss = new WebSocketServer({ server });
console.log("5 - configurando websocket");

setupWS(wss);
console.log("6 - iniciando listen");

/* const res = prompt("Is it a simulation? y/n: ");

if (res === "y") {
  simulator(wss, PORT);
} */

server.listen(PORT, () => {
  console.log(`HTTP + WS running on port ${PORT}`);
});