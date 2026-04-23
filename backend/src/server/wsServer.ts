import { WebSocketServer, RawData } from "ws";
import { messageHandler } from "../handlers/messageHandler";
import { clients } from "../clients/clientManager";
import { simulator } from "../services/simulator";

const prompt = require('prompt-sync')();

const port = 8080
const wss = new WebSocketServer({ port });

const res = prompt('Is it a simulation? y/n: ') as "y" | "n";

if (res === "y") {
  simulator(wss, port)
} else {
  startNormalMode(wss)
}

function startNormalMode(wss: WebSocketServer) {
  wss.on("connection", (ws) => {
    console.log("incoming connection");

    ws.on("message", (msg: RawData) => {
      messageHandler(ws, msg);
    });

    ws.on("close", () => {
      const c = clients.get(ws);
      clients.delete(ws);
      if (c) console.log("disconnected:", c.deviceId);
    });
  });
}
