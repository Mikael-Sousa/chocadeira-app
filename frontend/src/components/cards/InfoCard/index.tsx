import { useTheme } from "@/src/theme/useTheme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { Text } from "@/src/components/ui";
import MenuModal from "../../modals/Menu";
import AppModal from "../../modals/Modal";
import { createStyles } from "./styles";

export type IconName =
  | "thermometer"
  | "water"
  | "egg-outline"
  | "clock-outline"
  | "sync"
  | "door-open"
  | "calendar"
  | "calendar-month-outline"
  | "calendar-month"
  | "calendar-week"
  | "calendar-week-outline"
  | "calendar-today"
  | "calendar-today-outline"
  | "weather-windy"
  | "bluetooth"
  | "wifi"
  | "numeric"
  | "view-dashboard-outline"
  | "theme-light-dark"
  | "bell-outline"
  | "translate"
  | "account-cog-outline"
  | "information-outline";

export type Item = {
  icon?: IconName;
  title: string;
  status: string;
  hiddenStatus: string;
  connection?: boolean;
};

type Props = {
  data: Item[];
  showModal: boolean;
  showMenu: boolean;
  title: string;
  situations?: string[];
};

export default function InfoCard({ data, showModal, title, showMenu, situations }: Props) {
  const [visible, setVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const { theme } = useTheme();
  const styles = createStyles(theme);

  const contentList = (
    <>
      {data.map((item, index) => (
        <Pressable
            style = {
              [
              styles.content,
              situations?.[index] === "red" && { backgroundColor: "tomato" },
              situations?.[index] === "blue" && { backgroundColor: "skyblue" },
              item.connection === true && { backgroundColor: "#32CD32" }
              ]}


          key = { index }
          onPress = {() => {
            if (showModal) {
        setSelectedItem(index);
      setVisible(true);
      return;
            }

      if (showMenu && item.title === "Tema") {
        setMenuVisible(true);
      return;
            }
          }}
        >
      <MaterialCommunityIcons name={item.icon} style={styles.icon} />
      <Text style={styles.title}>{item.connection === true ? "Conectado" : item.title} </Text>
      <Text style={styles.status}>{item.status}</Text>
    </Pressable>
      ))
}
    </>
  );

return (
  <View style={[styles.container, { flex: 1 }]}>
    <Text style={styles.title}>{title}</Text>

    {data.length >= 4 ? (
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>{contentList}</ScrollView>
    ) : (
      <>{contentList}</>
    )}

    <AppModal
      visible={visible}
      setVisible={setVisible}
      data={data}
      selectedItem={selectedItem}
    />

    <MenuModal visible={menuVisible} setVisible={setMenuVisible} />
  </View>
);
}
