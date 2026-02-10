import { useEffect, useRef, useState } from "react";
import { Alert } from "react-native";
import { WebSocketContext } from "./WebSocketContext";
import { connectStatusSocket } from "@/src/services/websocket";
import { SensorData } from "@/src/screens/Temperature/temperature.types";

export function WebSocketProvider({ children }: { children: React.ReactNode }) {
  const socketRef = useRef<WebSocket | null>(null);

  const [connected, setConnected] = useState(false);
  const [sensorData, setSensorData] = useState<SensorData>({});
  const [history, setHistory] = useState<number[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const createSocket = () => {
  socketRef.current = connectStatusSocket({
    onOpen: () => setConnected(true),
    onClose: () => setConnected(false),
    onError: () => setConnected(false),
    onData: (d) => {
      setSensorData(d);
      setHistory((prev) => updateHistory(prev, d));
    },
    onAlert: (msg) => Alert.alert("Alerta do sistema", msg),
  });
};


  const connect = () => {
  if (socketRef.current) return; // já conectado
  createSocket();
};


  const disconnect = () => {
    socketRef.current?.close();
    socketRef.current = null;
  };

  useEffect(() => {
    createSocket();

    return () => {
      socketRef.current?.close();
    };
  }, []);


  return (
    <WebSocketContext.Provider
      value={{
        connected,
        sensorData,
        history,
        connect,
        disconnect,
      }}
    >
      {children}
    </WebSocketContext.Provider>
  );
}

function updateHistory(prev: number[][], d: SensorData) {
  const next = [...prev];

  if (d.umidade_1 !== undefined)
    next[0] = [...next[0].slice(1), d.umidade_1];

  if (d.temp_agua !== undefined)
    next[1] = [...next[1].slice(1), d.temp_agua];

  if (d.temp_ar !== undefined)
    next[2] = [...next[2].slice(1), d.temp_ar];

  return next;
}
