import { useEffect } from 'react';
import { URL } from '../../utils/url';
import { postNotificationsAPI } from '../api/notifications/postNotifications';
import { getToken } from '../auth/storage';
import { useAuth } from '@/src/hooks/auth/useAuth';

type Callbacks = {
  onOpen?: () => void;
  onClose?: () => void;
  onError?: () => void;
  onData: (data: any) => void;
  onAlert: (msg: string) => void;
  onSendNotification: (title: string, message: string) => void;
};

// Custom Hook para gerenciar conexão WebSocket com servidor.
// Recebe callbacks para responder a eventos de conexão, mensagens e erros.
export function useConnectStatusSocket({
  onOpen,
  onClose,
  onError,
  onData,
  onAlert,
  onSendNotification,
}: Callbacks) {
  const { user } = useAuth();

  useEffect(() => {
    if (!user?.id) return;

    const ws = new WebSocket(`${URL}`);

    ws.onopen = async () => {
      onOpen?.();
      // Envia evento de autenticação ao servidor com o user_id.
      ws.send(
        JSON.stringify({
          type: "APP_AUTH",
          user_id: user?.id,
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

      if (json.type === "DATA") {
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

    return () => {
      ws.close();
    };
  }, [user?.id, onOpen, onClose, onError, onData, onAlert, onSendNotification]);
}

