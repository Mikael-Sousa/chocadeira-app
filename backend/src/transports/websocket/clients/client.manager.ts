import WebSocket from "ws";

export type Client = {
  deviceId: string;
};

export const clients: Map<WebSocket, Client> = new Map<WebSocket, Client>();
