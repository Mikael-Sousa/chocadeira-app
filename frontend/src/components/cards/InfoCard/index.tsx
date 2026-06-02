import { useTheme } from "@/src/hooks/theme/useTheme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { Text } from "@/src/components/ui";
import { colors } from "@/src/constants/colors";
import ConnectionGuideModal from "../../modals/ConnectionGuideModal";
import SettingsModal from "../../modals/SettingsModal";
import DetailModal from "../../modals/DetailModal";
import { createStyles } from "./styles";
import { Props } from "./types";

export default function InfoCard({ data, showModal, title, showMenu, situations, showSlides, typeMenu }: Props) {
  const [visible, setVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [slidesVisible, setSlidesVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const { theme } = useTheme();
  const styles = createStyles(theme);

  const contentList = (
    <>
      {data.map((item, index) => (
        <Pressable
          style={
            [
              styles.content,
              situations?.[index] === "red" && { backgroundColor: colors.red },
              situations?.[index] === "blue" && { backgroundColor: colors.blue },
              item.connection === true && { backgroundColor: colors.green },
              item.connection === false && { backgroundColor: colors.red },
            ]}


          key={index}
          onPress={() => {
            setSelectedItem(index);

            if (showModal) {
              setVisible(true);
              return;
            }

            if (showMenu) {
              setMenuVisible(true);
              return;
            }

            if (showSlides) {
              setSlidesVisible(true);
              return;
            }
          }}

        >
          <MaterialCommunityIcons name={item.icon} style={styles.icon} />
          <Text style={styles.title}>
            {item.title === "Wi-Fi"
              ? item.connection === true
                ? "Conectado"
                : "Desconectado"
              : item.title}
          </Text>

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

      <DetailModal
        visible={visible}
        setVisible={setVisible}
        data={data}
        selectedItem={selectedItem}
      />

      <SettingsModal
        visible={menuVisible}
        setVisible={setMenuVisible}
        typeMenu={typeMenu?.[selectedItem]}
        setVisibleSlides={setSlidesVisible}
        connected={data[0].connection}
      />

      <ConnectionGuideModal visible={slidesVisible} setVisible={setSlidesVisible} />

    </View>
  );
}
