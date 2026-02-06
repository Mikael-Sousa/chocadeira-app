type Callbacks = {
  onData: (data: any) => void;
  onAlert: (msg: string) => void;
};

export function connectStatusSocket({ onData, onAlert }: Callbacks) {
  const ws = new WebSocket("ws://10.40.75.157:8080");

  ws.onopen = () => {
    ws.send(
      JSON.stringify({
        type: "register",
        deviceId: "APP-01",
      })
    );
  };

  ws.onmessage = (event) => {
    let json: any;
    try {
      json = JSON.parse(event.data);
    } catch {
      return;
    }

    if (json.type === "alert") {
      onAlert(json.payload.mensagem);
    }

    if (json.type === "data") {
      onData(json.payload);
    }
  };

  return ws;
}
