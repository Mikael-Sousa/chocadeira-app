import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";
import { createStyles } from "./styles";
import { useTheme } from "@/src/hooks/theme/useTheme";

export default function Navbar() {
  const { theme } = useTheme();
  const router = useRouter();
  const styles = createStyles(theme);

  type IconName = "home" | "chart-bar" | "thermometer" | "cog";

  type Item = {
    icon: IconName;
    route: Href;
  };

  const list: Item[] = [
    { icon: "home", route: "/" },
    { icon: "chart-bar", route: "/statistics" },
    { icon: "thermometer", route: "/temperature" },
    { icon: "cog", route: "/settings" },
  ];

  return (
    <View style={styles.navbar}>
      {list.map((item, index) => (
        <Pressable key={index} onPress={() => router.push(item.route)}>
          <MaterialCommunityIcons name={item.icon} style={styles.icon} />
        </Pressable>
      ))}
    </View>
  );
}
