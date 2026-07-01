import { StyleSheet } from "react-native";
import { colors } from "@/src/constants/colors";

export function createStyles(theme: any) {
  return StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: colors.overlayBlack60,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 24,
    },

    modalView: {
      width: "100%",
      maxWidth: 420,
      maxHeight: "90%",
      backgroundColor: theme.surface,
      borderRadius: 18,
      padding: 16,
      alignItems: "center",
      borderWidth: 2,
      borderColor: theme.primary,
    },

    header: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 8,
      position: "relative",
    },

    title: {
      fontSize: 20,
      fontWeight: "600",
      color: theme.primary,
      fontFamily: theme.fontRegular,
      textAlign: "center",
    },

    scrollView: {
      width: "100%",
      maxHeight: "100%",
    },

    scrollContent: {
      width: "100%",
      alignItems: "center",
      paddingBottom: 8,
    },

    slide: {
      width: "100%",
      alignItems: "center",
      paddingVertical: 4,
    },

    contentBlock: {
      width: "100%",
      alignItems: "center",
    },

    stepTitle: {
      fontSize: 16,
      fontWeight: "600",
      color: theme.primary,
      textAlign: "center",
      marginBottom: 10,
    },

    card: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 16,
      paddingHorizontal: 16,
      backgroundColor: theme.background,
      marginBottom: 12,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: theme.secondary,
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
      width: "100%",
      justifyContent: "space-between",
      alignItems: "stretch",
      marginBottom: 12,
    },

    smallCard: {
      width: "48%",
      marginHorizontal: 4,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 8,
      backgroundColor: theme.background,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.secondary,
      minHeight: 120,
      height: 120,
      flexShrink: 0,
    },

    smallCardTitle: {
      fontSize: 12,
      color: theme.primary,
      marginTop: 6,
      fontWeight: "500",
      textAlign: "center",
      maxWidth: "100%",
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
      marginBottom: 12,
      paddingHorizontal: 8,
      width: "100%",
    },

    pagination: {
      flexDirection: "row",
      marginTop: 6,
      alignItems: "center",
    },

    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: theme.secondary,
      opacity: 0.4,
      marginHorizontal: 3,
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
      marginTop: 10,
      paddingHorizontal: 4,
    },

    closeButton: {
      position: "absolute",
      right: 0,
      padding: 6,
    },
  });
}
