import { Item } from "@/src/components/cards/InfoCard/types";
import { SensorData } from "@/src/types/data";

function formatUptime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  return `${hours}h ${minutes}min`;
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
      title: "Data p/ Eclosão",
      hiddenStatus:
        data.status.expected_hatch_date === undefined
          ? "--"
          : formatDate(data.status.expected_hatch_date),
    },
  ];
}