import type { IconName } from "@/src/types/icons";

interface Card {
  title: string;
  icon: IconName;
}

export interface ConnectionStep {
  id: string;
  title: string;
  description: string;
  card: Card;
  cardSecondary?: Card;
}

export const connectionSteps: ConnectionStep[] = [
  {
    id: "1",
    title: "Ligue o ESP32",
    description: "Ligue o dispositivo.",
    card: {
      title: "Dispositivo",
      icon: "power-plug",
    },
  },
  {
    id: "2",
    title: "Conecte ao Wi‑Fi do ESP",
    description: "No celular, conecte-se à rede do dispositivo.",
    card: {
      title: "ESP32_Config",
      icon: "wifi",
    },
  },
  {
    id: "3",
    title: "Abra o navegador",
    description: "Abra o navegador no celular.",
    card: {
      title: "Navegador",
      icon: "web",
    },
  },
  {
    id: "4",
    title: "Acesse a página",
    description: "Digite 192.168.4.1 no navegador.",
    card: {
      title: "192.168.4.1",
      icon: "magnify",
    },
  },
  {
    id: "5",
    title: "Informe sua rede",
    description: "Insira rede e senha e toque em Salvar.",
    card: {
      title: "Rede Wi-Fi",
      icon: "wifi",
    },
    cardSecondary: {
      title: "Senha do Wi-Fi",
      icon: "lock",
    },
  },
  {
    id: "6",
    title: "Aguarde",
    description: "O dispositivo vai se conectar automaticamente.",
    card: {
      title: "Conectando",
      icon: "loading",
    },
  },
  {
    id: "7",
    title: "Volte ao seu Wi‑Fi",
    description: "Conecte o celular à rede configurada.",
    card: {
      title: "Wi-Fi",
      icon: "wifi-check",
    },
  },
  {
    id: "8",
    title: "Pronto!",
    description: "Aplicativo e dispositivo conectados.",
    card: {
      title: "Conexão concluída",
      icon: "check-circle-outline",
    },
  },
];
