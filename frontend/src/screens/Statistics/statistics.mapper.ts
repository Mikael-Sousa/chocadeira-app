import { Item } from "@/src/components/cards/InfoCard/types";
import { SensorData } from "@/src/types/data";

function formatUptime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  return `${hours}h ${minutes}min`;
}

function formatDays(seconds: number): string {
  const days = Math.floor(seconds / 86400);
  return `${days} dias`;
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("pt-BR");
}

export function mapDeviceStatusItems(data: SensorData): Item[] {
  return [
    {
      icon: "clock-outline",
      title: "Tempo Ligado",
      hiddenStatus:
        data.status.uptime === undefined
          ? "--"
          : formatUptime(data.status.uptime),
    },

    {
      icon: "egg-outline",
      title: "Tempo p/ Eclosão",
      hiddenStatus:
        data.status.time_to_hatch === undefined
          ? "--"
          : formatDays(data.status.time_to_hatch),
    },

    {
      icon: "sync",
      title: "Giros Diários",
      hiddenStatus:
        data.status.daily_rotations === undefined
          ? "--"
          : `${data.status.daily_rotations} giros`,
    },

    {
      icon: "door-open",
      title: "Estado da Porta",
      hiddenStatus:
        data.status.is_door_open === undefined
          ? "--"
          : data.status.is_door_open
            ? "Aberta"
            : "Fechada",
    },

    {
      icon: "calendar-month-outline",
      title: "Data Prevista",
      hiddenStatus:
        data.status.expected_hatch_date === undefined
          ? "--"
          : formatDate(data.status.expected_hatch_date),
    },
  ];
}