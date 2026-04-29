//tests
import { WebSocket, WebSocketServer } from "ws"

function onDataFake() {
  return {
    temp_ar: Number((37.7 + Math.random() * 0.2).toFixed(2)),
    temp_agua: Number((38.4 + Math.random() * 0.2).toFixed(2)),
    umidade_1: Math.floor(51 + Math.random() * 3),
    timestamp: Date.now(),
  };
}

export function simulator(wss: WebSocketServer, port: number) {
  console.log("incoming connection");
  setInterval(() => {
    const payload = onDataFake();

    wss.clients.forEach((client: any) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({
          type: "data",
          deviceId: "SIMULADOR",
          payload
        }));
      }
    });

    console.log("Payload:", payload);
  }, 3000);
  console.log(`WebSocket is running in the port ${port}`);
}