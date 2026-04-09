import { clients } from "../clients/clientManager";
import { createMessage } from "../messages/createMessage";
import { broadcast } from "../utils/broadcast";

export function messageHandler(ws: any, msg: any) {
    let data;
    try {
      data = JSON.parse(msg.toString());
    } catch {
      return;
    }

    if (data.deviceId) {
      clients.set(ws, { deviceId: data.deviceId });
      console.log("Registered:", data.deviceId);
      return;
    }

    const client = clients.get(ws);
    if (!client) {
      console.log("Unregistered customer");
      return;
    }

    console.log(`${client.deviceId}:`, data);

    const message = createMessage("data", client.deviceId, data)
    broadcast(clients, message)
}
