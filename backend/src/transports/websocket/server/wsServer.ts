import { WebSocketServer, RawData } from "ws";
import { messageHandler } from "../handlers/messageHandler";
import { clients } from "../clients/clientManager";
import { simulator } from "../services/simulator";

export function createServer(port: number) {
  const wss = new WebSocketServer({ port });

  function startNormalMode() {
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

  return {
    wss,
    startNormalMode,
    simulator
  };
}