// sections/NotificationsSection.tsx

import { Pressable, ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Text } from "@/src/components/ui";
import { useTheme } from "@/src/hooks/theme/useTheme";

import { createStyles } from "../styles";

import { useNotification } from "@/src/hooks/notification/useNotification";

import { getNotificationsAPI } from "@/src/services/api/notifications/getNotifications";
import { getToken } from "@/src/services/auth/storage";

export default function NotificationsSection() {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const { permissionGranted, requestPermission } = useNotification();

  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const token = await getToken();
      if (typeof token === "string") {
        try {
          const res = await getNotificationsAPI(token);
          setNotifications(Array.isArray(res.data) ? res.data : [res.data]);
        } catch (error) {
          console.error("Error fetching notifications:", error);
        }
      }
    };

    fetchNotifications();
  }, []);

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
          ) : notifications.length > 0 ? (
            <>
            {notifications.map((v, index) => (
              <View key={index} style={styles.notificationHistoryCard}>
                <View style={styles.notificationTop}>
                  <View style={notifications[index]?.status === "high" ? styles.notificationDangerIcon :
                    notifications[index]?.status === "low" ? styles.notificationLowIcon :
                      styles.notificationWarningIcon}>
                    <MaterialCommunityIcons
                      name={notifications[index]?.status === "high" ?
                        notifications[index]?.sensor === "humidity" ? "water-percent" :
                        notifications[index]?.sensor === "air_temperature" ? "thermometer-high" :
                        notifications[index]?.sensor === "water_temperature" ? "thermometer-high" :
                        "thermometer-high"
                        : notifications[index]?.status === "low" ?
                        notifications[index]?.sensor === "humidity" ? "water-percent" :
                        notifications[index]?.sensor === "air_temperature" ? "thermometer-low" :
                        notifications[index]?.sensor === "water_temperature" ? "thermometer-low" :
                        "thermometer-low"
                        : "wifi-alert"}
                      style={styles.notificationIcon}
                    />
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={styles.notificationHistoryTitle}>
                      {notifications[index]?.status === "high" ?
                        notifications[index]?.sensor === "humidity" ? "Umidade Alta" :
                        notifications[index]?.sensor === "air_temperature" ? "Temperatura Alta" :
                        notifications[index]?.sensor === "water_temperature" ? "Temperatura Alta" :
                        "Alerta" :
                        notifications[index]?.status === "low" ?
                        notifications[index]?.sensor === "humidity" ? "Umidade Baixa" :
                        notifications[index]?.sensor === "air_temperature" ? "Temperatura Baixa" :
                        notifications[index]?.sensor === "water_temperature" ? "Temperatura Baixa" :
                        "Alerta" :
                          "Wi-Fi Desconectado"}
                    </Text>

                    <Text style={styles.notificationHistoryText}>
                      {notifications[index]?.status === "high" ? 
                        notifications[index]?.sensor === "humidity" ?
                          `A umidade atingiu ${notifications[index]?.value}%` :
                        notifications[index]?.sensor === "air_temperature" ?
                          `A temperatura do ar atingiu ${notifications[index]?.value}°C` :
                        notifications[index]?.sensor === "water_temperature" ?
                          `A temperatura da água atingiu ${notifications[index]?.value}°C` :
                          "Alerta crítico detectado" :
                        notifications[index]?.status === "low" ?
                          notifications[index]?.sensor === "humidity" ?
                            `A umidade caiu para ${notifications[index]?.value}%` :
                          notifications[index]?.sensor === "air_temperature" ?
                            `A temperatura do ar caiu para ${notifications[index]?.value}°C` :
                          notifications[index]?.sensor === "water_temperature" ?
                            `A temperatura da água caiu para ${notifications[index]?.value}°C` :
                            "Alerta crítico detectado" :
                          "Conexão Wi-Fi perdida"}
                    </Text>
                  </View>
                </View>

                <View style={styles.notificationFooter}>
                  <MaterialCommunityIcons
                    name="clock-outline"
                    style={styles.notificationFooterIcon}
                  />

                  <Text style={styles.notificationDate}>
                    {new Date(notifications[index]?.created_at).toLocaleString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit"
                    })}
                  </Text>
                </View>
              </View>
            ))}
            </>
          ) : (
            <View style={styles.notificationEmptyCard}>
              <View style={styles.notificationEmptyHeader}>
                <MaterialCommunityIcons
                  name="bell-off-outline"
                  style={styles.notificationEmptyIcon}
                />
                <Text style={styles.notificationHistoryTitle}>
                  Nenhuma notificação disponível
                </Text>
              </View>
              <Text style={styles.notificationEmptyText}>
                Tudo está sob controle por enquanto. Volte mais tarde ou mantenha as notificações ativadas para receber alertas em tempo real.
              </Text>
            </View>
          )}

        </View>
      </ScrollView>
    </>
  );
}