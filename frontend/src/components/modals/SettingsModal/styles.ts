import { StyleSheet } from "react-native";
import { colors } from "@/src/constants/colors";
import { enableFreeze } from "react-native-screens";

export function createStyles(theme: any) {
  return StyleSheet.create({
    overlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.overlayBlack55,
      paddingHorizontal: 20,
    },

    modalView: {
      width: "90%",
      backgroundColor: theme.background,
      borderWidth: 2,
      borderColor: theme.primary,
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

    menuItem: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.background,
      paddingVertical: 14,
      paddingHorizontal: 14,
      borderRadius: 14,
      marginBottom: 12,
      borderWidth: 2,
      borderColor: theme.secondary,
    },

    menuItemLight: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.white,
      paddingVertical: 14,
      paddingHorizontal: 14,
      borderRadius: 14,
      marginBottom: 12,
      borderWidth: 2,
      borderColor: colors.darkGray,
    },

    menuItemDark: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.darkGray,
      paddingVertical: 14,
      paddingHorizontal: 14,
      borderRadius: 14,
      marginBottom: 12,
      borderWidth: 2,
      borderColor: colors.white,
    },

    icon: {
      fontSize: 26,
      color: theme.secondary,
      marginRight: 12,
    },

    menuText: {
      fontSize: 18,
      fontWeight: "600",
      color: theme.primary,
    },

    menuTextLight: {
      fontSize: 18,
      fontWeight: "600",
      color: colors.darkGray,
    },

    menuTextDark: {
      fontSize: 18,
      fontWeight: "600",
      color: colors.white,
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
    infoContainer: {
      width: "100%",
      gap: 14,
      marginTop: 10,
    },

    infoText: {
      fontSize: 16,
      color: theme.text,
      textAlign: "center",
      lineHeight: 24,
    },
    accountContainer: {
      width: "100%",
      marginTop: 10,
      gap: 26,
    },

    profileSection: {
      alignItems: "center",
      gap: 10,
    },

    avatar: {
      width: 95,
      height: 95,
      borderRadius: 50,
      backgroundColor: `${theme.primary}20`,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 2,
      borderColor: theme.primary,
    },

    avatarIcon: {
      fontSize: 50,
      color: theme.primary,
    },

    accountName: {
      fontSize: 24,
      fontWeight: "800",
      color: theme.primary,
    },

    accountEmail: {
      fontSize: 14,
      color: theme.secondary,
    },

    accountButtonsContainer: {
      gap: 14,
      width: "100%",
    },

    accountButton: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      gap: 14,

      paddingVertical: 16,
      paddingHorizontal: 18,

      borderRadius: 18,
      backgroundColor: `${theme.primary}18`,

      borderWidth: 2,
      borderColor: theme.primary,
    },

    accountButtonIcon: {
      fontSize: 24,
      color: theme.primary,
    },

    accountButtonText: {
      fontSize: 16,
      fontWeight: "700",
      color: theme.primary,
    },

    logoutButton: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,

      marginTop: 8,

      paddingVertical: 16,
      borderRadius: 18,

      backgroundColor: colors.redAlert,
    },

    logoutIcon: {
      fontSize: 24,
      color: colors.white,
    },

    logoutText: {
      fontSize: 16,
      fontWeight: "800",
      color: colors.white,
    },
    aboutContainer: {
      width: "100%",
      alignItems: "center",
      marginTop: 10,
      gap: 18,
    },

    aboutLogo: {
      width: 100,
      height: 100,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: `${theme.primary}18`,
      borderWidth: 2,
      borderColor: theme.primary,
    },

    aboutLogoIcon: {
      fontSize: 52,
      color: theme.primary,
    },

    aboutAppName: {
      fontSize: 28,
      fontWeight: "900",
      color: theme.primary,
    },

    aboutVersion: {
      fontSize: 14,
      color: theme.secondary,
    },

    aboutCard: {
      width: "100%",
      backgroundColor: theme.background,
      borderRadius: 22,
      paddingVertical: 10,
      overflow: "hidden",
      borderWidth: 1,
      borderColor: theme.primary,
    },

    aboutRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 14,
      paddingHorizontal: 18,
      paddingVertical: 18,
    },

    aboutIcon: {
      fontSize: 26,
      color: theme.primary,
    },

    aboutText: {
      flex: 1,
      fontSize: 15,
      lineHeight: 22,
      color: theme.primary,
    },

    aboutFooter: {
      fontSize: 13,
      color: theme.secondary,
      marginTop: 4,
    },
    divider: {
      height: 1,
      backgroundColor: theme.primary,
      marginHorizontal: 18,
    },
    notificationsHistoryContainer: {
      width: "100%",
      marginTop: 12,
      gap: 16,
    },

    notificationHistoryCard: {
      width: "100%",
      backgroundColor: theme.background,
      borderRadius: 22,
      padding: 18,
      borderWidth: 1,
      borderColor: theme.primary,
      gap: 16,
    },

    notificationTop: {
      flexDirection: "row",
      alignItems: "center",
      gap: 14,
    },

    notificationDangerIcon: {
      width: 56,
      height: 56,
      borderRadius: 18,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.danger,
    },

    notificationLowIcon: {
      width: 56,
      height: 56,
      borderRadius: 18,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.info,
    },

    notificationWarningIcon: {
      width: 56,
      height: 56,
      borderRadius: 18,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.warning,
    },

    notificationIcon: {
      fontSize: 28,
      color: theme.primary,
    },

    notificationHistoryTitle: {
      fontSize: 16,
      fontWeight: "800",
      color: theme.primary,
      marginBottom: 4,
    },

    notificationHistoryText: {
      fontSize: 14,
      lineHeight: 20,
      color: theme.secondary,
    },

    notificationEmptyCard: {
      width: "100%",
      backgroundColor: `${theme.primary}15`,
      borderRadius: 22,
      padding: 20,
      borderWidth: 1,
      borderColor: theme.primary,
      gap: 14,
      justifyContent: "center",
    },

    notificationEmptyHeader: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },

    notificationEmptyIcon: {
      fontSize: 24,
      color: theme.primary,
    },

    notificationEmptyText: {
      fontSize: 14,
      lineHeight: 22,
      color: theme.secondary,
    },

    notificationFooter: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },

    notificationFooterIcon: {
      fontSize: 18,
      color: theme.primary,
    },

    notificationDate: {
      fontSize: 13,
      color: theme.secondary,
    },

    enableNotificationsButton: {
      marginTop: 10,
      paddingVertical: 14,
      paddingHorizontal: 18,
      borderRadius: 18,
      backgroundColor: `${theme.primary}18`,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 2,
      borderColor: theme.primary,

    },

    enableNotificationsText: {
      fontSize: 16,
      fontWeight: "700",
      color: theme.primary,
    }
    });
}

