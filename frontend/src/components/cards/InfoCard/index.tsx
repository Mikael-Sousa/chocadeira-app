import { useTheme } from "@/src/theme/useTheme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { Text } from "@/src/components/ui";
import MenuModal from "../../modals/Menu";
import AppModal from "../../modals/Modal";
import { createStyles } from "./styles";
import { Props } from "./types";

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
