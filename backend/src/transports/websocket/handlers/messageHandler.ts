import { WebSocket, RawData } from "ws";
import { clients } from "../clients/clientManager";
import { createMessage } from "../messages/createMessage";
import { broadcast } from "../utils/broadcast";
import deviceService from "../../../modules/device/device.service";
import { IncomingMessage } from "../types/messages.types";

export async function messageHandler(ws: WebSocket, msg: RawData): Promise<void> {
  let data : IncomingMessage;

  try {
    data = JSON.parse(msg.toString());
  } catch {
    return;
  }

  if (data.type === "auth") {
    try {
      const result = await deviceService.authenticateDevice(data.deviceId);

      if (result.status === 401) {
        await deviceService.register(data.deviceId);
      }

       clients.set(ws, { deviceId: data.deviceId });

      console.log("Authenticated:", data.deviceId);

    } catch (err) {
      console.error("Auth error:", err);
      ws.close();
    }

    return;
  }

  const client = clients.get(ws);

  if (!client) {
    console.log("Unregistered customer");
    return;
  }

  console.log(`${client.deviceId}:`, data);

  const message = createMessage({
    type: "DATA",
    device_id: client.deviceId,
    payload: data.payload
  });

  broadcast(clients, message);
}