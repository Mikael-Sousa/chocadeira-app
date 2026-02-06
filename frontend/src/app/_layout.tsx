import { Slot } from "expo-router";
import { createContext, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/navigation/Navbar";

type ThemeType = {
  primary: string;
  secondary: string;
  backgroundMain: string;
  background: string;
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
};

const dark = {
  primary: "#fff",
  secondary: "#aaa",
  backgroundMain: "#000",
  background: "#111",
};

export default function Layout() {
  const [theme, setTheme] = useState(light);

  function toggleTheme() {
    setTheme((prev) => (prev === light ? dark : light));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.backgroundMain }}>
        <View style={{ flex: 1 }}>
          <Slot />
        </View>

        <Navbar theme={theme} toggleTheme={toggleTheme}/>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}
