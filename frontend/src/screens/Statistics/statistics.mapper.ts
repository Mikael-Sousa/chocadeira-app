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
  const status = data?.payload?.status ?? {}

  return [
    {
      icon: "clock-outline",
      title: "Tempo Ligado",
      hiddenStatus:
        typeof status.uptime === "number"
          ? formatUptime(status.uptime)
          : "--",
    },

    {
      icon: "sync",
      title: "Giros Diários",
      hiddenStatus:
        typeof status.rotations_today === "number"
          ? `${status.rotations_today} giros`
          : "--",
    },

    {
      icon: "door-open",
      title: "Estado da Porta",
      hiddenStatus:
        typeof status.is_door_open === "boolean"
          ? status.is_door_open
            ? "Aberta"
            : "Fechada"
          : "--",
    },

    {
      icon: "calendar-month-outline",
      title: "Data p/ Eclosão",
      hiddenStatus: formatDate(status.expected_hatch_date),
    },
  ];
}