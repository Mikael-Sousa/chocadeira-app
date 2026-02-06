import { Item } from "@/src/components/InfoCard";
import { SensorData } from "./temperature.types";

export function mapTemperatureItems(data: SensorData): Item[] {
  return [
    {
      icon: "thermometer",
      title: "Umidade",
      status:
        data.umidade_1 === undefined
          ? "--"
          : `${data.umidade_1.toFixed(1)} %`,
      hiddenStatus: "",
    },
    {
      icon: "water",
      title: "Temp. da Água",
      status:
        data.temp_agua === undefined
          ? "--"
          : `${data.temp_agua.toFixed(1)} °C`,
      hiddenStatus: "",
    },
    {
      icon: "weather-windy",
      title: "Temp. do Ar",
      status:
        data.temp_ar === undefined
          ? "--"
          : `${data.temp_ar.toFixed(1)} °C`,
      hiddenStatus: "",
    },
  ];
}

export function mapSituations(history: number[][]) {
  return history.map((row) => {
    const v = row[4];
    if (v > 42) return "red";
    if (v < 32) return "blue";
    return "ok";
  });
}
