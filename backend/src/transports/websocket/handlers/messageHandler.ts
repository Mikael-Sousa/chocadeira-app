import { WebSocket, RawData } from "ws";
import { clients } from "../clients/clientManager";
import { createMessage } from "../messages/createMessage";
import { broadcast } from "../utils/broadcast";
import deviceService from "../../../modules/device/device.service";

export async function messageHandler(ws: WebSocket, msg: RawData): Promise<void> {
  let data;

  try {
    data = JSON.parse(msg.toString());
  } catch {
    return;
  }

  if (data.type === "auth") {
    try {
      const result = await deviceService.authenticateDevice(data.espId);

      if (result.status === 401) {
        await deviceService.register(data.espId);
      }

       clients.set(ws, { deviceId: data.espId });

      console.log("Authenticated:", data.espId);

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
    deviceId: client.deviceId,
    payload: data
  });

  broadcast(clients, message);
}