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
      paddingVertical: 8,
    },

    stepTitle: {
      fontSize: 16,
      fontWeight: "600",
      color: theme.primary,
      textAlign: "center",
      marginBottom: 12,
    },

    card: {
      width: "90%",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 18,
      paddingHorizontal: 20,
      backgroundColor: theme.background,
      marginBottom: 12,
      borderRadius: 14,
      borderWidth: 0,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.08,
      shadowRadius: 12,
      elevation: 6,
    },

    iconWrapper: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: theme.surface,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 8,
      borderWidth: 1,
      borderColor: theme.secondary,
    },

    cardRow: {
      flexDirection: "row",
      gap: 12,
      width: "100%",
      justifyContent: "center",
      marginBottom: 12,
    },

    smallCard: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 10,
      paddingHorizontal: 8,
      backgroundColor: theme.background,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.secondary,
    },

    smallCardTitle: {
      fontSize: 12,
      color: theme.primary,
      marginTop: 6,
      fontWeight: "500",
    },

    cardTitle: {
      fontSize: 16,
      fontWeight: "600",
      color: theme.primary,
      textAlign: "center",
    },

    description: {
      fontSize: 13,
      color: theme.secondary,
      textAlign: "center",
      lineHeight: 18,
      marginBottom: 16,
      paddingHorizontal: 12,
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
