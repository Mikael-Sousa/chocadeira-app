import { FONTS } from "@/src/theme/styles";
import { StyleSheet } from "react-native";

export function createStyles(theme: any) {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      padding: 60,
      margin: 30,
      gap: 20,
      borderRadius: 14,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.background,
      width: "100%",
      borderWidth: 2,
      borderColor: theme.primary,
    },

    title: {
      color: theme.primary,
      fontSize: FONTS.fontSize2,
      fontFamily: FONTS.fontMain,
    },

    icon: {
      fontSize: FONTS.fontSize3,
      color: theme.primary,
    },
  });
}
