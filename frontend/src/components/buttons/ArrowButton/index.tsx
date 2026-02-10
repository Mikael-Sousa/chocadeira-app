import { Text } from "@/src/components/ui";
import { Pressable, View } from "react-native";
import { createStyles } from "./styles";
import { Props } from "./types";

export default function ArrowButton({
  direction,
  onPress,
  disabled,
  theme,
}: Props) {
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.btn,
          disabled && styles.disabled,
        ]}
      >
        <Text style={styles.title}>
          {direction === "left" ? "<" : ">"}
        </Text>
      </Pressable>
    </View>
  );
}
