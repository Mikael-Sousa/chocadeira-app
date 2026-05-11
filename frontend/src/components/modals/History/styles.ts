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
      width: "100%",
      maxHeight: "85%",
      backgroundColor: theme.background,
      borderRadius: 30,
      padding: 22,

      borderWidth: 1,
      borderColor: `${theme.primary}20`,
    },

    historyContainer: {
      width: "100%",
      marginTop: 12,
      gap: 18,
    },

    historyCard: {
      width: "100%",
      backgroundColor: theme.backgroundMain,
      borderRadius: 24,
      padding: 18,

      borderWidth: 1,
      borderColor: theme.primary,

      gap: 16,
    },

    historyHeader: {
      flexDirection: "row",
      alignItems: "center",
      gap: 14,
    },

    historyIconContainer: {
      width: 52,
      height: 52,
      borderRadius: 16,

      justifyContent: "center",
      alignItems: "center",

      backgroundColor: `${theme.primary}15`,
    },

    historyIcon: {
      fontSize: 28,
      color: theme.primary,
    },

    historyTitle: {
      fontSize: 18,
      fontWeight: "800",
      color: theme.primary,
    },

    historyInfoRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    historyLabel: {
      fontSize: 15,
      color: theme.secondary,
    },

    historyValue: {
      fontSize: 15,
      fontWeight: "800",
      color: theme.primary,
    },

    modalTitle: {
      fontSize: 28,
      fontWeight: "900",
      color: theme.primary,
      textAlign: "center",
      marginBottom: 10,
      letterSpacing: 0.5,
    },

    divider: {
      height: 1,
      backgroundColor: `${theme.primary}15`,
      marginVertical: 2,
    },

    closeButton: {
      position: "absolute",
      top: 18,
      right: 18,

      width: 40,
      height: 40,
      borderRadius: 20,

      justifyContent: "center",
      alignItems: "center",

      backgroundColor: `${theme.primary}15`,

      zIndex: 999,
    },

    closeIcon: {
      fontSize: 24,
      color: theme.primary,
    },
  });
}