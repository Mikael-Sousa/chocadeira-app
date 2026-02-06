import { FONTS } from "@/src/theme/styles";
import { StyleSheet } from "react-native";

export function createStyles(theme: any) {
  return StyleSheet.create({
    navbar: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      height: 60,
      width: "100%",
      backgroundColor: theme.background,
      borderTopWidth: 1,
      borderTopColor: theme.primary,
    },


    icon: {
      fontSize: FONTS.fontSize3,
      color: theme.primary,
    },
  });
}
