import { Item } from "@/src/components/cards/InfoCard/types";
import { SensorData } from "@/src/types/data";

export function mapTemperatureItems(data: SensorData): Item[] {
  const telemetry = data?.telemetry ?? {};

  return [
    {
      icon: "thermometer",
      title: "Umidade",
      status:
        typeof telemetry.humidity === "number"
          ? `${telemetry.humidity.toFixed(1)} %`
          : "--",
    },
    {
      icon: "water",
      title: "Temp. da Água",
      status:
        typeof telemetry.water_temperature === "number"
          ? `${telemetry.water_temperature.toFixed(1)} °C`
          : "--",
    },
    {
      icon: "weather-windy",
      title: "Temp. do Ar",
      status:
        typeof telemetry.air_temperature === "number"
          ? `${telemetry.air_temperature.toFixed(1)} °C`
          : "--",
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
