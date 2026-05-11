import { StyleSheet } from "react-native";

export function createStyles(theme: any) {
  return StyleSheet.create({
    container: {
      flex: 1,
    },

    overlay: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.72)",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 24,
    },

    modalView: {
      width: "100%",
      maxWidth: 370,
      backgroundColor: theme.card || theme.background,
      borderRadius: 32,
      paddingVertical: 34,
      paddingHorizontal: 26,
      alignItems: "center",

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 20,
      elevation: 12,

      borderWidth: 1.5,
      borderColor: `${theme.primary}40`,
    },

    headerIconContainer: {
      width: 88,
      height: 88,
      borderRadius: 44,
      backgroundColor: `${theme.primary}18`,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 22,
    },

    headerIcon: {
      fontSize: 50,
      color: theme.primary,
    },

    modalTitle: {
      fontSize: 36,
      fontWeight: "800",
      color: theme.text,
      textAlign: "center",
      marginBottom: 14,
      letterSpacing: 0.3,
    },

    valueContainer: {
      width: "100%",
      backgroundColor: `${theme.primary}12`,
      paddingVertical: 18,
      paddingHorizontal: 16,
      borderRadius: 20,
      alignItems: "center",
      marginBottom: 28,
    },

    modalValue: {
      fontSize: 32,
      fontWeight: "900",
      color: theme.primary,
      textAlign: "center",
    },

    closeButton: {
      width: "100%",
      backgroundColor: theme.primary,
      paddingVertical: 16,
      borderRadius: 18,
      justifyContent: "center",
      alignItems: "center",

      shadowColor: theme.primary,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.25,
      shadowRadius: 12,
      elevation: 8,
    },

    closeButtonText: {
      color: theme.primary,
      fontSize: 16,
      fontWeight: "800",
      letterSpacing: 0.5,
    },

    icon: {
      fontSize: 34,
      color: theme.background,
    },
  });
}