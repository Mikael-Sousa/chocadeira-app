import { Item } from "@/src/components/cards/InfoCard/types";

export function useSettings() {
    const settings: Item[] = [
        {
            icon: "theme-light-dark",
            title: "Tema",
            status: "",
            hiddenStatus: "",
        },
        {
            icon: "bell-outline",
            title: "Notificações",
            status: "",
            hiddenStatus: "",
        },
        {
            icon: "translate",
            title: "Idioma",
            status: "",
            hiddenStatus: "",
        },
        {
            icon: "account-cog-outline",
            title: "Conta",
            status: "",
            hiddenStatus: "",
        },
        {
            icon: "information-outline",
            title: "Sobre",
            status: "",
            hiddenStatus: "",
        },
    ]

    return {
        settings,
    };

}
