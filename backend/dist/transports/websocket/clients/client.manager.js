"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clients = void 0;
exports.registerClient = registerClient;
exports.unregisterClient = unregisterClient;
exports.getAppClients = getAppClients;
const ws_1 = __importDefault(require("ws"));
exports.clients = new Map();
function registerClient(ws, client) {
    exports.clients.set(ws, client);
}
function unregisterClient(ws) {
    exports.clients.delete(ws);
}
function getAppClients() {
    return Array.from(exports.clients.entries())
        .filter(([, client]) => client.kind === "app")
        .map(([ws]) => ws)
        .filter((ws) => ws.readyState === ws_1.default.OPEN);
}
//# sourceMappingURL=client.manager.js.map