import { useTheme } from "@/src/theme/useTheme";
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";
import { Text } from "@/src/components/ui";
import { View } from "react-native";

import ArrowButton from "../../buttons/ArrowButton";
import ChartCard from "./ChartCard";
import { createStyles } from "./styles";
import { Props } from "./types";

export default function App({
  indexSelected,
  setIndexSelected,
  data,
  title,
}: Props) {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(theme.backgroundMain);
  }, [theme]);

  const maxIndex = data.length - 1;

  function goLeft() {
    setIndexSelected((prev) => (prev === 0 ? maxIndex : prev - 1));
  }

  function goRight() {
    setIndexSelected((prev) => (prev === maxIndex ? 0 : prev + 1));
  }

  return (
    <View style={styles.container}>
      <View style={styles.content1}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.content2}>
        <ArrowButton
          direction="left"
          theme={theme}
          onPress={goLeft}
        />

        <ChartCard
          indexSelected={indexSelected}
          data={data}
          theme={theme}
        />

        <ArrowButton
          direction="right"
          theme={theme}
          onPress={goRight}
        />
      </View>
    </View>
  );
}
