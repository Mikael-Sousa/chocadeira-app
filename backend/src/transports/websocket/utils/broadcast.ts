import WebSocket from "ws"
import { Client } from "../clients/clientManager";
import { Message } from "../messages/createMessage";

export function broadcast(clients:  Map<WebSocket, Client>, message: Message) {
  console.log("Clients size:", clients.size);
  for (const ws of clients.keys()) {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(message));
    }
  }
};