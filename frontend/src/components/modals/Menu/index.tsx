import { useTheme } from "@/src/theme/useTheme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { createStyles } from "./styles";

type Props = {
  visible: boolean;
  setVisible: (v: boolean) => void;
};

export default function MenuModal({ visible, setVisible }: Props) {
  const { theme, toggleTheme } = useTheme();
  const styles = createStyles(theme);

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Tema</Text>

          <Pressable
            style={styles.menuItemLight}
            onPress={() => {
              if (theme.backgroundMain === "#000") toggleTheme();
              setVisible(false);
            }}
          >
            <MaterialCommunityIcons name="white-balance-sunny" style={styles.icon} />
            <Text style={styles.menuTextLight}>Claro</Text>
          </Pressable>

          <Pressable
            style={styles.menuItemDark}
            onPress={() => {
              if (theme.backgroundMain === "#fff") toggleTheme(); // força para escuro
              setVisible(false);
            }}
          >
            <MaterialCommunityIcons name="weather-night" style={styles.icon} />
            <Text style={styles.menuTextDark}>Escuro</Text>
          </Pressable>

          <Pressable style={styles.closeButton} onPress={() => setVisible(false)}>
            <MaterialCommunityIcons name="close" style={styles.closeIcon} />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
