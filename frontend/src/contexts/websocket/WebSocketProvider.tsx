import { useEffect, useRef, useState } from "react";
import { Alert } from "react-native";
import { WebSocketContext } from "./WebSocketContext";
import { connectStatusSocket } from "@/src/services/websocket";
import { SensorData } from "@/src/types/data";
import { useNotification } from "@/src/hooks/notification/useNotification";

export function WebSocketProvider({ children }: { children: React.ReactNode }) {
  const socketRef = useRef<WebSocket | null>(null);
  const { sendNotification } = useNotification();

  const [connected, setConnected] = useState(false);
  const [sensorData, setSensorData] = useState<SensorData>({
  telemetry: {
    water_temperature: 0,
    air_temperature: 0,
    humidity: 0,
    timestamp: ""
  },
  status: {
    uptime: 0,
    time_to_hatch: 0,
    daily_rotations: 0,
    is_door_open: false,
    expected_hatch_date: ""
  }
});
  const [history, setHistory] = useState<number[][]>([
    [],
    [],
    [],
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
    onSendNotification: sendNotification,
  });
};


  const connect = () => {
  if (socketRef.current) return;
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

  if (d.telemetry.humidity !== undefined) {
    next[0] = [
      ...next[0],
      d.telemetry.humidity,
    ].slice(-10);
  }

  if (d.telemetry.water_temperature !== undefined) {
    next[1] = [
      ...next[1],
      d.telemetry.water_temperature,
    ].slice(-10);
  }

  if (d.telemetry.air_temperature !== undefined) {
    next[2] = [
      ...next[2],
      d.telemetry.air_temperature,
    ].slice(-10);
  }

  return next;
}
