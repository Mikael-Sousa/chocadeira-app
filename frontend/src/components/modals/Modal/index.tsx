import { useTheme } from "@/src/theme/useTheme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { createStyles } from "./styles";
export type Item = {
  title: string;
  status: string;
  hiddenStatus: string;
};

type Props = {
  visible: boolean;
  setVisible: (value: boolean) => void;
  data: Item[];
  selectedItem: number;
};

export default function AppModal({ visible, setVisible, data, selectedItem }: Props) {
  const { theme } = useTheme(); 
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{data[selectedItem].title}</Text>
            <Text style={styles.modalValue}>{data[selectedItem].hiddenStatus}</Text>
            <Pressable style={styles.closeButton} onPress={() => setVisible(false)}>
              <Ionicons name="close" style={styles.icon} />
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
