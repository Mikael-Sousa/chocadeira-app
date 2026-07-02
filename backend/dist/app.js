"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("1 - app.ts carregado");
const http_1 = __importDefault(require("http"));
const ws_1 = require("ws");
const app_1 = __importDefault(require("./transports/http/app"));
const websocket_1 = require("./transports/websocket");
console.log("2 - imports carregados");
const prompt = require("prompt-sync")();
const PORT = Number(process.env.PORT) || 4000;
console.log("3 - criando servidor HTTP");
// cria servidor HTTP
const server = http_1.default.createServer(app_1.default);
console.log("4 - criando websocket");
// pluga WebSocket no mesmo server
const wss = new ws_1.WebSocketServer({ server });
console.log("5 - configurando websocket");
(0, websocket_1.setupWS)(wss);
console.log("6 - iniciando listen");
/* const res = prompt("Is it a simulation? y/n: ");

if (res === "y") {
  simulator(wss, PORT);
} */
server.listen(PORT, () => {
    console.log(`HTTP + WS running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map