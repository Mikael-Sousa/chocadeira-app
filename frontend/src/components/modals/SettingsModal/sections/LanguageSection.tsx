// sections/LanguageSection.tsx

import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Text } from "@/src/components/ui";
import { useTheme } from "@/src/hooks/theme/useTheme";

import { createStyles } from "../styles";

type Props = {
  setVisible: (value: boolean) => void;
};

export default function LanguageSection({
  setVisible,
}: Props) {

  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <>
      <Text style={styles.modalTitle}>
        Idioma
      </Text>

      <Pressable
        style={styles.menuItem}
        onPress={() => setVisible(false)}
      >
        <MaterialCommunityIcons
          name="translate"
          style={styles.icon}
        />

        <Text style={styles.menuText}>
          Português
        </Text>
      </Pressable>
    </>
  );
}