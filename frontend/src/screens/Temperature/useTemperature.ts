import { useState } from "react";
import { useWebSocket } from "@/src/contexts/websocket/useWebSocket";
import { mapTemperatureItems, mapSituations } from "./temperature.mapper";

export function useTemperature() {
  const { sensorData, history } = useWebSocket();
  const [indexSelected, setIndexSelected] = useState(0);

  const list = mapTemperatureItems(sensorData);
  const situations = mapSituations(history);

  return {
    list,
    history,
    situations,
    indexSelected,
    setIndexSelected,
  };
}
