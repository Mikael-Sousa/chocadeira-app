import { FONTS } from "@/src/theme/styles";
import { StyleSheet } from "react-native";

export function createStyles(theme: any) {
  return StyleSheet.create({
    container: {
      gap: 8,
      width: "100%",
    },

    label: {
      color: theme.text,
      fontSize: FONTS.fontSize1,
      fontWeight: "600",
    },

    inputContainer: {
      flexDirection: "row",
      alignItems: "center",

      borderWidth: 2,
      borderColor: theme.primary,
      borderRadius: 14,

      paddingHorizontal: 16,

      backgroundColor: theme.background,
    },

    input: {
      flex: 1,
      paddingVertical: 14,
      color: theme.text,
      fontSize: FONTS.fontSize1,
    },

    icon: {
      fontSize: FONTS.fontSize2,
      color: theme.primary,
    },
  });
}