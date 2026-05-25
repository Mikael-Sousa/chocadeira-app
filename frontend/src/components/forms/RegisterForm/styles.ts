import { FONTS } from "@/src/theme/styles";
import { StyleSheet } from "react-native";

export function createStyles(theme: any) {
  return StyleSheet.create({
    container: {
      width: "100%",
      gap: 20,
      paddingHorizontal: 16
    },

    button: {
      backgroundColor: theme.primary,
      paddingVertical: 16,
      borderRadius: 14,

      alignItems: "center",
      justifyContent: "center",
    },

    buttonText: {
      color: theme.background,
      fontSize: FONTS.fontSize1,
      fontWeight: "700",
    },
    loginButton: {
      marginTop: 16,
      alignItems: "center",
      justifyContent: "center",
    },

    loginButtonText: {
      color: theme.primary,
      fontSize: 16,
      fontWeight: "600",
      textDecorationLine: "underline",
    },
  });
}