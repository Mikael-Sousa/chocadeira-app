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
    description:
      "Conecte o ESP32 à energia e aguarde alguns segundos até ele iniciar.",
    card: {
      title: "Dispositivo",
      icon: "power-plug",
    },
  },
  {
    id: "2",
    title: "Conecte-se ao Wi-Fi do ESP",
    description:
      "No celular, vá em Configurações → Wi-Fi e conecte-se à rede do dispositivo.",
    card: {
      title: "ESP32_Config",
      icon: "wifi",
    },
  },
  {
    id: "3",
    title: "Abra o navegador",
    description:
      "Com o celular conectado ao Wi-Fi do ESP, abra o navegador (Chrome, Firefox, etc.).",
    card: {
      title: "Navegador",
      icon: "web",
    },
  },
  {
    id: "4",
    title: "Acesse a página de configuração",
    description:
      "Digite 123.456.789 na barra de endereço do navegador e pressione Enter.",
    card: {
      title: "123.456.789",
      icon: "magnify",
    },
  },
  {
    id: "5",
    title: "Informe os dados do Wi-Fi",
    description:
      "Digite o nome e a senha do seu Wi-Fi e toque em Salvar.",
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
    title: "Aguarde a conexão",
    description:
      "O ESP32 salvará os dados e se conectará ao Wi-Fi automaticamente.",
    card: {
      title: "Conectando",
      icon: "loading",
    },
  },
  {
    id: "7",
    title: "Conecte-se ao Wi-Fi configurado",
    description:
      "Volte às configurações de Wi-Fi do celular e conecte-se à mesma rede informada no ESP32.",
    card: {
      title: "Wi-Fi",
      icon: "wifi-check",
    },
  },
  {
    id: "8",
    title: "Abra o aplicativo",
    description:
      "Ao abrir o aplicativo, o dispositivo já estará conectado automaticamente.",
    card: {
      title: "Conexão concluída",
      icon: "check-circle-outline",
    },
  },
];
