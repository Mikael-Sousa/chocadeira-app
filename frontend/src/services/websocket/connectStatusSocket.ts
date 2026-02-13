type Callbacks = {
  onOpen?: () => void;
  onClose?: () => void;
  onError?: () => void;
  onData: (data: any) => void;
  onAlert: (msg: string) => void;
};

export function connectStatusSocket({
  onOpen,
  onClose,
  onError,
  onData,
  onAlert,
}: Callbacks) {
  const ws = new WebSocket("ws://10.18.70.241:8080");

  ws.onopen = () => {
    onOpen?.();
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

  ws.onerror = () => {
    onError?.();
  };

  ws.onclose = () => {
    onClose?.();
  };

  return ws;
}
