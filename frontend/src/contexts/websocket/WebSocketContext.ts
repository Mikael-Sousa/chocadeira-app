import { createContext } from "react";
import { SensorData } from "@/src/screens/Temperature/temperature.types";

export type WebSocketContextData = {
  connected: boolean;
  sensorData: SensorData;
  history: number[][];
};

export const WebSocketContext =
  createContext<WebSocketContextData | null>(null);
