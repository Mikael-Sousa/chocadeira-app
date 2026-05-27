import { createContext, ReactNode, useState } from "react";
import { useFonts } from "expo-font";

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

const light: ThemeType = {
  primary: "#000",
  secondary: "#555",
  backgroundMain: "#fff",
  background: "#f0f0f0",
  fontRegular: "Caprasimo-Regular",
};

const dark: ThemeType = {
  primary: "#fff",
  secondary: "#aaa",
  backgroundMain: "#000",
  background: "#111",
  fontRegular: "Caprasimo-Regular",
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>(light);

  const [fontsLoaded] = useFonts({
    "Caprasimo-Regular": require("../../assets/fonts/Caprasimo-Regular.ttf"),
  });

  function toggleTheme() {
    setTheme((prev) => (prev === light ? dark : light));
  }

  if (!fontsLoaded) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
