// sections/NotificationsSection.tsx

import { Pressable, ScrollView, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Text } from "@/src/components/ui";
import { useTheme } from "@/src/hooks/theme/useTheme";

import { createStyles } from "../styles";

import { useNotification } from "@/src/hooks/notification/useNotification";

export default function NotificationsSection() {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const { permissionGranted, requestPermission } = useNotification();

  return (
    <>
      <Text style={styles.modalTitle}>
        Notificações
      </Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
        style={{
          width: "100%",
          maxHeight: 500,
        }}
      >
        <View style={styles.notificationsHistoryContainer}>

          {!permissionGranted ? (
            <>
              <View style={styles.notificationHistoryCard}>
                <View style={styles.notificationTop}>
                  <View style={styles.notificationDangerIcon}>
                    <MaterialCommunityIcons
                      name="bell-alert"
                      style={styles.notificationIcon}
                    />
                  </View>

                  <View style={{ flex: 1 }}>

                    <Text style={styles.notificationHistoryText}>
                      Receba notificações de alertas críticos
                    </Text>
                  </View>
                </View>
              </View>
              <Pressable style={styles.enableNotificationsButton} onPress={requestPermission}>
                <Text style={styles.enableNotificationsText}>
                  Ativar
                </Text>
              </Pressable>
            </>
          ) : (
            <>
              <View style={styles.notificationHistoryCard}>
                <View style={styles.notificationTop}>
                  <View style={styles.notificationDangerIcon}>
                    <MaterialCommunityIcons
                      name="thermometer-high"
                      style={styles.notificationIcon}
                    />
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={styles.notificationHistoryTitle}>
                      Temperatura Alta
                    </Text>

                    <Text style={styles.notificationHistoryText}>
                      Temperatura atingiu 39°C
                    </Text>
                  </View>
                </View>

                <View style={styles.notificationFooter}>
                  <MaterialCommunityIcons
                    name="clock-outline"
                    style={styles.notificationFooterIcon}
                  />

                  <Text style={styles.notificationDate}>
                    07/05/2026 • 14:32
                  </Text>
                </View>
              </View>

              <View style={styles.notificationHistoryCard}>
                <View style={styles.notificationTop}>
                  <View style={styles.notificationDangerIcon}>
                    <MaterialCommunityIcons
                      name="thermometer-high"
                      style={styles.notificationIcon}
                    />
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={styles.notificationHistoryTitle}>
                      Temperatura Alta
                    </Text>

                    <Text style={styles.notificationHistoryText}>
                      Temperatura atingiu 38.8°C
                    </Text>
                  </View>
                </View>

                <View style={styles.notificationFooter}>
                  <MaterialCommunityIcons
                    name="clock-outline"
                    style={styles.notificationFooterIcon}
                  />

                  <Text style={styles.notificationDate}>
                    07/05/2026 • 10:14
                  </Text>
                </View>
              </View>


              <View style={styles.notificationHistoryCard}>
                <View style={styles.notificationTop}>
                  <View style={styles.notificationLowIcon}>
                    <MaterialCommunityIcons
                      name="thermometer-low"
                      style={styles.notificationIcon}
                    />
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={styles.notificationHistoryTitle}>
                      Temperatura Baixa
                    </Text>

                    <Text style={styles.notificationHistoryText}>
                      Temperatura caiu para 34°C
                    </Text>
                  </View>
                </View>

                <View style={styles.notificationFooter}>
                  <MaterialCommunityIcons
                    name="clock-outline"
                    style={styles.notificationFooterIcon}
                  />

                  <Text style={styles.notificationDate}>
                    06/05/2026 • 22:18
                  </Text>
                </View>
              </View>

              <View style={styles.notificationHistoryCard}>
                <View style={styles.notificationTop}>
                  <View style={styles.notificationWarningIcon}>
                    <MaterialCommunityIcons
                      name="wifi-alert"
                      style={styles.notificationIcon}
                    />
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={styles.notificationHistoryTitle}>
                      Wi-Fi Desconectado
                    </Text>

                    <Text style={styles.notificationHistoryText}>
                      O dispositivo perdeu conexão.
                    </Text>
                  </View>
                </View>

                <View style={styles.notificationFooter}>
                  <MaterialCommunityIcons
                    name="clock-outline"
                    style={styles.notificationFooterIcon}
                  />

                  <Text style={styles.notificationDate}>
                    05/05/2026 • 09:41
                  </Text>
                </View>
              </View>

              <View style={styles.notificationHistoryCard}>
                <View style={styles.notificationTop}>
                  <View style={styles.notificationWarningIcon}>
                    <MaterialCommunityIcons
                      name="sync-alert"
                      style={styles.notificationIcon}
                    />
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={styles.notificationHistoryTitle}>
                      Falha no Giro
                    </Text>

                    <Text style={styles.notificationHistoryText}>
                      Um giro automático falhou.
                    </Text>
                  </View>
                </View>

                <View style={styles.notificationFooter}>
                  <MaterialCommunityIcons
                    name="clock-outline"
                    style={styles.notificationFooterIcon}
                  />

                  <Text style={styles.notificationDate}>
                    04/05/2026 • 03:12
                  </Text>
                </View>
              </View>
            </>
          )}

        </View>
      </ScrollView>
    </>
  );
}