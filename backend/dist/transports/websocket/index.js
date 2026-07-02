"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupWS = setupWS;
const message_handler_1 = require("./handlers/message.handler");
const client_manager_1 = require("./clients/client.manager");
function setupWS(wss) {
    wss.on("connection", (ws) => {
        console.log("incoming connection");
        ws.on("message", (msg) => {
            (0, message_handler_1.messageHandler)(ws, msg);
        });
        ws.on("close", () => {
            const c = client_manager_1.clients.get(ws);
            (0, client_manager_1.unregisterClient)(ws);
            if (c)
                console.log("disconnected:", c.deviceId ?? c.userId);
        });
    });
}
//# sourceMappingURL=index.js.map