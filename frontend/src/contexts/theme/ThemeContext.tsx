import { createContext, ReactNode, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { colors } from "@/src/constants/colors";
import { getSettingsAPI } from "@/src/services/api/settings/getSettings";
import { putSettingsAPI } from "@/src/services/api/settings/putSettings";
import { getToken } from "@/src/services/auth/storage";


type ThemeType = {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  card: string;
  text: string;
  fontRegular: string;
};

type ThemeContextProps = {
  theme: ThemeType;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProps | null>(null);

const light: ThemeType = {
  primary: colors.black,
  secondary: colors.gray500,
  background: colors.gray100,
  surface: colors.white,
  card: colors.white,
  text: colors.black,
  fontRegular: "Caprasimo-Regular",
};

const dark: ThemeType = {
  primary: colors.white,
  secondary: colors.gray700,
  background: colors.gray900,
  surface: colors.black,
  card: colors.black,
  text: colors.white,
  fontRegular: "Caprasimo-Regular",
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  
  const [theme, setTheme] = useState<ThemeType>(light);

  const [fontsLoaded] = useFonts({
    "Caprasimo-Regular": require("../../assets/fonts/Caprasimo-Regular.ttf"),
  });

  useEffect(() => {
    getThemeFromSettings();
  }, []);

  async function getThemeFromSettings() {
    const token = await getToken();
    if (!token) return;

    const response = await getSettingsAPI(token);
    if (!response.defaultTheme) {
      setTheme(dark);
    }
  }

    async function putThemeInSettings() {

    const token = await getToken();
    if (!token) return; 

    await putSettingsAPI(token, {
      defaultTheme: theme.surface === dark.surface
    });
  }

  function toggleTheme() {
    setTheme((prev) => (prev === light ? dark : light));
    putThemeInSettings();
  }

  if (!fontsLoaded) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
