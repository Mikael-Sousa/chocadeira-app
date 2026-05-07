import { Item } from "@/src/components/cards/InfoCard/types";
import { SensorData } from "@/src/types/data";

export function mapTemperatureItems(data: SensorData): Item[] {
  return [
    {
      icon: "thermometer",
      title: "Umidade",
      status:
        data.telemetry.humidity === undefined
          ? "--"
          : `${data.telemetry.humidity.toFixed(1)} %`,
    },
    {
      icon: "water",
      title: "Temp. da Água",
      status:
        data.telemetry.water_temperature === undefined
          ? "--"
          : `${data.telemetry.water_temperature.toFixed(1)} °C`,
    },
    {
      icon: "weather-windy",
      title: "Temp. do Ar",
      status:
        data.telemetry.air_temperature === undefined
          ? "--"
          : `${data.telemetry.air_temperature.toFixed(1)} °C`,
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
