// sections/AboutSection.tsx

import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Text } from "@/src/components/ui";
import { useTheme } from "@/src/theme/useTheme";

import { createStyles } from "../styles";

export default function AboutSection() {

  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <>
      <Text style={styles.modalTitle}>
        Sobre
      </Text>

      <View style={styles.aboutContainer}>

        <View style={styles.aboutLogo}>
          <MaterialCommunityIcons
            name="egg-easter"
            style={styles.aboutLogoIcon}
          />
        </View>

        <Text style={styles.aboutAppName}>
          CHOKEDEX
        </Text>

        <Text style={styles.aboutVersion}>
          Versão 1.0.0
        </Text>

        <View style={styles.aboutCard}>

          <View style={styles.aboutRow}>
            <MaterialCommunityIcons
              name="robot-outline"
              style={styles.aboutIcon}
            />

            <Text style={styles.aboutText}>
              Sistema inteligente de monitoramento para chocadeiras.
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.aboutRow}>
            <MaterialCommunityIcons
              name="react"
              style={styles.aboutIcon}
            />

            <Text style={styles.aboutText}>
              Desenvolvido com React Native + ESP32.
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.aboutRow}>
            <MaterialCommunityIcons
              name="school-outline"
              style={styles.aboutIcon}
            />

            <Text style={styles.aboutText}>
              Projeto acadêmico do IFPI.
            </Text>
          </View>

        </View>

        <Text style={styles.aboutFooter}>
          © 2026 Smart Hatch
        </Text>

      </View>
    </>
  );
}