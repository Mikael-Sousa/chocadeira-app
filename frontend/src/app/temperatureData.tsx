import { Inter_400Regular, Inter_700Bold, useFonts } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import InfoCard, { Item } from "../components/InfoCard";
import StatusHeader from "../components/StatusHeader";

SplashScreen.preventAutoHideAsync();

type Limites = {
  temp_min: number;
  temp_max: number;
  umid_min: number;
  umid_max: number;
};

type SensorData = {
  temp_agua?: number;
  umidade_1?: number;
  temp_ar?: number;
};

export default function App() {
  const [indexSelected, setIndexSelected] = useState(0);

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  const [sensorData, setSensorData] = useState<SensorData>({});
  const [limites, setLimites] = useState<Limites | null>(null);

  const [history, setHistory] = useState<number[][]>([
    [0, 0, 0, 0, 0], // umidade
    [0, 0, 0, 0, 0], // temp água
    [0, 0, 0, 0, 0], // temp ar
  ]);

  // --- SPLASH ---
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // --- WEBSOCKET ---
  useEffect(() => {
    const ws = new WebSocket("ws://10.40.75.157:8080");

    ws.onopen = () => {
      console.log("📡 conectado");
      ws.send(
        JSON.stringify({
          type: "register",
          deviceId: "APP-01",
        })
      );
    };


    ws.onmessage = (event) => {
      console.log("📩 recebido:", event.data);

      let json: any;
      try {
        json = JSON.parse(event.data);
      } catch {
        return;
      }

      // ===== LIMITE =====
      if (json.type === "limits") {
        setLimites(json.payload);
        return;
      }

      // ===== ALERTA =====
      if (json.type === "alert") {
        Alert.alert("⚠️ Alerta do sistema", json.payload.mensagem);
        return;
      }

      // ===== DADOS =====
      if (json.type === "data") {
        const d = json.payload;
        setSensorData(d);

        setHistory((prev) => {
          const next = [...prev];

          if (d.umidade_1 !== undefined)
            next[0] = [...next[0].slice(1), d.umidade_1];

          if (d.temp_agua !== undefined)
            next[1] = [...next[1].slice(1), d.temp_agua];

          if (d.temp_ar !== undefined)
            next[2] = [...next[2].slice(1), d.temp_ar];

          return next;
        });
      }
    };

    ws.onerror = (e) => console.log("⚠️ erro:", e);
    ws.onclose = () => console.log("🔌 desconectado");

    return () => ws.close();
  }, []);

  if (!fontsLoaded) return null;

  // --- situações cor do gráfico ---
  const situations = history.map((row) => {
    const v = row[4];
    if (v > 42) return "red";
    if (v < 32) return "blue";
    return "ok";
  });

  // --- lista cards ---
  const list: Item[] = [
    {
      icon: "thermometer",
      title: "Umidade",
      status:
        sensorData.umidade_1 === undefined
          ? "--"
          : `${sensorData.umidade_1.toFixed(1)} %`,
      hiddenStatus: "",
    },
    {
      icon: "water",
      title: "Temp. da Água",
      status:
        sensorData.temp_agua === undefined
          ? "--"
          : `${sensorData.temp_agua.toFixed(1)} °C`,
      hiddenStatus: "",
    },
    {
      icon: "weather-windy",
      title: "Temp. do Ar",
      status:
        sensorData.temp_ar === undefined
          ? "--"
          : `${sensorData.temp_ar.toFixed(1)} °C`,
      hiddenStatus: "",
    },
  ];


  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.container}
        edges={["top", "bottom"]}
        onLayout={onLayoutRootView}
      >
        <View style={styles.content}>
          <StatusHeader
            title={list[indexSelected].title}
            indexSelected={indexSelected}
            setIndexSelected={setIndexSelected}
            data={history}
          />

          <InfoCard
            data={list}
            showModal={false}
            showMenu={false}
            title={""}
            situations={situations}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
