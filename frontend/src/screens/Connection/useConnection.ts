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
      icon: "view-dashboard-outline",
      title: "204.225-70",
    },
  ];

  return {
    connections,
    lastConnection,
  };
}
