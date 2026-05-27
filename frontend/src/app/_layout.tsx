import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebSocketProvider } from "@/src/contexts/websocket/WebSocketProvider";
import { AuthProvider } from "@/src/contexts/auth/AuthContext";
import { ThemeProvider } from "@/src/contexts/theme/ThemeContext";

export default function Layout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <WebSocketProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <Slot />
          </SafeAreaView>
        </WebSocketProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
