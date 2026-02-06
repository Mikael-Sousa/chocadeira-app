import { useTheme } from "@/src/theme/useTheme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { createStyles } from "./styles";

type Props = {
  title: string;
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>["name"] | "none";
};

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
