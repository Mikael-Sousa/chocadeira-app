import WebSocket from "ws";

type Client = {
  deviceId: string;
};

export const clients = new Map<WebSocket, Client>();
