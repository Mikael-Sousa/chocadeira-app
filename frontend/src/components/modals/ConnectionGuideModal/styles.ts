import { StyleSheet } from "react-native";
import { colors } from "@/src/constants/colors";

export function createStyles(theme: any) {
  return StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: colors.overlayBlack60,
      justifyContent: "center",
      alignItems: "center",
    },

    modalView: {
      width: "90%",
      backgroundColor: theme.surface,
      borderRadius: 16,
      padding: 20,
      alignItems: "center",
      position: "relative",
    },

    title: {
      fontSize: 20,
      fontWeight: "600",
      color: theme.primary,
      marginBottom: 16,
      fontFamily: theme.fontRegular,
    },

    slide: {
      width: "100%",
      alignItems: "center",
      paddingVertical: 12,
    },

    stepTitle: {
      fontSize: 16,
      fontWeight: "600",
      color: theme.primary,
      textAlign: "center",
      marginBottom: 12,
    },

    card: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: "90%",
      gap: 8,
      paddingVertical: 20,
      paddingHorizontal: 24,
      backgroundColor: theme.background,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: theme.secondary,
      borderRadius: 16,
    },

    cardTitle: {
      fontSize: 14,
      fontWeight: "500",
      color: theme.primary,
    },

    description: {
      fontSize: 14,
      color: theme.secondary,
      textAlign: "center",
      lineHeight: 20,
      marginBottom: 20,
      paddingHorizontal: 8,
    },

    pagination: {
      flexDirection: "row",
      gap: 6,
      marginTop: 8,
    },

    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: theme.secondary,
      opacity: 0.4,
    },

    dotActive: {
      backgroundColor: theme.primary,
      opacity: 1,
      width: 16,
    },

    actions: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 12,
    },

    closeButton: {
      position: "absolute",
      top: 12,
      right: 12,
      padding: 6,
    },
  });
}
