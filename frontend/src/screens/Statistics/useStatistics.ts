import { Item } from "@/src/components/cards/InfoCard";

export function useStatistics() {
    const statistics: Item[] = [
        {
            icon: "clock-outline",
            title: "Tempo Ligado",
            status: "",
            hiddenStatus: "02:00",
        },
        {
            icon: "egg-outline",
            title: "Tempo p/ Eclosão",
            status: "",
            hiddenStatus: "20 dias",
        },
        {
            icon: "sync",
            title: "Giros Diários",
            status: "",
            hiddenStatus: "6 giros p/dia",
        },
        {
            icon: "door-open",
            title: "Estado da Porta",
            status: "",
            hiddenStatus: "Aberta",
        },
        {
            icon: "calendar-month-outline",
            title: "Data Prevista",
            status: "",
            hiddenStatus: "01/01/2026",
        },
    ]

    return {
        statistics,
    };

}
