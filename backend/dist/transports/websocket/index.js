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
            client_manager_1.clients.delete(ws);
            if (c)
                console.log("disconnected:", c.deviceId);
        });
    });
}
//# sourceMappingURL=index.js.map