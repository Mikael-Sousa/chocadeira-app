import { FONTS } from "@/src/theme/styles";
import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.backgroundMain,
      marginVertical: 8,
      width: "60%",
      alignSelf: "center",
    },

    title: {
      color: theme.primary,
      fontSize: 16,
      marginBottom: 6,
      fontWeight: "bold",
      fontFamily: FONTS.fontMain,
    },

    chart: {
      borderRadius: 0,
    },
  });

export const chartProps = (theme: any) => ({
  width: screenWidth * 0.6,
  height: 80,
  withDots: true,
  withInnerLines: false,
  withOuterLines: false,
  withShadow: false,
  bezier: true,
  chartConfig: {
    backgroundColor: theme.background,
    backgroundGradientFrom: theme.background,
    backgroundGradientTo: theme.background,
    decimalPlaces: 1,
    color: () => theme.primary,
    labelColor: () => theme.primary,
    propsForDots: {
      r: "4",
      strokeWidth: "2",
      stroke: theme.secondary,
    },
    propsForBackgroundLines: {
      strokeDasharray: "",
    },
  },
});
