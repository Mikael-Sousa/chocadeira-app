import { Slot } from "expo-router";
import { createContext, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import Navbar from "../components/navigation/Navbar";
import { WebSocketProvider } from "@/src/contexts/websocket/WebSocketProvider";

type ThemeType = {
  primary: string;
  secondary: string;
  backgroundMain: string;
  background: string;
  fontRegular: string;
};

type ThemeContextProps = {
  theme: ThemeType;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProps | null>(null);

const light = {
  primary: "#000",
  secondary: "#555",
  backgroundMain: "#fff",
  background: "#f0f0f0",
  fontRegular: "Caprasimo-Regular",
};

const dark = {
  primary: "#fff",
  secondary: "#aaa",
  backgroundMain: "#000",
  background: "#111",
  fontRegular: "Caprasimo-Regular",
};

export default function Layout() {
  const [theme, setTheme] = useState(light);

  const [fontsLoaded] = useFonts({
    "Caprasimo-Regular": require("../assets/fonts/Caprasimo-Regular.ttf"),
  });

  function toggleTheme() {
    setTheme((prev) => (prev === light ? dark : light));
  }

  if (!fontsLoaded) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <WebSocketProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundMain }}>
          <View style={{ flex: 1 }}>
            <Slot />
          </View>

          <Navbar theme={theme} toggleTheme={toggleTheme} />
        </SafeAreaView>
      </WebSocketProvider>
    </ThemeContext.Provider>
  );
}
