import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebSocketProvider } from "@/src/contexts/websocket/WebSocketProvider";
import { AuthProvider } from "@/src/contexts/auth/AuthContext";
import { ThemeProvider } from "@/src/contexts/theme/ThemeContext";
import { NotificationProvider } from "@/src/contexts/notification/NotificationContext";

export default function Layout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NotificationProvider>
          <WebSocketProvider>
            <SafeAreaView style={{ flex: 1 }}>
              <Slot />
            </SafeAreaView>
          </WebSocketProvider>
        </NotificationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}