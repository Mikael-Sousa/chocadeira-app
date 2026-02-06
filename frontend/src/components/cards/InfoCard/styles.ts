import { FONTS } from "@/src/theme/styles";
import { StyleSheet } from "react-native";

export function createStyles(theme: {
  primary: string;
  secondary: string;
  backgroundMain: string;
  background: string;
}) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundMain,
      paddingHorizontal: 20,
      justifyContent: "space-between",
      width: "100%",
    },
    content: {
      flexDirection: "row",
      padding: 20,
      borderRadius: 8,
      alignItems: "center",
      flex: 1,
      marginVertical: 5,
      backgroundColor: theme.background,
      justifyContent: "space-between",
      borderColor: theme.primary,
      borderWidth: 2,
    },
    icon: {
      fontSize: 28,
      color: theme.primary,
    },
    title: {
      color: theme.primary,
      fontSize: FONTS.fontSize1,
    },
    status: {
      color: theme.primary,
      fontSize: FONTS.fontSize1,
    },
  });
}
