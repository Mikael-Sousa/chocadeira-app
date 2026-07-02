import { WebSocketServer } from "ws";
import { messageHandler } from "./handlers/message.handler";
import { clients, unregisterClient } from "./clients/client.manager";

export function setupWS(wss: WebSocketServer) {
  wss.on("connection", (ws) => {
    console.log("incoming connection");

    ws.on("message", (msg) => {
      messageHandler(ws, msg);
    });

    ws.on("close", () => {
      const c = clients.get(ws);
      unregisterClient(ws);
      if (c) console.log("disconnected:", c.deviceId ?? c.userId);
    });
  });
}