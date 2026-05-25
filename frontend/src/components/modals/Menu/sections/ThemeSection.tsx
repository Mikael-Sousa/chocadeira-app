// sections/ThemeSection.tsx

import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Text } from "@/src/components/ui";
import { useTheme } from "@/src/hooks/theme/useTheme";
import { createStyles } from "../styles";

type Props = {
  setVisible: (value: boolean) => void;
};

export default function ThemeSection({
  setVisible,
}: Props) {

  const { theme, toggleTheme } = useTheme();
  const styles = createStyles(theme);

  return (
    <>
      <Text style={styles.modalTitle}>
        Tema
      </Text>

      <Pressable
        style={styles.menuItemLight}
        onPress={() => {
          if (theme.backgroundMain === "#000") {
            toggleTheme();
          }

          setVisible(false);
        }}
      >
        <MaterialCommunityIcons
          name="white-balance-sunny"
          style={styles.icon}
        />

        <Text style={styles.menuTextLight}>
          Claro
        </Text>
      </Pressable>

      <Pressable
        style={styles.menuItemDark}
        onPress={() => {
          if (theme.backgroundMain === "#fff") {
            toggleTheme();
          }

          setVisible(false);
        }}
      >
        <MaterialCommunityIcons
          name="weather-night"
          style={styles.icon}
        />

        <Text style={styles.menuTextDark}>
          Escuro
        </Text>
      </Pressable>
    </>
  );
}