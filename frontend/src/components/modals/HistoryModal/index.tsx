import { useTheme } from "@/src/hooks/theme/useTheme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

import {
  Modal,
  Pressable,
  ScrollView,
  View,
} from "react-native";

import { Text } from "@/src/components/ui";
import { createStyles } from "./styles";
import { Props } from "./types";

export default function HistoryModal({
  visible,
  setVisible,
}: Props) {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <View style={styles.overlay}>

        <View style={styles.modalView}>

          {/* CLOSE */}
          <Pressable
            style={styles.closeButton}
            onPress={() => setVisible(false)}
          >
            <MaterialCommunityIcons
              name="close"
              style={styles.closeIcon}
            />
          </Pressable>

          {/* TITLE */}
          <Text style={styles.modalTitle}>
            Histórico Diário
          </Text>

          {/* SCROLL */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              width: "100%",
              maxHeight: 550,
            }}
            contentContainerStyle={{
              paddingBottom: 30,
            }}
          >

            <View style={styles.historyContainer}>

              {/* DEVICE */}
              <View style={styles.historyCard}>

                <View style={styles.historyHeader}>
                  <View style={styles.historyIconContainer}>
                    <MaterialCommunityIcons
                      name="chip"
                      style={styles.historyIcon}
                    />
                  </View>

                  <Text style={styles.historyTitle}>
                    Dispositivo
                  </Text>
                </View>

                <View style={styles.historyInfoRow}>
                  <Text style={styles.historyLabel}>
                    ID
                  </Text>

                  <Text style={styles.historyValue}>
                    ESP32-01
                  </Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.historyInfoRow}>
                  <Text style={styles.historyLabel}>
                    Data
                  </Text>

                  <Text style={styles.historyValue}>
                    11/05/2026
                  </Text>
                </View>

              </View>

              {/* TEMPERATURA */}
              <View style={styles.historyCard}>

                <View style={styles.historyHeader}>
                  <View style={styles.historyIconContainer}>
                    <MaterialCommunityIcons
                      name="water"
                      style={styles.historyIcon}
                    />
                  </View>

                  <Text style={styles.historyTitle}>
                    Temp. da Água
                  </Text>
                </View>

                <View style={styles.historyInfoRow}>
                  <Text style={styles.historyLabel}>
                    Máxima
                  </Text>

                  <Text style={styles.historyValue}>
                    38.5°C
                  </Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.historyInfoRow}>
                  <Text style={styles.historyLabel}>
                    Mínima
                  </Text>

                  <Text style={styles.historyValue}>
                    36.9°C
                  </Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.historyInfoRow}>
                  <Text style={styles.historyLabel}>
                    Fora da faixa
                  </Text>

                  <Text style={styles.historyValue}>
                    5 leituras
                  </Text>
                </View>

              </View>

              <View style={styles.historyCard}>

                <View style={styles.historyHeader}>
                  <View style={styles.historyIconContainer}>
                    <MaterialCommunityIcons
                      name="weather-windy"
                      style={styles.historyIcon}
                    />
                  </View>

                  <Text style={styles.historyTitle}>
                    Temp. do Ar
                  </Text>
                </View>

                <View style={styles.historyInfoRow}>
                  <Text style={styles.historyLabel}>
                    Máxima
                  </Text>

                  <Text style={styles.historyValue}>
                    38.5°C
                  </Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.historyInfoRow}>
                  <Text style={styles.historyLabel}>
                    Mínima
                  </Text>

                  <Text style={styles.historyValue}>
                    36.9°C
                  </Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.historyInfoRow}>
                  <Text style={styles.historyLabel}>
                    Fora da faixa
                  </Text>

                  <Text style={styles.historyValue}>
                    5 leituras
                  </Text>
                </View>

              </View>

              {/* UMIDADE */}
              <View style={styles.historyCard}>

                <View style={styles.historyHeader}>
                  <View style={styles.historyIconContainer}>
                    <MaterialCommunityIcons
                      name="water-percent"
                      style={styles.historyIcon}
                    />
                  </View>

                  <Text style={styles.historyTitle}>
                    Umidade
                  </Text>
                </View>

                <View style={styles.historyInfoRow}>
                  <Text style={styles.historyLabel}>
                    Máxima
                  </Text>

                  <Text style={styles.historyValue}>
                    63%
                  </Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.historyInfoRow}>
                  <Text style={styles.historyLabel}>
                    Mínima
                  </Text>

                  <Text style={styles.historyValue}>
                    51%
                  </Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.historyInfoRow}>
                  <Text style={styles.historyLabel}>
                    Fora da faixa
                  </Text>

                  <Text style={styles.historyValue}>
                    3 leituras
                  </Text>
                </View>

              </View>

              {/* OSCILAÇÕES */}
              <View style={styles.historyCard}>

                <View style={styles.historyHeader}>
                  <View style={styles.historyIconContainer}>
                    <MaterialCommunityIcons
                      name="chart-line"
                      style={styles.historyIcon}
                    />
                  </View>

                  <Text style={styles.historyTitle}>
                    Oscilações
                  </Text>
                </View>

                <View style={styles.historyInfoRow}>
                  <Text style={styles.historyLabel}>
                    Tempo fora da faixa
                  </Text>

                  <Text style={styles.historyValue}>
                    1h 30min
                  </Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.historyInfoRow}>
                  <Text style={styles.historyLabel}>
                    Maior tempo contínuo
                  </Text>

                  <Text style={styles.historyValue}>
                    20min
                  </Text>
                </View>

              </View>

              {/* GIROS */}
              <View style={styles.historyCard}>

                <View style={styles.historyHeader}>
                  <View style={styles.historyIconContainer}>
                    <MaterialCommunityIcons
                      name="sync"
                      style={styles.historyIcon}
                    />
                  </View>

                  <Text style={styles.historyTitle}>
                    Giros Automáticos
                  </Text>
                </View>

                <View style={styles.historyInfoRow}>
                  <Text style={styles.historyLabel}>
                    Giros realizados
                  </Text>

                  <Text style={styles.historyValue}>
                    8
                  </Text>
                </View>

              </View>

              {/* NOTIFICAÇÕES */}
              <View style={styles.historyCard}>

                <View style={styles.historyHeader}>
                  <View style={styles.historyIconContainer}>
                    <MaterialCommunityIcons
                      name="bell-outline"
                      style={styles.historyIcon}
                    />
                  </View>

                  <Text style={styles.historyTitle}>
                    Notificações
                  </Text>
                </View>

                <View style={styles.historyInfoRow}>
                  <Text style={styles.historyLabel}>
                    Emitidas
                  </Text>

                  <Text style={styles.historyValue}>
                    6
                  </Text>
                </View>

              </View>

              {/* CONEXÃO */}
              <View style={styles.historyCard}>

                <View style={styles.historyHeader}>
                  <View style={styles.historyIconContainer}>
                    <MaterialCommunityIcons
                      name="wifi-alert"
                      style={styles.historyIcon}
                    />
                  </View>

                  <Text style={styles.historyTitle}>
                    Conectividade
                  </Text>
                </View>

                <View style={styles.historyInfoRow}>
                  <Text style={styles.historyLabel}>
                    Desconexões
                  </Text>

                  <Text style={styles.historyValue}>
                    1
                  </Text>
                </View>

              </View>

            </View>

          </ScrollView>

        </View>

      </View>
    </Modal>
  );
}