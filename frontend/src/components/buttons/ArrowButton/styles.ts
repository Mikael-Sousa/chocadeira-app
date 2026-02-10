import { StyleSheet } from "react-native";

export function createStyles(theme: any) {
  return StyleSheet.create({
    container: {
      width: 56,
      height: 56,
      justifyContent: "center",
      alignItems: "center",
    },

    btn: {
      width: 48,
      height: 48,
      borderRadius: 24,
      borderWidth: 2,
      borderColor: theme.primary,
      backgroundColor: theme.background,
      justifyContent: "center",
      alignItems: "center",
    },

    disabled: {
      opacity: 0.4,
    },

    title: {
      fontSize: 24,
      fontWeight: "700",
      color: theme.primary,
    },
  });
}
