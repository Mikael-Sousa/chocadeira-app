import { StyleSheet } from "react-native";

export function createStyles(theme: any) {
  return StyleSheet.create({
    container: {
      flex: 1,
    },

    overlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.55)",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
    },

    modalView: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.background,
      borderRadius: 22,
      paddingVertical: 32,
      paddingHorizontal: 26,
      alignItems: "center",
      gap: 14,
      borderWidth: 6,
      borderColor: theme.primary,
    },

    modalTitle: {
      fontSize: 28,
      fontWeight: "800",
      color: theme.primary,
      textAlign: "center",
      marginBottom: 8,
    },

    modalValue: {
      fontSize: 30,
      fontWeight: "600",
      color: theme.primary,
      textAlign: "center",
    },

    closeButton: {
      marginTop: 24,
      backgroundColor: theme.background,
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 12,
      borderWidth: 4,
      borderColor: theme.primary,
    },

    icon: {
      fontSize: 28,
      color: theme.primary,
    },
  });
}
