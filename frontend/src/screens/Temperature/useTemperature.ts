import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { connectStatusSocket } from "@/src/services/websocket/index";
import { mapTemperatureItems, mapSituations } from "./temperature.mapper";
import { SensorData } from "./temperature.types";

export function useTemperature() {
  const [indexSelected, setIndexSelected] = useState(0);
  const [sensorData, setSensorData] = useState<SensorData>({});
  const [history, setHistory] = useState<number[][]>([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);

  useEffect(() => {
    const socket = connectStatusSocket({
      onData: (d) => {
        setSensorData(d);
        setHistory((prev) => updateHistory(prev, d));
      },
      onAlert: (msg) => Alert.alert("Alerta do sistema", msg),
    });

    return () => socket.close();
  }, []);

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
