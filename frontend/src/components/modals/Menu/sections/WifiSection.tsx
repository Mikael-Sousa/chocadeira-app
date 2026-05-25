// sections/WifiSection.tsx

import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Text } from "@/src/components/ui";
import { useTheme } from "@/src/hooks/theme/useTheme";

import { useWebSocket } from "@/src/contexts/websocket/useWebSocket";

import { createStyles } from "../styles";

type Props = {
  connected?: boolean;
  setVisible: (value: boolean) => void;
  setVisibleSlides?: (value: boolean) => void;
};

export default function WifiSection({
  connected,
  setVisible,
  setVisibleSlides,
}: Props) {

  const { theme } = useTheme();
  const styles = createStyles(theme);

  const { disconnect, connect } = useWebSocket();

  return (
    <>
      <Text style={styles.modalTitle}>
        Wi-Fi
      </Text>

      <Pressable
        style={[
          styles.menuItem,
          {
            backgroundColor: connected
              ? "#ff0808"
              : "#08ff10",
          },
        ]}
        onPress={() => {

          if (connected) {
            disconnect();
          } else {
            connect();
          }

          setVisible(false);
        }}
      >
        <MaterialCommunityIcons
          name="wifi-check"
          style={styles.icon}
        />

        <Text style={styles.menuText}>
          {connected
            ? "Desconectar"
            : "Conectar"}
        </Text>
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
        <MaterialCommunityIcons
          name="help-rhombus-outline"
          style={styles.icon}
        />

        <Text style={styles.menuText}>
          Tutorial
        </Text>
      </Pressable>
    </>
  );
}