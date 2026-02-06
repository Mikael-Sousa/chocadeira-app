import { useTheme } from "@/src/theme/useTheme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "@/src/components/ui";
import { View } from "react-native";
import { createStyles } from "./styles";
import { Props } from "./types";

export default function App({ title, icon }: Props) {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      {icon !== "none" && icon && (
        <MaterialCommunityIcons name={icon} style={styles.icon} />
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
