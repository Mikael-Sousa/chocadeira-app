import WebSocket from "ws";

export type Client = {
  kind: "device" | "app";
  deviceId?: string;
  userId?: string;
};

export const clients: Map<WebSocket, Client> = new Map<WebSocket, Client>();

export function registerClient(ws: WebSocket, client: Client): void {
  clients.set(ws, client);
}

export function unregisterClient(ws: WebSocket): void {
  clients.delete(ws);
}

export function getAppClients(): WebSocket[] {
  return Array.from(clients.entries())
    .filter(([, client]) => client.kind === "app")
    .map(([ws]) => ws)
    .filter((ws) => ws.readyState === WebSocket.OPEN);
}
