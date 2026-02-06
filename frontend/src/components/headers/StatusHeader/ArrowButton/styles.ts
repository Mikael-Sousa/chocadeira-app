import { FONTS } from "@/src/theme/styles";
import { StyleSheet } from "react-native";

export function createStyles(theme: any) {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    btn: {
      backgroundColor: theme.background,
      paddingVertical: 8,
      paddingHorizontal: 14,
      borderRadius: 16,
      borderColor: theme.primary,
      borderWidth: 2,
      justifyContent: "center",
      alignItems: "center",
    },

    title: {
      color: theme.primary,
      fontSize: FONTS.fontSize1,
      fontFamily: FONTS.fontMain,
    },
  });
}
