import React from "react";
import { View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { chartProps, createStyles } from "./styles";

type Props = {
  indexSelected: number;
  data: number[][];
  theme: any;
};

export default function ChartCard({ indexSelected, data, theme }: Props) {

  const styles = createStyles(theme);
  const chartConfig = chartProps(theme);

  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: ["1", "2", "3", "4", "5"],
          datasets: [{ data: data[indexSelected] }],
        }}
        {...chartConfig}
        style={styles.chart}
      />
    </View>
  );
}
