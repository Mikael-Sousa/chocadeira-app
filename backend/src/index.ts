import WebSocket, { WebSocketServer } from "ws";

type Cliente = {
  deviceId: string;
};


const wss = new WebSocketServer({ port: 8080 });
const clientes = new Map<WebSocket, Cliente>();

//tests
function onDataFake() {
  return {
    temp_ar: Number((37.7 + Math.random() * 0.2).toFixed(2)),
    temp_agua: Number((38.4 + Math.random() * 0.2).toFixed(2)),
    umidade_1: Math.floor(51 + Math.random() * 3),
    timestamp: Date.now(),
  };
}

setInterval(() => {
  const payload = onDataFake();

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({
        type: "data",
        deviceId: "SIMULADOR",
        payload
      }));
    }
  });

  console.log("Dados enviados:", payload);
}, 5000);


wss.on("connection", (ws) => {
  console.log("Conexão recebida");

  ws.on("message", (msg) => {
    let dados;
    try {
      dados = JSON.parse(msg.toString());
    } catch {
      return;
    }

    if (dados.deviceId) {
      clientes.set(ws, { deviceId: dados.deviceId });
      console.log("Registrado:", dados.deviceId);
      return;
    }

    const cliente = clientes.get(ws);
    if (!cliente) {
      console.log("Cliente não registrado");
      return;
    }

    console.log(`${cliente.deviceId}:`, dados);

    if (dados.pedirConfig) {
      ws.send(JSON.stringify({
        type: "limits",
        payload: {
          temp_min: 37.2,
          temp_max: 37.8,
          umid_min: 50,
          umid_max: 60
        }
      }));
      return;
    }

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({
          type: "data",
          deviceId: cliente.deviceId,
          payload: dados
        }));
      }
    });
  });

  ws.on("close", () => {
    const c = clientes.get(ws);
    if (c) console.log("Desconectado:", c.deviceId);
    clientes.delete(ws);
  });
});

console.log("WebSocket rodando na porta 8080");
