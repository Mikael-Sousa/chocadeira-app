import { WebSocket, RawData } from "ws";
import { clients, getAppClients, registerClient } from "../clients/client.manager";
import { createMessage } from "../messages/create.message";
import { IncomingMessage } from "../types/messages.types";
import devicesService from "../../../modules/devices/devices.service";

function isAppAuthMessage(message: IncomingMessage): message is Extract<IncomingMessage, { type: "APP_AUTH" }> {
  return message.type === "APP_AUTH";
}

function isDeviceAuthMessage(message: IncomingMessage): message is Extract<IncomingMessage, { type: "DEVICE_AUTH" }> {
  return message.type === "DEVICE_AUTH";
}

function isDataMessage(message: IncomingMessage): message is Extract<IncomingMessage, { type: "DATA" }> {
  return message.type === "DATA";
}

function isIncubationMessage(message: IncomingMessage): message is Extract<IncomingMessage, { type: "INCUBATION_STARTED" | "INCUBATION_CANCELLED" }> {
  return message.type === "INCUBATION_STARTED" || message.type === "INCUBATION_CANCELLED";
}

export async function messageHandler(ws: WebSocket, msg: RawData): Promise<void> {
  let receivedData: IncomingMessage;

  try {
    receivedData = JSON.parse(msg.toString());
  } catch {
    return;
  }

  // Para todas as mensagens que não sejam AUTH, exige autenticação primeiro.
  // Isso evita processar eventos de dispositivos de sockets desconhecidos.
  if (receivedData.type !== "DEVICE_AUTH" && receivedData.type !== "APP_AUTH") {
    const client = clients.get(ws);

    if (!client) {
      console.log("Unauthenticated socket attempted to send message");
      const errorResponse = createMessage({
        type: "ACK",
        device_id: "unknown",
        payload: {
          event: receivedData.type,
          status: "error",
          message: "Socket is not authenticated"
        }
      });
      ws.send(JSON.stringify(errorResponse));
      return;
    }
  }

  switch (receivedData.type) {

    case "APP_AUTH": {
      if (!isAppAuthMessage(receivedData)) {
        return;
      }

      try {
        registerClient(ws, {
          kind: "app",
          userId: receivedData.user_id
        });
      } catch (err) {
        console.error("Auth error:", err);

        const errorResponse = createMessage({
          type: "ACK",
          device_id: receivedData.user_id ?? "unknown",
          payload: {
            event: "APP_AUTH",
            status: "error",
            message: "Failed to authenticate app connection"
          }
        });

        ws.send(JSON.stringify(errorResponse));
      }
      break;
    }

    case "DEVICE_AUTH": {
      if (!isDeviceAuthMessage(receivedData)) {
        return;
      }

      try {
        registerClient(ws, {
          kind: "device",
          deviceId: receivedData.device_id
        });

        const device = await devicesService.getDeviceById(receivedData.device_id);

        if (device && device.incubation_status === "active") {
          ws.send(
            JSON.stringify(
              createMessage({
                type: "INCUBATION_DATE",
                device_id: receivedData.device_id,
                payload: {
                  expected_hatch_date: device.expected_hatch_date,
                  status: device.incubation_status
                }
              })
            )
          );
        }
      } catch (err) {
        console.error("Device auth error:", err);

        const errorResponse = createMessage({
          type: "ACK",
          device_id: receivedData.device_id,
          payload: {
            event: "DEVICE_AUTH",
            status: "error",
            message: "Failed to authenticate device"
          }
        });

        ws.send(JSON.stringify(errorResponse));
      }

      break;
    }

    case "DATA": {
      if (!isDataMessage(receivedData)) {
        return;
      }

      try {
        console.log("Received DATA from device:", receivedData.device_id, receivedData.payload);

        const response = createMessage({
          type: "ACK",
          device_id: receivedData.device_id,
          payload: {
            event: "DATA",
            status: "ok",
            message: "Data received"
          }
        });

        ws.send(JSON.stringify(response));

        const appPayload = createMessage({
          type: "DATA",
          device_id: receivedData.device_id,
          payload: receivedData.payload
        });

        for (const appClient of getAppClients()) {
          appClient.send(JSON.stringify(appPayload));
        }
      } catch (err) {
        console.error("Error processing DATA message:", err);

        const errorResponse = createMessage({
          type: "ACK",
          device_id: receivedData.device_id,
          payload: {
            event: "DATA",
            status: "error",
            message: "Failed to process data"
          }
        });

        ws.send(JSON.stringify(errorResponse));
      }
      break;
    }

    case "INCUBATION_STARTED": {
      if (!isIncubationMessage(receivedData) || receivedData.type !== "INCUBATION_STARTED") {
        return;
      }

      try {
        // Atualiza o estado do dispositivo no serviço e retorna a nova data prevista de nascimento.
        const result = await devicesService.startIncubation(receivedData.device_id);
        console.log("Incubation started for device:", receivedData.device_id);

        // Envia de volta ao ESP a data prevista de nascimento.
        const response = createMessage({
          type: "INCUBATION_DATE",
          device_id: receivedData.device_id,
          payload: {
            expected_hatch_date: result.data?.expected_hatch_date ?? null,
            status: result.data?.incubation_status ?? null
          }
        });

        ws.send(JSON.stringify(response));
      } catch (err) {
        console.error("Error starting incubation:", err);

        // Informa o ESP que a operação falhou.
        const errorResponse = createMessage({
          type: "ACK",
          device_id: receivedData.device_id,
          payload: {
            event: "INCUBATION_STARTED",
            status: "error",
            message: "Failed to start incubation"
          }
        });

        ws.send(JSON.stringify(errorResponse));
      }
      break;
    }

    case "INCUBATION_CANCELLED": {
      if (!isIncubationMessage(receivedData) || receivedData.type !== "INCUBATION_CANCELLED") {
        return;
      }

      try {
        await devicesService.cancelIncubation(receivedData.device_id);
        console.log("Incubation cancelled for device:", receivedData.device_id);

        const response = createMessage({
          type: "ACK",
          device_id: receivedData.device_id,
          payload: {
            event: "INCUBATION_CANCELLED",
            status: "ok",
            message: "Incubation cancelled"
          }
        });

        ws.send(JSON.stringify(response));
      } catch (err) {
        console.error("Error cancelling incubation:", err);

        const errorResponse = createMessage({
          type: "ACK",
          device_id: receivedData.device_id,
          payload: {
            event: "INCUBATION_CANCELLED",
            status: "error",
            message: "Failed to cancel incubation"
          }
        });

        ws.send(JSON.stringify(errorResponse));
      }
      break;
    }

    default:
      return;
  }
}
