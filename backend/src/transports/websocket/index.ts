import { WebSocketServer } from "ws";
import { messageHandler } from "./handlers/messageHandler";
import { clients } from "./clients/clientManager";

export function setupWS(wss: WebSocketServer) {
  wss.on("connection", (ws) => {
    console.log("incoming connection");

    ws.on("message", (msg) => {
      messageHandler(ws, msg);
    });

    ws.on("close", () => {
      const c = clients.get(ws);
      clients.delete(ws);
      if (c) console.log("disconnected:", c.deviceId);
    });
  });
}