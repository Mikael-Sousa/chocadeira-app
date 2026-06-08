import { Item } from "@/src/components/cards/InfoCard/types";

export function useConnection(connected: boolean) {

  
  const connections: Item[] = [
    {
      icon: "wifi",
      title: "Wi-Fi",
      connection: connected,
      status: "",
      hiddenStatus: ""
    },
  ];

  const lastConnection: Item[] = [
    {
      icon: "help-rhombus-outline",
      title: "Tutorial",
    },
  ];

  return {
    connections,
    lastConnection,
  };
}
