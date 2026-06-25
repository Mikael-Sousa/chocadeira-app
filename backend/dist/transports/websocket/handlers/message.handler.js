"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageHandler = messageHandler;
const client_manager_1 = require("../clients/client.manager");
const create_message_1 = require("../messages/create.message");
const devices_service_1 = __importDefault(require("../../../modules/devices/devices.service"));
async function messageHandler(ws, msg) {
    let receivedData;
    try {
        receivedData = JSON.parse(msg.toString());
    }
    catch {
        return;
    }
    // Para todas as mensagens que não sejam AUTH, exige autenticação primeiro.
    // Isso evita processar eventos de dispositivos de sockets desconhecidos.
    if (receivedData.type !== "DEVICE_AUTH" && receivedData.type !== "APP_AUTH") {
        const client = client_manager_1.clients.get(ws);
        if (!client) {
            console.log("Unauthenticated socket attempted to send message");
            const errorResponse = (0, create_message_1.createMessage)({
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
            // Para mensagens de autenticação de app, apenas valida a conexão.
            try {
                client_manager_1.clients.set(ws, { deviceId: receivedData.user_id });
            }
            catch (err) {
                console.error("Auth error:", err);
                ws.close();
            }
            break;
        }
        case "DEVICE_AUTH": {
            try {
                client_manager_1.clients.set(ws, {
                    deviceId: receivedData.device_id
                });
                const device = await devices_service_1.default.getDeviceById(receivedData.device_id);
                if (device &&
                    device.incubation_status === "active") {
                    ws.send(JSON.stringify((0, create_message_1.createMessage)({
                        type: "INCUBATION_DATE",
                        device_id: receivedData.device_id,
                        payload: {
                            expected_hatch_date: device.expected_hatch_date,
                            status: device.incubation_status
                        }
                    })));
                }
            }
            catch {
                ws.close();
            }
            break;
        }
        case "DATA": {
            try {
                console.log("Received DATA from device:", receivedData.device_id, receivedData.payload);
                const response = (0, create_message_1.createMessage)({
                    type: "ACK",
                    device_id: receivedData.device_id,
                    payload: {
                        event: "DATA",
                        status: "ok",
                        message: "Data received"
                    }
                });
                ws.send(JSON.stringify(response));
            }
            catch (err) {
                console.error("Error processing DATA message:", err);
                const errorResponse = (0, create_message_1.createMessage)({
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
            try {
                // Atualiza o estado do dispositivo no serviço e retorna a nova data prevista de nascimento.
                const result = await devices_service_1.default.startIncubation(receivedData.device_id);
                console.log("Incubation started for device:", receivedData.device_id);
                // Envia de volta ao ESP a data prevista de nascimento.
                const response = (0, create_message_1.createMessage)({
                    type: "INCUBATION_DATE",
                    device_id: receivedData.device_id,
                    payload: {
                        expected_hatch_date: result.data?.expected_hatch_date ?? null,
                        status: result.data?.incubation_status ?? null
                    }
                });
                ws.send(JSON.stringify(response));
            }
            catch (err) {
                console.error("Error starting incubation:", err);
                // Informa o ESP que a operação falhou.
                const errorResponse = (0, create_message_1.createMessage)({
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
            try {
                await devices_service_1.default.cancelIncubation(receivedData.device_id);
                console.log("Incubation cancelled for device:", receivedData.device_id);
                const response = (0, create_message_1.createMessage)({
                    type: "ACK",
                    device_id: receivedData.device_id,
                    payload: {
                        event: "INCUBATION_CANCELLED",
                        status: "ok",
                        message: "Incubation cancelled"
                    }
                });
                ws.send(JSON.stringify(response));
            }
            catch (err) {
                console.error("Error cancelling incubation:", err);
                const errorResponse = (0, create_message_1.createMessage)({
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
//# sourceMappingURL=message.handler.js.map