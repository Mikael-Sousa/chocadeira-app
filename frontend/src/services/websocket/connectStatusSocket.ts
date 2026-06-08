import { URL } from '../../utils/url';
import { postNotificationsAPI } from '../api/notifications/postNotifications';
import { getToken } from '../auth/storage';

type Callbacks = {
  onOpen?: () => void;
  onClose?: () => void;
  onError?: () => void;
  onData: (data: any) => void;
  onAlert: (msg: string) => void;
  onSendNotification: (title: string, message: string) => void;
};

export function connectStatusSocket({
  onOpen,
  onClose,
  onError,
  onData,
  onAlert,
  onSendNotification,
}: Callbacks) {
  const ws = new WebSocket(`${URL}`);

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

  ws.onerror = async () => {
    const token = await getToken();
    onError?.();
    onSendNotification(
      'Conexão perdida',
      'A conexão Wi-fi foi perdida.'
    );
    await postNotificationsAPI(
      token,
      {
        sensor: 'wifi_signal',
        status: 'error',
        value: 0,
      }
    );

  };

  ws.onclose = () => {
    onClose?.();
  };

  return ws;
}
