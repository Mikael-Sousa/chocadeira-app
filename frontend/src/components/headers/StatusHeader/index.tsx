import { useTheme } from "@/src/theme/useTheme";
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";
import { Text } from "@/src/components/ui";
import { View } from "react-native";
import ArrowButton from "./ArrowButton";
import ChartCard from "./ChartCard";
import { createStyles } from "./styles";
import { Props } from "./types";

export default function App({ indexSelected, setIndexSelected, data, title }: Props) {
  const { theme } = useTheme();         
  const styles = createStyles(theme);    

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(theme.backgroundMain); 
  }, [theme]);

  return (
    <View style={styles.container}>
      <View style={styles.content1}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.content2}>
        <ArrowButton title="left" setIndexSelected={setIndexSelected} theme={theme} />
        <ChartCard indexSelected={indexSelected} data={data} theme={theme} />
        <ArrowButton title="right" setIndexSelected={setIndexSelected} theme={theme} />
      </View>
    </View>
  );
}
