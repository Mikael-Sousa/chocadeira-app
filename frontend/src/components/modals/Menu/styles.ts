import { StyleSheet } from "react-native";

export function createStyles(theme: any) {
  return StyleSheet.create({
    overlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.55)",
      paddingHorizontal: 20,
    },

    modalView: {
      width: "90%",
      backgroundColor: theme.background,
      borderRadius: 20,
      paddingVertical: 25,
      paddingHorizontal: 22,
      alignItems: "center",
      position: "relative",
    },

    modalTitle: {
      fontSize: 26,
      fontWeight: "800",
      marginBottom: 20,
      color: theme.primary,
      textTransform: "uppercase",
    },

    menuItemLight: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#fff",
      paddingVertical: 14,
      paddingHorizontal: 14,
      borderRadius: 14,
      marginBottom: 12,
      borderWidth: 2,
      borderColor: "#222",
    },

    menuItemDark: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#222",
      paddingVertical: 14,
      paddingHorizontal: 14,
      borderRadius: 14,
      marginBottom: 12,
      borderWidth: 2,
      borderColor: "#fff",
    },

    icon: {
      fontSize: 26,
      color: theme.secondary,
      marginRight: 12,
    },

    menuTextLight: {
      fontSize: 18,
      fontWeight: "600",
      color: "#222",
    },

    menuTextDark: {
      fontSize: 18,
      fontWeight: "600",
      color: "#fff",
    },

    closeButton: {
      position: "absolute",
      top: 12,
      right: 12,
      padding: 6,
    },

    closeIcon: {
      fontSize: 28,
      color: theme.secondary,
    },
  });
}
