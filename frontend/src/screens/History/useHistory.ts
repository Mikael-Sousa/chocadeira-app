import { Item } from "@/src/components/cards/InfoCard/types";

export function useHistory() {
  const history: Item[] = [
  {
    icon: "calendar-month",
    title: "06/01/2026",
    status: "",
    hiddenStatus: "02:00",
  },
  {
    icon: "calendar",
    title: "05/01/2026",
    status: "",
    hiddenStatus: "20 dias",
  },
  {
    icon: "calendar-today",
    title: "04/01/2026",
    status: "",
    hiddenStatus: "6/dia",
  },
  {
    icon: "calendar-week",
    title: "03/01/2026",
    status: "",
    hiddenStatus: "Aberta",
  },
  {
    icon: "calendar-month-outline",
    title: "02/01/2026",
    status: "",
    hiddenStatus: "01/01/2026",
  },
]

  return {
    history,
  };

}
