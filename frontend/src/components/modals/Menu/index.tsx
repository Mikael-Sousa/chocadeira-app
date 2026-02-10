import { useTheme } from "@/src/theme/useTheme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text } from "@/src/components/ui";
import { Modal, Pressable, View } from "react-native";
import { createStyles } from "./styles";
import { Props } from "./types";
import { useWebSocket } from "@/src/contexts/websocket/useWebSocket";

export default function MenuModal({ visible, setVisible, typeMenu, setVisibleSlides, connected }: Props) {
  const { theme, toggleTheme } = useTheme();
  const styles = createStyles(theme);

  const { disconnect, connect } = useWebSocket();

  function renderContent() {
    switch (typeMenu) {
      case "tema":
        return (
          <>
            <Text style={styles.modalTitle}>{typeMenu === "tema" || "wifi" ? typeMenu : ""}</Text>

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
                if (theme.backgroundMain === "#fff") toggleTheme();
                setVisible(false);
              }}
            >
              <MaterialCommunityIcons name="weather-night" style={styles.icon} />
              <Text style={styles.menuTextDark}>Escuro</Text>
            </Pressable>
          </>
        );

      case "wi-fi":
        return (
          <>
            <Text style={styles.modalTitle}>{typeMenu}</Text>
            <Pressable
              style={[
                styles.menuItem,
                {
                  backgroundColor: connected === true ? "#ff0808" : "#08ff10",
                },
              ]}

              onPress={() => {
                if (connected) {
                  disconnect()
                  setVisible(false);
                }
                else {
                  connect()
                  setVisible(false)
                }
              }}
            >
              <MaterialCommunityIcons name="wifi-check" style={styles.icon} />
              <Text style={styles.menuText}>{connected === true ? "Desconectar" : "Conectar"}</Text>

            </Pressable>
            <Pressable
              style={styles.menuItem}
              onPress={() => {
                if (setVisibleSlides) {
                  setVisibleSlides(true);
                }

                setVisible(false);
              }}
            >
              <MaterialCommunityIcons name="help-rhombus-outline" style={styles.icon} />
              <Text style={styles.menuText}>Turorial</Text>
            </Pressable>
          </>
        );

      default:
        return null;
    }
  }

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modalView}>
          {renderContent()}

          <Pressable style={styles.closeButton} onPress={() => setVisible(false)}>
            <MaterialCommunityIcons name="close" style={styles.closeIcon} />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
