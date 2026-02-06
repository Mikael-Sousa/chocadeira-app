import { Item } from "@/src/components/InfoCard";

export function useConnection() {
  const connections: Item[] = [
    {
      icon: "wifi",
      title: "Wi-Fi",
      connection: true,
      status: "",
      hiddenStatus: ""
    },
    {
      icon: "bluetooth",
      title: "Bluetooth",
      connection: false,
      status: "",
      hiddenStatus: ""
    },
  ];

  const lastConnection: Item[] = [
    {
      icon: "view-dashboard-outline",
      title: "204.225-70",
      hiddenStatus: "02:00 hrs",
      status: "",
    },
  ];

  return {
    connections,
    lastConnection,
  };
}
