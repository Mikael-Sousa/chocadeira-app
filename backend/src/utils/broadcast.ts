import WebSocket from "ws"

export function broadcast(clients: any, message: any) {
  console.log("Clients size:", clients.size);
  for (const ws of clients.keys()) {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(message));
    }
  }
};