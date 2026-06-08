import { Modal, Pressable, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useTheme } from "@/src/hooks/theme/useTheme";
import { createStyles } from "./styles";

import ThemeSection from "./sections/ThemeSection";
import NotificationsSection from "./sections/NotificationsSection";
import LanguageSection from "./sections/LanguageSection";
import AccountSection from "./sections/AccountSection";
import AboutSection from "./sections/AboutSection";
import WifiSection from "./sections/WifiSection";

import { Props } from "./types";

export default function SettingsModal({
  visible,
  setVisible,
  typeMenu,
  connected,
}: Props) {

  const { theme } = useTheme();
  const styles = createStyles(theme);

  function renderContent() {
    switch (typeMenu) {

      case "Tema":
        return (
          <ThemeSection
            setVisible={setVisible}
          />
        );

      case "Notificações":
        return <NotificationsSection />;

      case "Idioma":
        return (
          <LanguageSection
            setVisible={setVisible}
          />
        );

      case "Conta":
        return <AccountSection />;

      case "Sobre":
        return <AboutSection />;

      case "wi-fi":
        return (
          <WifiSection
            connected={connected}
            setVisible={setVisible}
          />
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

          <Pressable
            style={styles.closeButton}
            onPress={() => setVisible(false)}
          >
            <MaterialCommunityIcons
              name="close"
              style={styles.closeIcon}
            />
          </Pressable>

        </View>

      </View>

    </Modal>
  );
}