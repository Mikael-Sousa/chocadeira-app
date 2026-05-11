import { useTheme } from "@/src/theme/useTheme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text } from "@/src/components/ui";
import { Modal, Pressable, View } from "react-native";
import { createStyles } from "./styles";
import { Props } from "./types";

export default function AppModal({
  visible,
  setVisible,
  data,
  selectedItem,
}: Props) {
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

            <View style={styles.headerIconContainer}>
              <Ionicons
                name="information-circle-outline"
                style={styles.headerIcon}
              />
            </View>

            <Text style={styles.modalTitle}>
              {data[selectedItem].title}
            </Text>

            <View style={styles.valueContainer}>
              <Text style={styles.modalValue}>
                {data[selectedItem].hiddenStatus}
              </Text>
            </View>

            <Pressable
              style={styles.closeButton}
              onPress={() => setVisible(false)}
            >
              <Ionicons name="close" style={styles.icon} />
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}