import { createContext } from "react";
import { SensorData } from "@/src/screens/Temperature/temperature.types";

export type WebSocketContextData = {
  connected: boolean;
  sensorData: SensorData;
  history: number[][];
  connect: () => void;
  disconnect: () => void
};

export const WebSocketContext =
  createContext<WebSocketContextData | null>(null);
