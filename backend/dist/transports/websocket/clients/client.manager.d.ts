import WebSocket from "ws";
export type Client = {
    kind: "device" | "app";
    deviceId?: string;
    userId?: string;
};
export declare const clients: Map<WebSocket, Client>;
export declare function registerClient(ws: WebSocket, client: Client): void;
export declare function unregisterClient(ws: WebSocket): void;
export declare function getAppClients(): WebSocket[];
//# sourceMappingURL=client.manager.d.ts.map