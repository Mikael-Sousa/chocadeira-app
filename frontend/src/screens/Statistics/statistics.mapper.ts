import { Item } from "@/src/components/cards/InfoCard/types";
import { SensorData } from "@/src/types/data";

function formatUptime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  return `${hours}h ${minutes}min`;
}

function formatDate(date: string | null | undefined): string {
  if (!date) return "--";

  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) return "--";

  return parsedDate.toLocaleDateString("pt-BR");
}

export function mapDeviceStatusItems(data: SensorData): Item[] {
  const status = data?.status ?? {}

  const uptime =
    typeof status.uptime === "number"
      ? formatUptime(status.uptime)
      : "--";
  const rotationsToday =
    typeof status.rotations_today === "number"
      ? `${status.rotations_today} giros`
      : "--";
  const doorState =
    typeof status.is_door_open === "boolean"
      ? status.is_door_open
        ? "Aberta"
        : "Fechada"
      : "--";
  const hatchDate = formatDate(status.expected_hatch_date);

  return [
    {
      icon: "clock-outline",
      title: "Tempo Ligado",
      hiddenStatus: uptime,
    },

    {
      icon: "sync",
      title: "Giros Diários",
      hiddenStatus: rotationsToday,
    },

    {
      icon: "door-open",
      title: "Estado da Porta",
      hiddenStatus: doorState,
    },

    {
      icon: "calendar-month-outline",
      title: "Data p/ Eclosão",
      hiddenStatus: hatchDate,
    },
  ];
}