import { Item } from "@/src/components/cards/InfoCard/types";
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
  return history.map((row, index) => {
    const lastValue = row[row.length - 1];

    if (index === 0) {
      // umidade
      if (lastValue > 55) return "red";
      if (lastValue < 50) return "blue";
      return "ok";
    }

    if (index === 1) {
      // temp água
      if (lastValue > 39) return "red";
      if (lastValue < 38) return "blue";
      return "ok";
    }

    if (index === 2) {
      // temp ar
      if (lastValue > 37.9) return "red";
      if (lastValue < 37.6) return "blue";
      return "ok";
    }

    return "ok";
  });
}
